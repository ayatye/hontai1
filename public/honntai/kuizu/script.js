// 第五人格クイズ本体
// 問題データ: mondai.js（QUIZ_DATA）
// キャラ一覧: ../script/kyararisuto.js の survivors / hunters をそのまま使う（新キャラを足せば自動で出題される）
(function () {
  "use strict";

  // ===== 設定 =====
  const ROUND = 10; // 通常モードの問題数
  const TIME_TEXT = 15; // 文章問題の制限時間（秒）
  const TIME_IMG = 20; // 画像問題の制限時間（秒）
  const LEVEL_NAME = { 1: "初級", 2: "中級", 3: "上級" };
  const LEVEL_POINT = { 1: 100, 2: 150, 3: 200 }; // 1問の基本点。早く答えると最大1.5倍
  const PAGE_URL = "https://daigoroku.com/honntai/kuizu/kuizu.html";
  const MODE_NAME = {
    kyara: "このキャラ誰でしょう？",
    haikei: "背景推理クイズ",
    mame: "荘園豆知識",
    jinkaku: "人格クイズ",
    kentei: "荘園検定",
  };
  const RANKS = [
    [0.9, "荘園の主"],
    [0.75, "探偵の右腕"],
    [0.55, "歴戦のサバイバー"],
    [0.35, "新米サバイバー"],
    [0, "迷い込んだ来客"],
  ];
  const JINKAKU_PAGE = {
    サバイバー: "/honntai/sabazinnkaku/sabazinnkaku.html",
    ハンター: "/honntai/hantazinnkaku/hantazinnkaku.html",
  };
  // モザイクの粗さ（キャンバス480pxあたりのマス数。開始→制限時間終了）
  const MOSAIC = { 1: [14, 48], 2: [7, 20] };
  const PART_SIZE = 0.38; // 上級：画像の何割を切り出すか

  // ===== データ =====
  const D = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : { haikei: [], mame: [], jinkaku: [] };
  const usable = (q) => q.v !== false;
  const HAIKEI = D.haikei.filter(usable);
  const MAME = D.mame.filter(usable);
  const JINKAKU = D.jinkaku;
  const SV = typeof survivors !== "undefined" ? survivors : [];
  const HT = typeof hunters !== "undefined" ? hunters : [];
  const CHARAS = SV.map((c) => ({ ...c, side: "サバイバー" })).concat(
    HT.map((c) => ({ ...c, side: "ハンター" })),
  );

  // ===== 要素 =====
  const $ = (id) => document.getElementById(id);
  const screens = { menu: $("quiz-menu"), play: $("quiz-play"), result: $("quiz-result") };
  const canvas = $("play-canvas");
  const ctx = canvas.getContext("2d");
  const off = document.createElement("canvas");
  const offCtx = off.getContext("2d");

  // ===== 便利関数 =====
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const pick = (arr, n) => shuffle(arr).slice(0, n);
  const rand = (min, max) => min + Math.random() * (max - min);
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key) || "null");
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      return null;
    }
  }

  // ===== 問題を作る =====
  function fromData(q, tag) {
    return {
      kind: "text",
      level: q.level,
      tag: tag,
      text: q.q,
      answer: q.c[0],
      choices: shuffle(q.c),
      explain: `正解は<b>${esc(q.c[0])}</b>。${esc(q.e)}`,
      asof: q.asof ? q.asof + "時点の情報です。アップデートで変わる可能性があります。" : "",
    };
  }

  function kyaraQ(chara, level) {
    const pool = CHARAS.filter((c) => c.side === chara.side && c.name !== chara.name);
    const crop = { x: rand(0.15, 0.85 - PART_SIZE), y: rand(0.15, 0.85 - PART_SIZE) };
    return {
      kind: "kyara",
      level: level,
      tag: (level === 3 ? "パーツ当て" : "モザイク") + "・" + LEVEL_NAME[level],
      text: "このキャラは誰？",
      img: chara.url,
      crop: crop,
      answer: chara.name,
      choices: shuffle([chara.name].concat(pick(pool, 3).map((c) => c.name))),
      explain: `正解は<b>${esc(chara.name)}</b>（${chara.side}）。<a href="${esc(chara.link)}">${esc(chara.name)}の攻略を見る</a>`,
    };
  }

  function jinkakuQ(j, type) {
    const pool = JINKAKU.filter(
      (x) => x.side === j.side && x.name !== j.name && !j.effect.includes(x.name),
    );
    const isIcon = type === "icon";
    return {
      kind: isIcon ? "icon" : "effect",
      level: 2,
      tag: j.side + "人格・" + (isIcon ? "アイコン" : "効果"),
      text: isIcon ? "このアイコンの人格は？" : "この効果を持つ人格は？",
      effect: isIcon ? "" : j.effect,
      img: isIcon ? j.img : "",
      answer: j.name,
      choices: shuffle([j.name].concat(pick(pool, 3).map((x) => x.name))),
      explain: `正解は<b>${esc(j.name)}</b>。${esc(j.effect)} <a href="${JINKAKU_PAGE[j.side]}">${j.side}人格の解説を見る</a>`,
      asof: D.updated.slice(0, 4) + "年" + Number(D.updated.slice(5, 7)) + "月時点の効果です。天賦調整で変わる可能性があります。",
    };
  }

  function buildRound(mode, level) {
    if (mode === "kyara") return pick(CHARAS, ROUND).map((c) => kyaraQ(c, level));
    if (mode === "haikei")
      return pick(HAIKEI.filter((q) => q.level === level), ROUND).map((q) => fromData(q, "背景推理・" + LEVEL_NAME[level]));
    if (mode === "mame") return pick(MAME, ROUND).map((q) => fromData(q, "荘園豆知識"));
    if (mode === "jinkaku")
      return pick(JINKAKU, ROUND).map((j, i) => jinkakuQ(j, i % 2 ? "icon" : "effect"));

    // 荘園検定：全ジャンルから20問
    const list = [];
    const kyaras = pick(CHARAS, 4);
    [1, 2, 3, 1 + Math.floor(Math.random() * 3)].forEach((lv, i) => list.push(kyaraQ(kyaras[i], lv)));
    [1, 2, 3].forEach((lv) =>
      pick(HAIKEI.filter((q) => q.level === lv), 2).forEach((q) => list.push(fromData(q, "背景推理・" + LEVEL_NAME[lv]))),
    );
    pick(MAME, 4).forEach((q) => list.push(fromData(q, "荘園豆知識")));
    pick(JINKAKU, 6).forEach((j, i) => list.push(jinkakuQ(j, i % 2 ? "icon" : "effect")));
    // 易しい問題から順に並べる（同じ難易度の中はランダム）
    return shuffle(list).sort((a, b) => a.level - b.level);
  }

  // ===== 状態 =====
  let S = null;

  function show(name) {
    Object.keys(screens).forEach((k) => (screens[k].hidden = k !== name));
  }

  function bestKey(mode, level) {
    return "daigoroku-quiz-best-" + mode + (level ? "-" + level : "");
  }

  function renderBest() {
    document.querySelectorAll("[data-best]").forEach((el) => {
      const mode = el.dataset.best;
      if (mode === "kyara" || mode === "haikei") {
        const parts = [1, 2, 3]
          .map((lv) => [lv, store(bestKey(mode, lv))])
          .filter((x) => x[1])
          .map((x) => `${LEVEL_NAME[x[0]]} ${x[1].score}点`);
        el.textContent = parts.length ? "自己ベスト：" + parts.join(" / ") : "";
      } else {
        const b = store(bestKey(mode));
        el.textContent = b ? `自己ベスト：${b.score}点` + (b.rank ? `（${b.rank}）` : "") : "";
      }
    });
  }

  function start(mode, level) {
    const qs = buildRound(mode, level);
    if (!qs.length) {
      alert("このモードの問題は準備中です。");
      return;
    }
    S = { mode, level, qs, i: 0, score: 0, correct: 0, max: 0, history: [], timer: null };
    qs.forEach((q) => (S.max += Math.round(LEVEL_POINT[q.level] * 1.5)));
    // 画像を先に読み込んでおく
    qs.forEach((q) => {
      if (q.img) {
        q.image = new Image();
        q.image.src = q.img;
      }
    });
    $("play-mode").textContent = MODE_NAME[mode] + (level ? "・" + LEVEL_NAME[level] : "");
    show("play");
    document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
    ask();
  }

  // ===== 出題 =====
  function ask() {
    const q = S.qs[S.i];
    S.answered = false;
    $("play-count").textContent = `${S.i + 1} / ${S.qs.length}問`;
    $("play-score").textContent = `${S.score}点`;
    $("play-tag").hidden = !q.tag;
    $("play-tag").textContent = q.tag || "";

    const qEl = $("play-question");
    qEl.textContent = q.text;
    if (q.effect) {
      const sm = document.createElement("small");
      sm.textContent = q.effect;
      qEl.appendChild(sm);
    }

    // 画像
    $("play-media").hidden = !q.img;
    canvas.hidden = q.kind !== "kyara";
    $("play-icon").hidden = q.kind !== "icon";
    if (q.kind === "icon") $("play-icon").src = q.img;
    if (q.kind === "kyara") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      S.lastCells = -1;
      if (q.image.complete) drawKyara(q, 0);
      else q.image.onload = () => !S.answered && drawKyara(q, 0);
    }

    // 選択肢
    const box = $("play-choices");
    box.innerHTML = "";
    q.choices.forEach((c) => {
      const b = document.createElement("button");
      b.className = "choice-btn";
      b.textContent = c;
      b.addEventListener("click", () => answer(c));
      box.appendChild(b);
    });

    $("play-feedback").hidden = true;
    startTimer(q.img ? TIME_IMG : TIME_TEXT);
  }

  // ===== キャラ画像（モザイク・パーツ） =====
  function drawKyara(q, progress, reveal) {
    const img = q.image;
    if (!img.naturalWidth) return;
    const W = canvas.width;
    // 枠を少し切り落とした範囲を使う
    const m = 0.07;
    const sx = img.naturalWidth * m;
    const sy = img.naturalHeight * m;
    const sw = img.naturalWidth * (1 - m * 2);
    const sh = img.naturalHeight * (1 - m * 2);

    if (reveal) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, W);
      return;
    }
    if (q.level === 3) {
      if (S.lastCells === 0) return;
      S.lastCells = 0;
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, sx + sw * q.crop.x, sy + sh * q.crop.y, sw * PART_SIZE, sh * PART_SIZE, 0, 0, W, W);
      return;
    }
    const [from, to] = MOSAIC[q.level];
    const cells = Math.round(from + (to - from) * progress);
    if (cells === S.lastCells) return;
    S.lastCells = cells;
    off.width = cells;
    off.height = cells;
    offCtx.imageSmoothingEnabled = true;
    offCtx.drawImage(img, sx, sy, sw, sh, 0, 0, cells, cells);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(off, 0, 0, cells, cells, 0, 0, W, W);
  }

  // ===== タイマー =====
  function startTimer(sec) {
    stopTimer();
    const bar = $("timer-bar");
    const t0 = performance.now();
    S.limit = sec * 1000;
    const tick = (now) => {
      const used = Math.min(now - t0, S.limit);
      S.used = used;
      const left = 1 - used / S.limit;
      bar.style.transform = `scaleX(${left})`;
      bar.classList.toggle("is-low", left < 0.25);
      const q = S.qs[S.i];
      if (q.kind === "kyara") drawKyara(q, used / S.limit);
      if (used >= S.limit) {
        answer(null);
        return;
      }
      S.timer = requestAnimationFrame(tick);
    };
    S.timer = requestAnimationFrame(tick);
  }

  function stopTimer() {
    if (S && S.timer) cancelAnimationFrame(S.timer);
    if (S) S.timer = null;
  }

  // ===== 回答 =====
  function answer(choice) {
    if (S.answered) return;
    S.answered = true;
    stopTimer();
    const q = S.qs[S.i];
    const ok = choice === q.answer;
    let got = 0;
    if (ok) {
      const left = 1 - (S.used || 0) / S.limit;
      got = Math.round(LEVEL_POINT[q.level] * (1 + 0.5 * left));
      S.score += got;
      S.correct++;
    }
    S.history.push({ q, choice, ok });

    document.querySelectorAll(".choice-btn").forEach((b) => {
      b.disabled = true;
      if (b.textContent === q.answer) b.classList.add("is-ok");
      else if (b.textContent === choice) b.classList.add("is-ng");
    });
    if (q.kind === "kyara") drawKyara(q, 1, true);

    const r = $("feedback-result");
    r.className = "feedback-result " + (ok ? "is-ok" : "is-ng");
    r.textContent = ok ? `正解！ +${got}点` : choice === null ? "時間切れ…" : "不正解…";
    $("feedback-text").innerHTML = q.explain;
    $("feedback-asof").hidden = !q.asof;
    $("feedback-asof").textContent = q.asof ? "※" + q.asof : "";
    $("play-score").textContent = `${S.score}点`;
    $("next-btn").textContent = S.i + 1 < S.qs.length ? "次へ" : "結果を見る";
    $("play-feedback").hidden = false;
    $("next-btn").focus({ preventScroll: true });
  }

  function next() {
    S.i++;
    if (S.i < S.qs.length) ask();
    else finish();
  }

  // ===== 結果 =====
  function finish() {
    const ratio = S.max ? S.score / S.max : 0;
    const modeLabel = MODE_NAME[S.mode] + (S.level ? "・" + LEVEL_NAME[S.level] : "");
    const rank = S.mode === "kentei" ? RANKS.find((r) => ratio >= r[0])[1] : "";

    $("result-mode").textContent = modeLabel;
    $("result-rank").hidden = !rank;
    $("result-rank").textContent = rank ? `あなたの荘園ランクは「${rank}」` : "";
    $("result-score").textContent = `${S.score}点`;
    $("result-detail").textContent = `${S.qs.length}問中 ${S.correct}問正解`;

    const key = bestKey(S.mode, S.level);
    const best = store(key);
    if (!best || S.score > best.score) {
      store(key, { score: S.score, rank: rank });
      $("result-best").textContent = best ? `自己ベスト更新！（前回 ${best.score}点）` : "";
    } else {
      $("result-best").textContent = `自己ベスト：${best.score}点`;
    }

    const shareText = rank
      ? `第五人格クイズ「荘園検定」で${S.score}点！荘園ランクは「${rank}」でした`
      : `第五人格クイズ「${modeLabel}」で${S.qs.length}問中${S.correct}問正解（${S.score}点）！`;
    $("share-btn").href =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(shareText) +
      "&url=" +
      encodeURIComponent(PAGE_URL) +
      "&hashtags=" +
      encodeURIComponent("第五人格クイズ,第五録");

    // 間違えた問題の振り返り
    const miss = S.history.filter((h) => !h.ok);
    const rv = $("result-review");
    rv.innerHTML = miss.length
      ? "<h3>まちがえた問題</h3>" +
        miss
          .map(
            (h) =>
              `<div class="review-item">${esc(h.q.kind === "kyara" ? "キャラ当て（" + h.q.tag + "）" : h.q.text)}<br>${h.q.explain}</div>`,
          )
          .join("")
      : "<h3>全問正解！おめでとう！</h3>";

    if (typeof gtag === "function") {
      gtag("event", "quiz_finish", { quiz_mode: S.mode, quiz_level: S.level || 0, score: S.score });
    }
    show("result");
    renderBest();
    document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ===== イベント =====
  document.querySelectorAll("[data-mode]").forEach((b) =>
    b.addEventListener("click", () => start(b.dataset.mode, b.dataset.level ? Number(b.dataset.level) : 0)),
  );
  $("next-btn").addEventListener("click", next);
  $("quit-btn").addEventListener("click", () => {
    stopTimer();
    show("menu");
  });
  $("retry-btn").addEventListener("click", () => start(S.mode, S.level));
  $("menu-btn").addEventListener("click", () => show("menu"));

  const up = $("data-updated");
  if (up && D.updated) up.textContent = D.updated.slice(0, 4) + "年" + Number(D.updated.slice(5, 7)) + "月";
  renderBest();
})();
