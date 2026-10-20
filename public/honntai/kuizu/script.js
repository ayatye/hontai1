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
  // 段位（ランクマッチと同じ並び）。min は満点（最速で全問正解）に対する得点の割合。
  // 1〜6段はさらに Ⅲ→Ⅱ→Ⅰ の3段階に分かれる。数字を変えれば判定の厳しさを調整できる
  const DAN = [
    { name: "最高峰7段", mark: "ヘラクレス", min: 0.92 },
    { name: "7段", mark: "勇士", min: 0.84 },
    { name: "6段", mark: "ユニコーン", min: 0.72, sub: true },
    { name: "5段", mark: "グリフォン", min: 0.6, sub: true },
    { name: "4段", mark: "マンモス", min: 0.48, sub: true },
    { name: "3段", mark: "ヘラジカ", min: 0.34, sub: true },
    { name: "2段", mark: "犬", min: 0.18, sub: true },
    { name: "1段", mark: "ハチ", min: 0, sub: true },
  ];
  const JINKAKU_PAGE = {
    サバイバー: "/honntai/sabazinnkaku/sabazinnkaku.html",
    ハンター: "/honntai/hantazinnkaku/hantazinnkaku.html",
  };
  // モザイクの粗さ（キャンバス480pxあたりのマス数。開始→制限時間終了）
  const MOSAIC = { 1: [14, 48], 2: [7, 20] };
  const PART_SIZE = 0.38; // 上級：画像の何割を切り出すか

  const SMOOTH = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  // ===== データ =====
  const D = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : { haikei: [], mame: [], jinkaku: [] };
  const usable = (q) => q.v !== false;
  const HAIKEI = D.haikei.filter(usable);
  const MAME = D.mame.filter(usable);
  // 誕生日問題（id が bd で始まる）は数が多いので1回あたりの出題数を絞る
  const isBd = (q) => q.id.indexOf("bd") === 0;
  const MAME_BD = MAME.filter(isBd);
  const MAME_ETC = MAME.filter((q) => !isBd(q));
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
    if (mode === "mame")
      return shuffle(pick(MAME_ETC, ROUND - 3).concat(pick(MAME_BD, 3))).map((q) => fromData(q, isBd(q) ? "誕生日" : "荘園豆知識"));
    if (mode === "jinkaku")
      return pick(JINKAKU, ROUND).map((j, i) => jinkakuQ(j, i % 2 ? "icon" : "effect"));

    // 荘園検定：全ジャンルから20問
    const list = [];
    const kyaras = pick(CHARAS, 4);
    [1, 2, 3, 1 + Math.floor(Math.random() * 3)].forEach((lv, i) => list.push(kyaraQ(kyaras[i], lv)));
    [1, 2, 3].forEach((lv) =>
      pick(HAIKEI.filter((q) => q.level === lv), 2).forEach((q) => list.push(fromData(q, "背景推理・" + LEVEL_NAME[lv]))),
    );
    pick(MAME_ETC, 3).forEach((q) => list.push(fromData(q, "荘園豆知識")));
    pick(MAME_BD, 1).forEach((q) => list.push(fromData(q, "誕生日")));
    pick(JINKAKU, 6).forEach((j, i) => list.push(jinkakuQ(j, i % 2 ? "icon" : "effect")));
    // 易しい問題から順に並べる（同じ難易度の中はランダム）
    return shuffle(list).sort((a, b) => a.level - b.level);
  }

  // ===== 状態 =====
  let S = null;

  // 得点の割合 → 段位（例：{ label: "5段Ⅱ", mark: "グリフォン" }）
  function danOf(ratio) {
    for (let i = 0; i < DAN.length; i++) {
      const d = DAN[i];
      if (ratio < d.min) continue;
      if (!d.sub) return { label: d.name, mark: d.mark, tier: i };
      const top = i === 0 ? 1 : DAN[i - 1].min;
      const step = (top - d.min) / 3;
      const sub = ratio >= d.min + step * 2 ? "Ⅰ" : ratio >= d.min + step ? "Ⅱ" : "Ⅲ";
      return { label: d.name + sub, mark: d.mark, tier: i };
    }
    const last = DAN[DAN.length - 1];
    return { label: last.name + "Ⅲ", mark: last.mark, tier: DAN.length - 1 };
  }

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
          .map((x) => `${LEVEL_NAME[x[0]]} ${x[1].rank || x[1].score + "点"}`);
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
    $("play-pips").innerHTML = qs.map(() => "<li></li>").join("");
    show("play");
    document.querySelector("main").scrollIntoView({ behavior: SMOOTH, block: "start" });
    ask();
  }

  // ===== 出題 =====
  function ask() {
    const q = S.qs[S.i];
    S.answered = false;
    $("play-count").textContent = `第${S.i + 1}問 / 全${S.qs.length}問`;
    const pip = $("play-pips").children[S.i];
    if (pip) pip.className = "is-now";
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
    q.choices.forEach((c, n) => {
      const b = document.createElement("button");
      b.className = "choice-btn";
      b.dataset.choice = c;
      const key = document.createElement("span");
      key.className = "key";
      key.textContent = n + 1;
      const label = document.createElement("span");
      label.textContent = c;
      b.append(key, label);
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
      if (b.dataset.choice === q.answer) b.classList.add("is-ok");
      else if (b.dataset.choice === choice) b.classList.add("is-ng");
    });
    const pipNow = $("play-pips").children[S.i];
    if (pipNow) pipNow.className = ok ? "is-ok" : "is-ng";
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
    const dan = danOf(ratio);
    const rank = dan.label;
    const title = S.mode === "kentei" ? "荘園検定 段位認定証" : modeLabel + " 段位認定";

    $("result-mode").textContent = title;
    const now = new Date();
    const dateText = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
    $("result-date").textContent = `${dateText}　第五録`;
    $("result-rank").hidden = false;
    $("result-rank").innerHTML = `<small>あなたの段位</small>${esc(dan.label)}<span class="rank-mark">${esc(dan.mark)}</span>`;
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

    // シェア用の画像は結果表示と同時に作っておく（押した瞬間にすぐ共有できるように）
    const result = {
      title: title,
      dan: dan,
      score: S.score,
      correct: S.correct,
      total: S.qs.length,
      date: dateText,
    };
    shareText =
      `第五人格クイズ「${modeLabel}」で${dan.label}（${dan.mark}）！\n` +
      `${S.score}点・${S.qs.length}問中${S.correct}問正解\n` +
      `#第五人格 #第五人格クイズ\n`;
    cardPromise = makeCard(result).catch(() => null);

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
    document.querySelector("main").scrollIntoView({ behavior: SMOOTH, block: "start" });
  }

  // ===== 結果画像（シェア用） =====
  // 荘園人格診断と同じく 1080×1350（X のタイムラインで切れずに表示される縦長）
  let cardPromise = null;
  let shareText = "";

  async function makeCard(r) {
    const W = 1080;
    const H = 1350;
    const MINCHO = '"Shippori Mincho","Hiragino Mincho ProN","Yu Mincho",serif';
    const GOTHIC = '"Zen Kaku Gothic New","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif';
    const C = { primary: "#7c3aed", dark: "#5b21b6", light: "#ede9fe", mid: "#c4b5fd", ink: "#1e1b4b", sub: "#6b7280", line: "#e4dff5" };
    try {
      await Promise.all([
        document.fonts.load(`800 120px "Shippori Mincho"`),
        document.fonts.load(`600 40px "Shippori Mincho"`),
        document.fonts.load(`700 40px "Zen Kaku Gothic New"`),
      ]);
    } catch (e) {}

    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const x = cv.getContext("2d");
    x.textAlign = "center";
    x.textBaseline = "alphabetic";

    // 背景
    x.fillStyle = C.light;
    x.fillRect(0, 0, W, H);

    // 認定証の紙
    const P = { l: 70, t: 120, r: W - 70, b: H - 150 };
    x.save();
    x.shadowColor = "rgba(91,33,182,.18)";
    x.shadowBlur = 40;
    x.shadowOffsetY = 14;
    x.fillStyle = "#fff";
    x.fillRect(P.l, P.t, P.r - P.l, P.b - P.t);
    x.restore();
    x.strokeStyle = C.mid;
    x.lineWidth = 3;
    x.strokeRect(P.l, P.t, P.r - P.l, P.b - P.t);
    x.strokeStyle = C.line;
    x.lineWidth = 2;
    x.strokeRect(P.l + 18, P.t + 18, P.r - P.l - 36, P.b - P.t - 36);
    x.fillStyle = C.light;
    x.fillRect(P.l + 19, P.t + 19, P.r - P.l - 38, 10);

    // 上の題字
    x.fillStyle = C.dark;
    x.font = `800 44px ${MINCHO}`;
    x.fillText("第 五 人 格 ク イ ズ", W / 2, 80);

    // 見出し
    x.fillStyle = C.primary;
    x.font = `600 40px ${MINCHO}`;
    x.fillText(r.title, W / 2, P.t + 120);

    x.fillStyle = C.sub;
    x.font = `600 36px ${MINCHO}`;
    x.fillText("あなたの段位", W / 2, P.t + 250);

    // 段位（いちばん大きく）
    x.fillStyle = C.ink;
    let size = 170;
    x.font = `800 ${size}px ${MINCHO}`;
    while (x.measureText(r.dan.label).width > P.r - P.l - 120 && size > 80) {
      size -= 6;
      x.font = `800 ${size}px ${MINCHO}`;
    }
    x.fillText(r.dan.label, W / 2, P.t + 250 + size + 10);

    // 段位の紋章名
    const markY = P.t + 250 + size + 90;
    x.font = `700 44px ${GOTHIC}`;
    const mw = x.measureText(r.dan.mark).width + 70;
    x.fillStyle = C.light;
    roundRect(x, W / 2 - mw / 2, markY - 46, mw, 66, 33);
    x.fill();
    x.fillStyle = C.dark;
    x.fillText(r.dan.mark, W / 2, markY);

    // 区切り線
    const lineY = markY + 80;
    x.strokeStyle = C.line;
    x.lineWidth = 3;
    x.beginPath();
    x.moveTo(P.l + 120, lineY);
    x.lineTo(P.r - 120, lineY);
    x.stroke();

    // 点数と正解数
    x.fillStyle = C.primary;
    x.font = `700 96px ${GOTHIC}`;
    x.fillText(`${r.score}点`, W / 2, lineY + 130);
    x.fillStyle = C.sub;
    x.font = `700 40px ${GOTHIC}`;
    x.fillText(`${r.total}問中 ${r.correct}問正解`, W / 2, lineY + 200);

    // 日付と判子
    x.fillStyle = C.sub;
    x.font = `600 32px ${MINCHO}`;
    x.fillText(`${r.date}　第五録`, W / 2, P.b - 70);
    x.save();
    x.translate(P.r - 120, P.b - 120);
    x.rotate(-0.21);
    x.strokeStyle = C.primary;
    x.lineWidth = 5;
    x.beginPath();
    x.arc(0, 0, 58, 0, Math.PI * 2);
    x.stroke();
    x.fillStyle = C.primary;
    x.font = `800 58px ${MINCHO}`;
    x.textBaseline = "middle";
    x.fillText("録", 0, 2);
    x.restore();

    // 下の案内
    x.fillStyle = C.dark;
    x.font = `700 34px ${GOTHIC}`;
    x.fillText("#第五人格　#第五人格クイズ", W / 2, H - 82);
    x.fillStyle = C.sub;
    x.font = `600 30px ${MINCHO}`;
    x.fillText("第五録 ｜ daigoroku.com", W / 2, H - 36);

    return new Promise((ok) => cv.toBlob(ok, "image/png"));
  }

  function roundRect(x, l, t, w, h, rad) {
    x.beginPath();
    x.moveTo(l + rad, t);
    x.arcTo(l + w, t, l + w, t + h, rad);
    x.arcTo(l + w, t + h, l, t + h, rad);
    x.arcTo(l, t + h, l, t, rad);
    x.arcTo(l, t, l + w, t, rad);
    x.closePath();
  }

  function tweetUrl() {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(PAGE_URL)}`;
  }

  // スマホ：共有メニュー（X・LINE・インスタなど）に画像付きで渡す
  // PCなど共有メニューが使えない時：画像の保存・コピーとXの投稿画面を開くパネルを出す
  async function shareResult() {
    const blob = cardPromise ? await cardPromise : null;
    if (blob) {
      const file = new File([blob], "daigoroku-quiz.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], text: shareText + PAGE_URL });
          return;
        } catch (e) {
          if (e && e.name === "AbortError") return; // 自分で閉じた時は何もしない
        }
      }
    }
    openSharePanel(blob);
  }

  let panelUrl = null;
  function openSharePanel(blob) {
    const msg = $("share-msg");
    msg.textContent = "";
    if (panelUrl) {
      URL.revokeObjectURL(panelUrl);
      panelUrl = null;
    }
    $("share-preview").hidden = !blob;
    $("share-tools").hidden = !blob;
    if (blob) {
      panelUrl = URL.createObjectURL(blob);
      $("share-preview").src = panelUrl;
      $("share-save").href = panelUrl;
    }
    $("share-x").href = tweetUrl();
    $("share-copy").onclick = async () => {
      try {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        msg.textContent = "画像をコピーしました。Xの投稿画面に貼り付けてください。";
      } catch (e) {
        msg.textContent = "このブラウザではコピーできませんでした。画像を保存して添付してください。";
      }
    };
    $("share-panel").hidden = false;
    $("share-close").focus();
  }

  function closeSharePanel() {
    $("share-panel").hidden = true;
    $("share-btn").focus({ preventScroll: true });
  }

  $("share-btn").addEventListener("click", shareResult);
  $("share-close").addEventListener("click", closeSharePanel);
  $("share-panel").addEventListener("click", (e) => {
    if (e.target.id === "share-panel") closeSharePanel();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("share-panel").hidden) closeSharePanel();
  });

  // ===== イベント =====
  document.querySelectorAll("[data-mode]").forEach((b) =>
    b.addEventListener("click", () => start(b.dataset.mode, b.dataset.level ? Number(b.dataset.level) : 0)),
  );
  $("next-btn").addEventListener("click", next);
  // キーボード：1〜4で回答
  document.addEventListener("keydown", (e) => {
    if (!S || screens.play.hidden || S.answered || e.altKey || e.ctrlKey || e.metaKey) return;
    if (/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
    const n = Number(e.key);
    const q = S.qs[S.i];
    if (n >= 1 && n <= q.choices.length) answer(q.choices[n - 1]);
  });
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
