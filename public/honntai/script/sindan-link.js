/* =========================================================
   荘園人格診断への入り口演出（第五録トップページ用）
   ---------------------------------------------------------
   使い方：
     1. このファイルをトップページで読み込む
        <script src="（パス）/sindan-link.js" defer></script>
     2. 診断ページへのリンクに data-sindan-link を付ける
        <a href="honntai/sindan/sindan.html" data-sindan-link>荘園人格診断</a>
     ・音を鳴らしたくない時は data-sindan-sound="off" も付ける

   動き：
     1. 押した場所から闇が広がって画面を飲み込む
     2. 闇の中で心音が2回（ドクン、ドクン）
        心電図の線が画面を横切り、心音に合わせて鋭く跳ねる
        赤い縁取りも脈打ち、ドクンと揺れる
        低い心音も一緒に鳴る（音源ファイルは使わず、その場で合成）
     3. 闇に包まれたまま診断ページへ移動する
   ========================================================= */
(function(){
  const NIGHT = "#1b1216";
  const VOLUME = 0.55;          // 心音の大きさ（0〜1）
  const BEATS = [700, 1750];    // 心音のタイミング（押してからのミリ秒）。1回目と2回目の間をしっかり空ける
  const LEAVE = 2700;           // 診断ページへ移動するまでのミリ秒
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const style = document.createElement("style");
  style.textContent = `
    .sdl-overlay{
      position:fixed;inset:0;z-index:2147483000;
      background:${NIGHT};
      pointer-events:all;
      overflow:hidden;
    }
    .sdl-ecg{position:absolute;inset:0;width:100%;height:100%;}
    .sdl-pulse{
      position:absolute;inset:-6%;
      opacity:0;
      background:radial-gradient(ellipse 70% 65% at 50% 50%,
        transparent 38%, rgba(142,36,51,.55) 72%, rgba(170,30,48,.95) 100%);
    }
  `;
  document.head.appendChild(style);

  /* ---------- 心音（Web Audio で合成） ---------- */
  let audio = null;
  function prepareAudio(){
    try{
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if(!Ctx) return null;
      const ctx = new Ctx();
      if(ctx.state === "suspended") ctx.resume();
      return ctx;
    }catch(_){ return null; }
  }

  // 1回の「ドクン」＝低い「ド」と、少し弱い「クン」
  function thump(ctx, at, strength){
    const master = ctx.createGain();
    master.gain.value = VOLUME * strength;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 180;
    lp.connect(master).connect(ctx.destination);

    const hit = (t, f0, f1, len, gain) => {
      // 体に響く低音
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(f0, t);
      o.frequency.exponentialRampToValueAtTime(f1, t + len);
      // スマホの小さいスピーカーでも聞こえるように倍音を少し足す
      const o2 = ctx.createOscillator();
      o2.type = "triangle";
      o2.frequency.setValueAtTime(f0 * 2, t);
      o2.frequency.exponentialRampToValueAtTime(f1 * 2, t + len);

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      const g2 = ctx.createGain();
      g2.gain.value = 0.35;

      o.connect(g);
      o2.connect(g2).connect(g);
      g.connect(lp);
      o.start(t); o2.start(t);
      o.stop(t + len + 0.05); o2.stop(t + len + 0.05);
    };

    hit(at,        72, 42, 0.22, 1.0);   // ド
    hit(at + 0.17, 64, 40, 0.20, 0.65);  // クン
  }

  /* ---------- 心電図 ---------- */
  // 押してからの時間 ms → 線の高さ（-1〜1）。心音のタイミングで鋭く跳ねる
  function ecgValue(ms){
    let v = 0;
    const bump = (center, width, height) => {
      const d = (ms - center) / width;
      return Math.abs(d) < 1 ? height * Math.cos(d * Math.PI / 2) ** 2 : 0;
    };
    BEATS.forEach(b => {
      v += bump(b - 130, 45, 0.10);   // 小さなふくらみ
      v += bump(b - 22,  14, -0.18);  // 下に沈んで
      v += bump(b,       16, 1.00);   // 鋭く跳ね上がる
      v += bump(b + 26,  14, -0.32);  // 深く落ちて
      v += bump(b + 190, 80, 0.20);   // ゆるやかに戻る
    });
    return v;
  }

  function drawEcg(canvas, startMs, endMs){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.clientWidth, H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    const c = canvas.getContext("2d");
    c.scale(dpr, dpr);
    const mid = H * 0.5;
    const amp = Math.min(H * 0.22, 170);
    const t0 = performance.now();

    function frame(now){
      const ms = now - t0;
      const progress = Math.min(1, Math.max(0, (ms - startMs) / (endMs - startMs)));
      c.clearRect(0, 0, W, H);
      if(progress > 0){
        const headX = progress * W;
        // 線（光の尾は左ほど薄くなる）
        const grad = c.createLinearGradient(Math.max(0, headX - W * 0.75), 0, headX, 0);
        grad.addColorStop(0, "rgba(214,64,82,0)");
        grad.addColorStop(1, "rgba(240,90,104,1)");
        c.strokeStyle = grad;
        c.lineWidth = 2.4;
        c.lineJoin = "round";
        c.shadowColor = "rgba(220,50,70,.9)";
        c.shadowBlur = 14;
        c.beginPath();
        for(let x = 0; x <= headX; x += 2){
          const t = startMs + (x / W) * (endMs - startMs);
          const y = mid - ecgValue(t) * amp;
          x === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
        }
        c.stroke();
        // 先頭の光る点
        const ty = mid - ecgValue(startMs + progress * (endMs - startMs)) * amp;
        c.shadowBlur = 22;
        c.fillStyle = "#ffd9dd";
        c.beginPath(); c.arc(headX, ty, 3.2, 0, Math.PI * 2); c.fill();
      }
      if(ms < endMs + 200) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---------- 演出 ---------- */
  function enter(e){
    const link = e.currentTarget;
    if(e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // 新しいタブはそのまま
    e.preventDefault();
    const href = link.href;
    try{ sessionStorage.setItem("sindan-entry", "1"); }catch(_){}

    if(reduceMotion){ location.href = href; return; }

    // 音はクリックの瞬間に準備（ブラウザが音を許可するタイミング）
    if(link.dataset.sindanSound !== "off") audio = prepareAudio();

    const r = link.getBoundingClientRect();
    const x = e.clientX || (r.left + r.width / 2);
    const y = e.clientY || (r.top + r.height / 2);
    const R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 20;

    const overlay = document.createElement("div");
    overlay.className = "sdl-overlay";
    const pulse = document.createElement("div");
    pulse.className = "sdl-pulse";
    overlay.appendChild(pulse);
    const ecg = document.createElement("canvas");
    ecg.className = "sdl-ecg";
    overlay.appendChild(ecg);
    document.body.appendChild(overlay);
    // 闇が広がりきる頃に左端から走り出し、移動の直前に右端へ届く
    drawEcg(ecg, 250, LEAVE - 80);

    // 1. 闇が広がる
    overlay.animate(
      [{ clipPath:`circle(0px at ${x}px ${y}px)` }, { clipPath:`circle(${R}px at ${x}px ${y}px)` }],
      { duration:650, easing:"cubic-bezier(.7,0,.25,1)", fill:"forwards" }
    );

    // 2. 心音：赤い縁が脈打ち、画面がドクンと縮んで戻る
    BEATS.forEach((ms, i) => {
      const strength = i === 0 ? 1 : 0.85;
      pulse.animate([
        { opacity:0,        transform:"scale(1)" },
        { opacity:strength, transform:"scale(.9)",  offset:.12 },
        { opacity:strength * .45, transform:"scale(.97)", offset:.3 },
        { opacity:strength * .8,  transform:"scale(.93)", offset:.42 },
        { opacity:0,        transform:"scale(1)" },
      ], { duration:620, delay:ms, easing:"ease-out" });

      if(audio){
        thump(audio, audio.currentTime + ms / 1000, strength);
      }
    });

    // 3. 移動
    setTimeout(() => { location.href = href; }, LEAVE);
  }

  document.querySelectorAll("a[data-sindan-link]").forEach(a => a.addEventListener("click", enter));

  // ブラウザの「戻る」で帰ってきた時に闇が残らないようにする
  window.addEventListener("pageshow", e => {
    if(e.persisted) document.querySelectorAll(".sdl-overlay").forEach(el => el.remove());
  });
})();
