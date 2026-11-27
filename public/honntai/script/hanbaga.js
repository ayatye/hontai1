// =====================================================
// スマホ用ハンバーガーメニュー(キャラ検索 + アイコンタイル)
// - 768px 以下で、☰ を押すと開くパネルの中身をここで作る
// - PC のヘッダーリンク(HTML 直書きの <ul>)はそのまま
// - メニューの項目を変えたいときは MENU_TILES / MENU_LINKS だけ直せば全ページ反映
// - キャラ検索は kyararisuto.js の survivors / hunters を使い回す
//   (読み込んでいないページでは検索欄を触ったときに自動で読み込む)
// - リンクはルート絶対パス(ページの深さに関係なく動く)
// =====================================================

const MENU_TILES = [
  { icon: "🏠", label: "ホーム", href: "/" },
  { icon: "📰", label: "最新情報", href: "/honntai/saisinn/saisinn.html" },
  { icon: "👥", label: "キャラ一覧", href: "/honntai/情報/情報.html" },
  { icon: "🏆", label: "サバイバー<br>ティア表", href: "/honntai/sabaran/sabaran.html" },
  { icon: "⚔️", label: "ハンター<br>ティア表", href: "/honntai/hanran/hanran.html" },
  { icon: "🔧", label: "調整まとめ", href: "/honntai/tyousei/tyousei.html" },
  { icon: "📅", label: "カレンダー", href: "/honntai/karenda/karenda.html" },
  { icon: "🎉", label: "コラボ", href: "/honntai/korabo/korabo.html" },
  { icon: "🎁", label: "イベント", href: "/honntai/ibento/ibento.html" },
  { icon: "❓", label: "クイズ", href: "/honntai/kuizu/kuizu.html" },
  { icon: "🔮", label: "人格診断", href: "/honntai/sinndann/sindan.html" },
  { icon: "💬", label: "チャット", href: "/honntai/chat/chat.html" },
];

const MENU_LINKS = [
  { label: "お問い合わせ", href: "/honntai/contact/contact.html" },
  { label: "プライバシーポリシー", href: "/honntai/puraibasi/puraibasi.html" },
  { label: "運営情報", href: "/honntai/uneizyouhou/uneizyouhou.html" },
];

const MENU_KYARA_JS = "/honntai/script/kyararisuto.js";
const MENU_MAX_RESULTS = 8;

(function () {
  const input = document.getElementById("hamburger");
  const wrap = input && input.closest(".c-hamburger-menu");
  if (!wrap || wrap.querySelector(".hm-panel")) return;

  const header = wrap.closest("header");
  const here = decodeURIComponent(location.pathname).replace(/\/index\.html$/, "/");
  const isHere = (href) => here === href || (href === "/" && here === "/");

  // ---------- パネルを組み立て ----------
  const panel = document.createElement("div");
  panel.className = "hm-panel";
  panel.id = "hm-panel";
  panel.setAttribute("aria-label", "メニュー");

  // キャラ検索
  const search = document.createElement("div");
  search.className = "hm-search";
  search.innerHTML =
    '<label class="hm-search__box">' +
    '<span class="hm-search__icon" aria-hidden="true">🔍</span>' +
    '<input type="search" class="hm-search__input" placeholder="キャラ名で検索(例:庭師)" ' +
    'autocomplete="off" enterkeyhint="search" aria-label="キャラ名で検索" />' +
    "</label>" +
    '<ul class="hm-search__results" hidden></ul>';
  panel.appendChild(search);

  // タイル
  const grid = document.createElement("ul");
  grid.className = "hm-grid";
  MENU_TILES.forEach((t) => {
    const li = document.createElement("li");
    li.innerHTML =
      '<a class="hm-tile' + (isHere(t.href) ? " is-current" : "") + '" href="' + t.href + '">' +
      '<span class="hm-tile__icon" aria-hidden="true">' + t.icon + "</span>" +
      '<span class="hm-tile__label">' + t.label + "</span></a>";
    grid.appendChild(li);
  });
  panel.appendChild(grid);

  // 下の小さいリンク
  const sub = document.createElement("div");
  sub.className = "hm-sub";
  sub.innerHTML = MENU_LINKS.map((l) => '<a href="' + l.href + '">' + l.label + "</a>").join("");
  panel.appendChild(sub);

  wrap.insertBefore(panel, input.nextSibling);
  document.documentElement.classList.add("hm-ready");

  const button = wrap.querySelector(".c-hamburger-menu__button");
  if (button) {
    button.setAttribute("role", "button");
    button.setAttribute("aria-controls", "hm-panel");
    button.setAttribute("aria-label", "メニューを開く");
  }

  // ---------- 開け閉め ----------
  function place() {
    // ヘッダーのすぐ下から画面の下までを使う
    const top = header ? Math.max(0, header.getBoundingClientRect().bottom) : 60;
    panel.style.setProperty("--hm-top", top + "px");
  }

  function onToggle() {
    const open = input.checked;
    if (open) place();
    document.documentElement.classList.toggle("hm-open", open);
    if (button) {
      button.setAttribute("aria-expanded", open);
      button.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    }
  }
  input.addEventListener("change", onToggle);
  onToggle();

  function close() {
    if (!input.checked) return;
    input.checked = false;
    onToggle();
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) close();
    else if (input.checked) place();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  // 同じページ内リンク(#〜)を押したときも閉じる
  panel.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });

  // ---------- キャラ検索 ----------
  const box = search.querySelector(".hm-search__input");
  const results = search.querySelector(".hm-search__results");
  let kyaraLoading = false;

  // カタカナ → ひらがな、全角英数 → 半角、空白除去
  function norm(s) {
    return String(s)
      .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
      .replace(/\s+/g, "")
      .toLowerCase();
  }

  function getKyara() {
    if (typeof survivors === "undefined" || typeof hunters === "undefined") return null;
    return survivors
      .map((c) => ({ c: c, type: "saba" }))
      .concat(hunters.map((c) => ({ c: c, type: "hanta" })));
  }

  function loadKyara() {
    if (kyaraLoading) return;
    kyaraLoading = true;
    const s = document.createElement("script");
    s.src = MENU_KYARA_JS;
    s.onload = render;
    document.body.appendChild(s);
  }

  function render() {
    const q = norm(box.value.trim());
    if (!q) {
      results.hidden = true;
      results.innerHTML = "";
      return;
    }
    const all = getKyara();
    if (!all) {
      loadKyara();
      return;
    }
    const hits = all.filter((k) => norm(k.c.name).includes(q));
    results.hidden = false;
    if (!hits.length) {
      results.innerHTML = '<li class="hm-search__empty">見つからへんかった…</li>';
      return;
    }
    results.innerHTML = hits
      .slice(0, MENU_MAX_RESULTS)
      .map(
        (k) =>
          '<li><a class="hm-result" href="' + k.c.link + '">' +
          '<img src="' + k.c.url + '" alt="" width="32" height="32" loading="lazy" />' +
          '<span class="hm-result__name">' + k.c.name + "</span>" +
          '<span class="hm-result__tag hm-result__tag--' + k.type + '">' +
          (k.type === "saba" ? "サバイバー" : "ハンター") + "</span></a></li>"
      )
      .join("");
  }

  box.addEventListener("input", render);
  box.addEventListener("focus", () => {
    if (!getKyara()) loadKyara();
  });
  // Enter で1件目へ
  box.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const first = results.querySelector("a.hm-result");
    if (first) {
      e.preventDefault();
      location.href = first.getAttribute("href");
    }
  });
})();
