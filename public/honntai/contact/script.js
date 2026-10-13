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

/* ===== お問い合わせフォーム（EmailJS でメール送信） =====
 * 送信先メールアドレスは EmailJS の管理画面（Email Services / Email Templates）側で設定。
 * テンプレートは従来どおり {{name}} {{email}} {{message}} だけで動くよう、
 * 種類・該当ページは message の先頭にまとめて入れている。
 * テンプレート側で個別に使いたい場合は {{category}} {{page}} {{title}} も渡している。
 */
const EMAILJS_PUBLIC_KEY = "bSyvqjmbdKvFTZ6sS";
const EMAILJS_SERVICE_ID = "service_5t2mhxz";
const EMAILJS_TEMPLATE_ID = "template_87izika";
const COOLDOWN_SEC = 60; // 連続送信の防止

(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const $ = (id) => document.getElementById(id);
  const status = $("statusMessage");
  const btn = $("submitBtn");
  const msg = $("message");
  const page = $("page");

  if (window.emailjs) emailjs.init(EMAILJS_PUBLIC_KEY);

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

    if (!window.emailjs) {
      setStatus("送信の準備ができていません。ページを再読み込みしてお試しください。", "error");
      return;
    }

    const message =
      `【種類】${data.category}\n` +
      `【該当ページ】${data.page || "（なし）"}\n` +
      `【送信元】${navigator.userAgent}\n` +
      `----------------------------------------\n` +
      data.body;

    btn.disabled = true;
    btn.textContent = "送信中…";
    setStatus("");

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        message,
        category: data.category,
        page: data.page,
        title: `【第五録】${data.category}`,
      })
      .then(
        function () {
          try {
            localStorage.setItem("daigoroku_contact_sent", String(Date.now()));
          } catch (e) {}
          if (window.gtag) gtag("event", "contact_submit", { category: data.category });
          showThanks();
        },
        function (error) {
          console.error("送信エラー:", error);
          setStatus(
            "送信に失敗しました。時間をおいて再度お試しください。（入力内容は残っています）",
            "error",
          );
          btn.disabled = false;
          btn.textContent = "送信する";
        },
      );
  });

  function showThanks() {
    form.hidden = true;
    $("thanks").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
})();
