// みんなのコメント（全ページ共通）
// どのページのコメント欄にも、サイト全体の新しいコメントを表示する。
// 各コメントには「どのページから書かれたか」を表示する。
// 投稿前チェック（NGワード・連投制限など）は script/ngcomento.js の window.ngcomentoCheck。
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeDWwlVCPrZIZhGoxuAsuvOD3XwvbBM7o",
  authDomain: "daigoroku-website.firebaseapp.com",
  projectId: "daigoroku-website",
  storageBucket: "daigoroku-website.appspot.com",
  messagingSenderId: "405763623042",
  appId: "1:405763623042:web:4371ab95c7b31d341d8c9b",
};

const db = getFirestore(initializeApp(firebaseConfig));
const commentsRef = collection(db, "comments");

const SHOW_MAX = 50; // 表示する件数
const FETCH_MAX = 80; // NGワードで弾く分を見込んで多めに取得

// 旧コメント（ページ名を保存していなかった頃）の表示名とリンク先
const OLD_PAGES = {
  index: ["トップページ", "/"],
  hanta: ["ハンター攻略ページ", "/honntai/情報/情報.html"],
  sabaiba: ["サバイバー攻略ページ", "/honntai/情報/情報.html"],
  ibento: ["イベント情報", "/honntai/ibento/ibento.html"],
  korabo: ["コラボ情報", "/honntai/korabo/korabo.html"],
  purozinnkaku: ["人格解説", "/honntai/purozinnkaku/purozinnkaku.html"],
  chat: ["定型文チャット", "/honntai/chat/chat.html"],
  gekiatuhannta: ["激アツハンター", "/honntai/gekiatuhannta/gekiatuhannta.html"],
  gekiatusaba: ["激アツサバイバー", "/honntai/gekisaba/gekisaba.html"],
  hanran: ["ハンターランキング", "/honntai/hanran/hanran.html"],
  sabaran: ["サバイバーランキング", "/honntai/sabaran/sabaran.html"],
  karenda: ["第五カレンダー", "/honntai/karenda/karenda.html"],
  kopiki: ["コピーキャット", "/honntai/kopiki/kopiki.html"],
  kuizu: ["第五人格クイズ", "/honntai/kuizu/kuizu.html"],
  kyarakosei: ["キャラの個性", "/honntai/kyarakosei/kyarakosei.html"],
  otogibanasi: ["森のお伽話", "/honntai/otogibanasi/otogibanasi.html"],
  pennsaki: ["ペン先の空想", "/honntai/pennsaki/pennsaki.html"],
  rokka: ["ロッカーの活用方法", "/honntai/rokka/rokka.html"],
  saisinnzyouhou: ["最新情報", "/honntai/saisinn/saisinn.html"],
  sigati: ["初心者が中級者になるステップ", "/honntai/sigati/sigati.html"],
  sigatu: ["初心者に使ってほしいキャラ", "/honntai/sigatu/sigatu.html"],
  yougo: ["用語集", "/honntai/yougo/yougo.html"],
  zyouhou: ["キャラ情報", "/honntai/情報/情報.html"],
};

const ICONS = [
  "ofensu", "posutomann", "kottousyou", "saisi", "youhei", "ouenndann",
  "syouzyo", "kikaigisi", "kuugunn", "tyoukousi", "kisya",
].map((n) => `/honntai/images/randomicon/${n}.jpeg`);

const ESCAPE_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ESCAPE_MAP[ch]);
}

// 「悪夢 - IdentityV（第五人格）攻略【第五録】」→「悪夢」
function currentPageTitle() {
  const t = document.title.replace(/\s+/g, " ").trim();
  const head = t.split(/\s[-｜|]\s/)[0].trim();
  if (!head || /^IdentityV（第五人格）攻略/.test(head)) return "トップページ";
  return head.slice(0, 40);
}

function currentPath() {
  return decodeURIComponent(location.pathname);
}

function isBanned(text) {
  return typeof window.ngcomentoIsBanned === "function" && window.ngcomentoIsBanned(String(text || ""));
}

// コメントの出どころ（ページ名・リンク）
function sourceOf(data) {
  if (data.pagePath) return [data.pageTitle || "ページ", data.pagePath];
  const old = OLD_PAGES[data.pageId];
  return old || ["第五録", "/"];
}

function sameIcon(id) {
  // 同じコメントには毎回同じアイコン
  let h = 0;
  for (const c of String(id)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return ICONS[h % ICONS.length];
}

async function loadComments() {
  const box = document.getElementById("comments");
  if (!box) return;
  let snap;
  try {
    snap = await getDocs(query(commentsRef, orderBy("timestamp", "desc"), limit(FETCH_MAX)));
  } catch (err) {
    console.error("[minna] コメントの読み込みに失敗", err);
    box.innerHTML = '<p class="comment-empty">コメントを読み込めませんでした。</p>';
    return;
  }

  const here = currentPath();
  const html = [];
  snap.forEach((docSnap) => {
    if (html.length >= SHOW_MAX) return;
    const d = docSnap.data();
    if (!d.username || !d.comment || !d.timestamp?.seconds) return;
    if (isBanned(d.username) || isBanned(d.comment)) return;

    const [title, path] = sourceOf(d);
    const isHere = d.pagePath && d.pagePath === here;
    const from = isHere
      ? '<span class="comment-from comment-from--here">📍 このページ</span>'
      : `<a class="comment-from" href="${escapeHtml(path)}">📍 ${escapeHtml(title)}より</a>`;

    html.push(`
      <div class="comment">
        <div class="timestamp">${new Date(d.timestamp.seconds * 1000).toLocaleString()}</div>
        <img src="${sameIcon(docSnap.id)}" alt="" class="user-icon" loading="lazy" />
        <div class="username"><strong>${escapeHtml(d.username)}</strong></div>
        ${from}
        <div class="message">${escapeHtml(d.comment)}</div>
      </div>`);
  });

  box.innerHTML = html.length
    ? html.join("")
    : '<p class="comment-empty">まだコメントはありません。最初のコメントを書いてみませんか？</p>';
}

// 見出しの下に説明を1行
const heading = document.querySelector("#comment-section h2");
if (heading && !document.querySelector(".comment-lead")) {
  const p = document.createElement("p");
  p.className = "comment-lead";
  p.textContent = "第五録全体の新しいコメントが表示されます。📍を押すと書かれたページへ移動します。";
  heading.after(p);
}

const form = document.getElementById("comment-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameEl = document.getElementById("username-input");
    const textEl = document.getElementById("comment-input");
    const username = nameEl.value.trim();
    const comment = textEl.value.trim();

    const error =
      typeof window.ngcomentoCheck === "function"
        ? window.ngcomentoCheck(username, comment)
        : !username || !comment
          ? "ユーザーネームとコメントを入力してください。"
          : null;
    if (error) {
      alert(error);
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;
    try {
      await addDoc(commentsRef, {
        username,
        comment,
        timestamp: serverTimestamp(),
        pageId: "minna",
        pagePath: currentPath(),
        pageTitle: currentPageTitle(),
      });
      nameEl.value = "";
      textEl.value = "";
      await loadComments();
    } catch (err) {
      console.error("[minna] 投稿に失敗", err);
      alert("投稿に失敗しました。時間をおいてもう一度お試しください。");
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}

loadComments();
