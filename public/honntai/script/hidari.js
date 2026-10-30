/* =========================================================
   左サイドバー(hidari.js)
   ---------------------------------------------------------
   PCの広い画面(1400px以上)だけ、本文の左に縦長の列を出す。
   中身は下の4種類から選んで、好きな順番で並べられる。

     "mokuji" : このページの目次(本文の見出しから自動で作る)
     "menu"   : サイトのカテゴリー一覧
     "kyou"   : 今日の荘園(誕生日・開催中のイベント。karenda.js のデータを使う)
     "kousin" : 最近の更新(下の KOUSIN を手で更新する)

   ・出す中身と順番は HIDARI_MODULES を書き換える
   ・お試し用：URLの最後に ?hidari=menu,kyou のように付けると、
     そのページだけ中身を入れ替えて見られる(?hidari=off で非表示)
   ・スマホ・タブレット・狭いPCでは何も出さない(hidari.css で非表示)
   ・読み込み：kyararisuto.js の直後に
       <script src="(深さに合わせたパス)/script/hidari.js"></script>
     CSS は sidebar.css の直後に hidari.css
   ========================================================= */

// ===== 出す中身と順番 =====
const HIDARI_MODULES = ["mokuji", "menu", "kyou", "kousin"];

// ===== カテゴリー一覧 =====
const HIDARI_MENU = [
  { label: "最新情報", link: "/honntai/saisinn/saisinn.html", match: "/saisinn/" },
  { label: "キャラ情報", link: "/honntai/情報/情報.html", match: "/情報/" },
  { label: "サバイバーランキング", link: "/honntai/sabaran/sabaran.html", match: "/sabaran/" },
  { label: "ハンターランキング", link: "/honntai/hanran/hanran.html", match: "/hanran/" },
  { label: "調整まとめ", link: "/honntai/tyousei/tyousei.html", match: "/tyousei/" },
  { label: "イベント", link: "/honntai/ibento/ibento.html", match: "/ibento/" },
  { label: "コラボ", link: "/honntai/korabo/korabo.html", match: "/korabo/" },
  { label: "第五カレンダー", link: "/honntai/karenda/karenda.html", match: "/karenda/" },
  { label: "人格(サバイバー)", link: "/honntai/sabazinnkaku/sabazinnkaku.html", match: "/sabazinnkaku/" },
  { label: "人格(ハンター)", link: "/honntai/hantazinnkaku/hantazinnkaku.html", match: "/hantazinnkaku/" },
  { label: "プロの人格", link: "/honntai/purozinnkaku/purozinnkaku.html", match: "/purozinnkaku/" },
  { label: "用語集", link: "/honntai/yougo/yougo.html", match: "/yougo/" },
  { label: "第五人格クイズ", link: "/honntai/kuizu/kuizu.html", match: "/kuizu/", tag: "NEW" },
  { label: "荘園人格診断", link: "/honntai/sinndann/sindan.html", match: "/sinndann/", tag: "NEW" },
  { label: "チャット", link: "/honntai/chat/chat.html", match: "/chat/" },
];

// ===== 最近の更新(新しい順。5件くらいがちょうどいい) =====
const KOUSIN = [
  { date: "2026-10-30", title: "サバイバーランキング：神童をSティアに追加", link: "/honntai/sabaran/sabaran.html" },
  { date: "2026-10-30", title: "激熱サバイバー／ハンターを更新", link: "/honntai/gekisaba/gekisaba.html" },
  { date: "2026-10-29", title: "最新情報：10/29アップデート", link: "/honntai/saisinn/saisinn.html" },
  { date: "2026-10-29", title: "手記の加筆：月宴の巡りイベント", link: "/honntai/shukikahitsu/shukikahitsu.html" },
  { date: "2026-10-29", title: "情報発表番組『分岐点』バージョン", link: "/honntai/idv-program-slider/2026bunkiten.html" },
];

