/* ===== スクロール時の横棒 ===== */
let lastScrollY = window.scrollY;
const scrollBar = document.getElementById("scroll-bar");

function handleScroll() {
  if (!scrollBar) return;
  if (window.scrollY === 0 || window.innerWidth <= 600) {
    scrollBar.style.display = "none";
  } else {
    scrollBar.style.display = window.scrollY < lastScrollY ? "block" : "none";
  }
  lastScrollY = window.scrollY;
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);

/* ===== お問い合わせフォーム（Formspree でメール送信） =====
 * 送信先メールアドレスは Formspree（https://formspree.io）の管理画面で設定。
 * 届いたメールに「返信」すると、問い合わせた人のアドレスに返信できる（email 欄が reply-to になる）。
 * 下の FORMSPREE_ID を、Formspree のフォームURL https://formspree.io/f/xxxxxxxx の xxxxxxxx に書き換える。
 */
const FORMSPREE_ID = "mgaoljve";
const COOLDOWN_SEC = 60; // 連続送信の防止

(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const $ = (id) => document.getElementById(id);
  const status = $("statusMessage");
  const btn = $("submitBtn");
  const msg = $("message");
  const page = $("page");

  // 文字数カウンター
  msg.addEventListener("input", () => {
    $("charCount").textContent = msg.value.length;
  });

  // 該当ページの自動入力（?from=URL か、サイト内から来た場合は直前のページ）
  try {
    const from = new URLSearchParams(location.search).get("from");
    const ref = document.referrer;
    if (from) page.value = from;
    else if (ref && new URL(ref).origin === location.origin && !ref.includes("/contact/")) {
      page.value = decodeURI(ref);
    }
  } catch (e) {}

  function setStatus(text, type) {
    status.textContent = text;
    status.className = type || "";
  }

  function lastSent() {
    try {
      return Number(localStorage.getItem("daigoroku_contact_sent") || 0);
    } catch (e) {
      return 0;
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // ボット対策：隠し欄に何か入っていたら成功したふりをして終了
    if ($("website").value) {
      showThanks();
      return;
    }

    const data = {
      category: $("category").value,
      name: $("name").value.trim(),
      email: $("email").value.trim(),
      page: page.value.trim(),
      body: msg.value.trim(),
    };

    // 入力チェック
    form.querySelectorAll(".invalid").forEach((el) => el.classList.remove("invalid"));
    const errors = [];
    if (!data.category) errors.push(["category", "お問い合わせの種類を選んでください。"]);
    if (!data.name) errors.push(["name", "お名前を入力してください。"]);
    if (!data.email || !$("email").checkValidity())
      errors.push(["email", "メールアドレスを正しく入力してください。"]);
    if (data.body.length < 5) errors.push(["message", "お問い合わせ内容を入力してください。"]);
    if (!$("agree").checked) errors.push(["agree", "プライバシーポリシーへの同意が必要です。"]);
    if (errors.length) {
      errors.forEach(([id]) => $(id).classList.add("invalid"));
      $(errors[0][0]).focus();
      setStatus(errors[0][1], "error");
      return;
    }

    const wait = COOLDOWN_SEC - Math.floor((Date.now() - lastSent()) / 1000);
    if (wait > 0) {
      setStatus(`連続送信はできません。${wait}秒ほどお待ちください。`, "error");
      return;
    }

    if (!FORMSPREE_ID || FORMSPREE_ID === "YOUR_FORM_ID") {
      setStatus("現在フォームの準備中です。しばらくしてからお試しください。", "error");
      console.error("script.js の FORMSPREE_ID が未設定です。");
      return;
    }

    btn.disabled = true;
    btn.textContent = "送信中…";
    setStatus("");

    fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `${$("urgent").checked ? "【至急】" : ""}【第五録】${data.category}`,
        至急: $("urgent").checked ? "はい" : "いいえ",
        種類: data.category,
        名前: data.name,
        email: data.email,
        該当ページ: data.page || "（なし）",
        内容: data.body,
        送信元: navigator.userAgent,
      }),
    })
      .then(async (res) => {
        if (res.ok) return;
        const json = await res.json().catch(() => ({}));
        const detail = (json.errors || []).map((e) => e.message).join(" / ");
        throw new Error(`HTTP ${res.status} ${detail}`);
      })
      .then(() => {
        try {
          localStorage.setItem("daigoroku_contact_sent", String(Date.now()));
        } catch (e) {}
        if (window.gtag) gtag("event", "contact_submit", { category: data.category });
        showThanks();
      })
      .catch((error) => {
        console.error("送信エラー:", error);
        setStatus(
          "送信に失敗しました。時間をおいて再度お試しください。（入力内容は残っています）",
          "error",
        );
        btn.disabled = false;
        btn.textContent = "送信する";
      });
  });

  function showThanks() {
    form.hidden = true;
    $("thanks").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
})();