(function () {
  "use strict";

  const MIN_WIDTH = 1400; // hidari.css のブレークポイントと合わせる
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;
  const col = sidebar.closest(".side-column") || sidebar;
  const wrapper = col.parentElement;
  if (!wrapper) return;

  // 中身の決定(URLの ?hidari= があればそちらを優先)
  let modules = HIDARI_MODULES;
  const q = new URLSearchParams(location.search).get("hidari");
  if (q) modules = q === "off" ? [] : q.split(",").map((s) => s.trim()).filter(Boolean);
  if (!modules.length) return;

  // 本文(サイドバーでも左列でもない子要素)
  const main = Array.prototype.find.call(wrapper.children, (el) => el !== col);
  const path = decodeURI(location.pathname);

  const aside = document.createElement("aside");
  aside.className = "hidari";
  aside.setAttribute("aria-label", "サイドメニュー");
  const inner = document.createElement("div");
  inner.className = "hidari__inner";
  aside.appendChild(inner);

  function box(title, cls) {
    const sec = document.createElement("section");
    sec.className = "hd-box " + cls;
    const h = document.createElement("p");
    h.className = "hd-box__title";
    h.textContent = title;
    sec.appendChild(h);
    return sec;
  }

  function link(text, href, cls) {
    const a = document.createElement("a");
    a.href = href;
    a.className = cls || "";
    a.textContent = text;
    return a;
  }

  /* ---------- 目次 ---------- */
  function buildMokuji() {
    if (!main) return null;
    const skip = ".sidebar, .hidari, #comment-section, .ad-slot, footer, nav, [hidden]";
    let hs = Array.prototype.filter.call(main.querySelectorAll("h2, h3"), (h) => {
      if (h.closest(skip)) return false;
      if (!h.offsetParent) return false; // 非表示タブの中などは除く
      return h.textContent.trim().length > 0;
    });
    if (hs.length > 24) hs = hs.filter((h) => h.tagName === "H2");
    if (hs.length < 2) return null;

    const sec = box("このページの目次", "hd-mokuji");
    const ol = document.createElement("ol");
    const items = [];
    hs.forEach((h, i) => {
      if (!h.id) h.id = "mokuji-" + (i + 1);
      h.classList.add("hd-anchor");
      let text = h.textContent.replace(/\s+/g, " ").trim();
      if (text.length > 28) text = text.slice(0, 27) + "…";
      const li = document.createElement("li");
      li.className = h.tagName === "H3" ? "is-sub" : "";
      const a = link(text, "#" + encodeURIComponent(h.id));
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        h.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#" + h.id);
      });
      li.appendChild(a);
      ol.appendChild(li);
      items.push({ h, a });
    });
    sec.appendChild(ol);

    // 今読んでいる見出しを光らせる
    let ticking = false;
    function update() {
      ticking = false;
      let cur = items[0];
      for (const it of items) {
        if (it.h.getBoundingClientRect().top < 140) cur = it;
        else break;
      }
      items.forEach((it) => it.a.classList.toggle("is-current", it === cur));
      // 目次が長いときは、今の見出しが見える位置までスクロール
      const ca = cur.a;
      const top = ca.offsetTop - ol.offsetTop;
      if (top < ol.scrollTop || top > ol.scrollTop + ol.clientHeight - 30) {
        ol.scrollTop = top - ol.clientHeight / 3;
      }
    }
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    setTimeout(update, 0);
    return sec;
  }

  /* ---------- カテゴリー ---------- */
  function buildMenu() {
    const sec = box("カテゴリー", "hd-menu");
    const ul = document.createElement("ul");
    HIDARI_MENU.forEach((m) => {
      const li = document.createElement("li");
      const a = link(m.label, m.link);
      if (m.match && path.indexOf(m.match) !== -1) a.classList.add("is-current");
      if (m.tag) {
        const t = document.createElement("span");
        t.className = "hd-tag";
        t.textContent = m.tag;
        a.appendChild(t);
      }
      li.appendChild(a);
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    return sec;
  }

  /* ---------- 今日の荘園(karenda.js のウィジェットを使う) ---------- */
  function buildKyou() {
    const sec = document.createElement("section");
    sec.className = "hd-box hd-kyou";
    const holder = document.createElement("div");
    holder.setAttribute("data-karenda", "widget");
    sec.appendChild(holder);

    if (window.karenda && window.karenda.refresh) {
      setTimeout(() => window.karenda.refresh(), 0);
    } else if (!document.querySelector('script[src*="karenda.js"]')) {
      const s = document.createElement("script");
      s.src = "/honntai/script/karenda.js";
      s.defer = true;
      document.body.appendChild(s);
    }
    // karenda.js が defer で後から動く場合は、そちらの起動時に拾われる
    return sec;
  }

  /* ---------- 最近の更新 ---------- */
  function buildKousin() {
    if (!KOUSIN.length) return null;
    const sec = box("最近の更新", "hd-kousin");
    const ul = document.createElement("ul");
    KOUSIN.slice(0, 6).forEach((k) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = k.link;
      const d = document.createElement("span");
      d.className = "hd-date";
      const p = k.date.split("-");
      d.textContent = Number(p[1]) + "/" + Number(p[2]);
      const t = document.createElement("span");
      t.className = "hd-kousin__t";
      t.textContent = k.title;
      a.appendChild(d);
      a.appendChild(t);
      li.appendChild(a);
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    return sec;
  }

  const builders = { mokuji: buildMokuji, menu: buildMenu, kyou: buildKyou, kousin: buildKousin };

  function build() {
    if (aside.isConnected) return;
    if (window.innerWidth < MIN_WIDTH) return; // 狭い画面では作らない(広げた時に作る)
    modules.forEach((key) => {
      const fn = builders[key];
      const el = fn && fn();
      if (el) inner.appendChild(el);
    });
    if (!inner.children.length) return;
    wrapper.insertBefore(aside, wrapper.firstChild);
    wrapper.classList.add("has-hidari");
  }

  // 本文が後から組み立てられるページもあるので、読み込み完了後に作る
  if (document.readyState === "complete") build();
  else window.addEventListener("load", build);
  window.addEventListener("resize", () => {
    clearTimeout(build._t);
    build._t = setTimeout(build, 200);
  });
})();
