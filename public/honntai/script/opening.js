/* =========================================================
   第五録 オープニング演出  opening.js
   影のハンターが影のサバイバーを追いかける演出（2パターン）
     ・逃げ切り　　：板当て → 板割り → サバイバーが逃走
     ・追いつかれる：一撃 → ダウン → 担がれて椅子に縛られる → 空へ飛ばされる
   ---------------------------------------------------------
   使い方：各ページの <head> 内（できるだけ上）に1行追加
     <script src="/honntai/script/opening.js"></script>
   ・CSSはこのJSの中に入っているので別ファイル不要
   ・画面クリック / スキップボタン / Esc・Enter で即終了
   ・「視差効果を減らす」設定の端末では表示しない
   ・URLに ?op=1 を付けると毎回強制表示（確認用）
     ?op=escape で逃げ切り、?op=caught で追いつかれるを固定表示
   ========================================================= */
(function () {
  'use strict';

  /* ===== 設定 ===== */
  var MODE = 'session';          // 'session'：同じタブで1回だけ / 'always'：毎回表示
  var STORAGE_KEY = 'daigoroku_opening_v1';
  var TITLE = '第五録';
  var SUBTITLE = 'IDENTITY V 攻略・情報';
  var SCENARIO = 'random';       // 'random'：ランダム / 'escape'：逃げ切り / 'caught'：追いつかれる
  var CAUGHT_RATE = 0.5;         // random のとき「追いつかれる」が出る確率（0〜1）

  var opParam = (location.search.match(/[?&]op=(1|escape|caught)\b/) || [])[1];
  if (opParam === 'escape' || opParam === 'caught') SCENARIO = opParam;
  if (window.DAIGOROKU_OPENING_SCENARIO) SCENARIO = window.DAIGOROKU_OPENING_SCENARIO;
  var force = window.DAIGOROKU_OPENING_FORCE === true || !!opParam;
  if (!force) {
    if (MODE === 'session') {
      try { if (sessionStorage.getItem(STORAGE_KEY)) return; } catch (e) {}
    }
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch (e) {}
  }

  /* ===== CSS ===== */
  var css =
    '#op-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483000;' +
    'background:linear-gradient(180deg,#f7f5ff 0%,#ece7fa 60%,#dcd3ef 100%);overflow:hidden;opacity:1;' +
    'transition:opacity .6s ease;cursor:pointer;-webkit-tap-highlight-color:transparent}' +
    '#op-overlay.op-hide{opacity:0;pointer-events:none}' +
    '#op-canvas{position:absolute;top:0;left:0;width:100%;height:100%;display:block}' +
    '#op-logo{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%) scale(.94);text-align:center;' +
    'opacity:0;transition:opacity .7s ease,transform .7s ease;pointer-events:none;white-space:nowrap;' +
    'font-family:"Hiragino Mincho ProN","Yu Mincho","YuMincho","Noto Serif JP",serif}' +
    '#op-logo.op-show{opacity:1;transform:translate(-50%,-50%) scale(1)}' +
    '#op-logo .op-title{font-size:clamp(40px,9vw,88px);font-weight:700;letter-spacing:.14em;color:#1b1726;' +
    'text-shadow:0 4px 18px rgba(124,58,237,.18)}' +
    '#op-logo .op-sub{margin-top:.5em;font-size:clamp(11px,2.2vw,15px);letter-spacing:.32em;color:#7c3aed}' +
    '#op-skip{position:absolute;right:16px;bottom:16px;background:rgba(27,23,38,.06);color:#1b1726;' +
    'border:1px solid rgba(27,23,38,.22);border-radius:999px;padding:6px 16px;font-size:13px;cursor:pointer;' +
    'font-family:inherit;letter-spacing:.05em}' +
    '#op-skip:hover{background:rgba(124,58,237,.12);border-color:#7c3aed;color:#7c3aed}' +
    'html.op-lock,html.op-lock body{overflow:hidden!important}';

  var style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  /* ===== DOM ===== */
  var ov = document.createElement('div');
  ov.id = 'op-overlay';
  ov.innerHTML =
    '<canvas id="op-canvas"></canvas>' +
    '<div id="op-logo"><div class="op-title">' + TITLE + '</div><div class="op-sub">' + SUBTITLE + '</div></div>' +
    '<button id="op-skip" type="button" aria-label="オープニングをスキップ">スキップ ›</button>';
  document.documentElement.appendChild(ov);
  document.documentElement.classList.add('op-lock');

  var cv = ov.querySelector('#op-canvas');
  var ctx = cv.getContext('2d');
  var logo = ov.querySelector('#op-logo');

  /* ===== 画面サイズ ===== */
  var W = 0, H = 0, G = 0, h = 0;   // G=地面のY, h=サバイバーの身長
  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    G = H * 0.74;
    h = Math.max(48, Math.min(H * 0.2, W * 0.2, 150));
  }
  resize();
  window.addEventListener('resize', resize);

  /* ===== 状態 ===== */
  var COL = '#1b1726';            // 影の色
  var ACCENT = '#7c3aed';
  var T = 0, last = 0, raf = 0, done = false, shake = 0, impact = 0, flash = 0, logoShown = false;
  var impX = 0, impY = 0;

  var CAUGHT = SCENARIO === 'caught' || (SCENARIO === 'random' && Math.random() < CAUGHT_RATE);

  // x は画面幅に対する割合
  var sv = { x: -0.06, phase: 0, speed: 0.42, state: 'run', t: 0, tilt: 0, lift: 0 };
  var hu = { x: -0.46, phase: 1.3, speed: 0.52, state: 'run', t: 0, from: 0, to: 0 };
  var pl = { x: 0.6, state: 'up', ang: 0, t: 0, pieces: [] };
  var ch = { x: 0.84, state: 'idle', t: 0, y: 0, jx: 0, smoke: [] };   // 椅子（追いつかれるパターンのみ）

  // 画面幅に合わせてハンターの開始位置を調整
  (function () {
    if (CAUGHT) {
      // 板の手前で追いつかれる
      sv.speed = 0.36; hu.speed = 0.58;
      var reach = hunterSize() * 0.55 / W;
      var xc = 0.36, tc = (xc - sv.x) / sv.speed;
      hu.x = xc - reach - hu.speed * tc;
    } else {
      // サバイバーが板を越えた瞬間に、ハンターがちょうど板の手前に来る
      var L = palletLen() / W, tp = (pl.x + h * 0.15 / W - sv.x) / sv.speed;
      var trig = pl.x - L - hu.speed * 0.2 - h * 0.1 / W;
      hu.x = trig - 0.02 - hu.speed * tp;
    }
  })();

  var fog = [];
  for (var i = 0; i < 6; i++) {
    fog.push({ x: Math.random(), y: 0.45 + Math.random() * 0.4, r: 0.25 + Math.random() * 0.25, v: 0.01 + Math.random() * 0.025 });
  }

  function palletLen() { return h * 0.7; }
  function stride(s) { return s * 0.14; }
  function hunterSize() { return h * 1.3; }

  /* ===== 更新 ===== */
  function update(dt) {
    T += dt;
    shake = Math.max(0, shake - dt);
    impact = Math.max(0, impact - dt);
    flash = Math.max(0, flash - dt);
    if (CAUGHT) { updateCaught(dt); return; }

    var L = palletLen(), px = pl.x * W, hs = hunterSize();

    // サバイバー
    sv.x += sv.speed * dt;
    sv.phase += sv.speed * dt * W / stride(h);

    // 板
    if (pl.state === 'up') {
      var trigger = px - L - hu.speed * W * 0.2 - h * 0.1;
      if (sv.x * W > px + h * 0.15 && hu.x * W > trigger) { pl.state = 'fall'; pl.t = 0; }
    } else if (pl.state === 'fall') {
      pl.t += dt;
      var k = Math.min(pl.t / 0.2, 1);
      pl.ang = k * k * Math.PI / 2;
      if (k >= 1) {
        pl.state = 'down';
        shake = 0.25;
        if (hu.state === 'run' && hu.x * W > px - L - h * 0.3) {
          // 板当て成功 → スタン
          hu.state = 'stun'; hu.t = 0; hu.from = hu.x; hu.to = (px - L - h * 0.25) / W; impact = 0.2;
          impX = px - L; impY = G - h * 0.15;
        }
      }
    } else if (pl.state === 'broken') {
      for (var j = 0; j < pl.pieces.length; j++) {
        var p = pl.pieces[j];
        p.vy += h * 14 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt;
        if (p.y > G - h * 0.03) { p.y = G - h * 0.03; p.vy *= -0.3; p.vx *= 0.6; p.vr *= 0.6; }
        p.life -= dt * 0.9;
      }
    }

    // ハンター
    if (hu.state === 'run' || hu.state === 'chase') {
      hu.x += hu.speed * dt;
      hu.phase += hu.speed * dt * W / stride(hs);
      if (hu.state === 'run') {
        if (pl.state === 'up' || pl.state === 'fall') {
          hu.x = Math.min(hu.x, (px - h * 0.15) / W);
        } else if (pl.state === 'down') {
          var stop = (px - L - h * 0.2) / W;
          if (hu.x >= stop) { hu.x = stop; hu.state = 'break'; hu.t = 0; }
        }
      }
    } else if (hu.state === 'stun') {
      hu.t += dt;
      var e = Math.min(hu.t / 0.18, 1); e = 1 - (1 - e) * (1 - e);
      hu.x = hu.from + (hu.to - hu.from) * e;
      if (hu.t >= 0.75) { hu.state = 'break'; hu.t = 0; }
    } else if (hu.state === 'break') {
      hu.t += dt;
      if (hu.t >= 0.24 && pl.state === 'down') shatter();
      if (hu.t >= 0.42) { hu.state = 'chase'; hu.speed = 0.72; }
    }

    // ロゴ・終了
    if (!logoShown && T > 2.3) { logoShown = true; logo.classList.add('op-show'); }
    if (!done && (T > 4.1 || (T > 2.8 && sv.x > 1.12 && hu.x > 1.1))) finish();
  }

  /* ----- 追いつかれるパターン ----- */
  function updateCaught(dt) {
    var hs = hunterSize(), reach = hs * 0.55;

    // サバイバー
    if (sv.state === 'run') {
      sv.x += sv.speed * dt;
      sv.phase += sv.speed * dt * W / stride(h);
    } else if (sv.state === 'hit') {
      sv.t += dt;
      var k = Math.min(sv.t / 0.35, 1);
      sv.x += sv.speed * 0.7 * (1 - k) * dt;       // 殴られた勢いで前によろける
      sv.phase += (1 - k) * dt * 12;
      sv.tilt = 1.45 * k * k;
      sv.lift = h * 0.05 * k;
      if (k >= 1) { sv.state = 'down'; sv.t = 0; shake = 0.15; }
    } else if (sv.state === 'down') {
      sv.t += dt;
      sv.x += 0.012 * dt;                          // 這いずり
      sv.phase += dt * 5;
    }

    // ハンター
    if (hu.state === 'run') {
      hu.x += hu.speed * dt;
      hu.phase += hu.speed * dt * W / stride(hs);
      if (sv.state === 'run' && hu.x * W >= sv.x * W - reach) { hu.state = 'swing'; hu.t = 0; }
    } else if (hu.state === 'swing') {
      hu.t += dt;
      hu.x += hu.speed * 0.25 * dt;
      if (hu.t >= 0.22 && sv.state === 'run') {
        sv.state = 'hit'; sv.t = 0;
        shake = 0.3; impact = 0.25; flash = 0.25;
        impX = sv.x * W + h * 0.1; impY = G - h * 0.6;
      }
      if (hu.t >= 0.55) { hu.state = 'approach'; hu.speed = 0.28; }
    } else if (hu.state === 'approach') {
      var target = sv.x + hs * 0.2 / W;
      if (hu.x < target - 0.004) {
        hu.x = Math.min(target, hu.x + hu.speed * dt);
        hu.phase += hu.speed * dt * W / stride(hs * 1.6);
      } else if (sv.state === 'down' && sv.t > 0.25) {
        hu.state = 'pickup'; hu.t = 0;
      }
    } else if (hu.state === 'pickup') {
      hu.t += dt;
      var e = Math.min(hu.t / 0.45, 1); e = e * e * (3 - 2 * e);
      sv.state = 'carried';
      sv.x = hu.x - hs * 0.2 / W;
      sv.tilt = 1.45 + (Math.PI / 2 - 1.45) * e;
      sv.lift = h * 0.05 + (hs * 0.78 - h * 0.05) * e;
      if (hu.t >= 0.5) { hu.state = 'carry'; hu.speed = 0.5; }
    } else if (hu.state === 'carry') {
      hu.x += hu.speed * dt;
      hu.phase += hu.speed * dt * W / stride(hs * 1.6);
      sv.x = hu.x - hs * 0.2 / W;
      sv.lift = hs * 0.78 - Math.abs(Math.cos(hu.phase)) * 0.03 * hs;
      sv.phase += dt * 3;
      if (hu.x >= ch.x - hs * 0.4 / W) {
        hu.state = 'place'; hu.t = 0;
        sv.state = 'placing'; sv.fx = sv.x; sv.fl = sv.lift;
      }
    } else if (hu.state === 'place') {
      // 椅子に座らせる
      hu.t += dt;
      var q = Math.min(hu.t / 0.3, 1); q = q * q * (3 - 2 * q);
      sv.x = sv.fx + (ch.x - sv.fx) * q;
      sv.lift = sv.fl * (1 - q);
      sv.tilt = Math.PI / 2 * (1 - q);
      if (q >= 1 && sv.state === 'placing') {
        sv.state = 'seated'; sv.tilt = 0; sv.lift = 0;
        ch.state = 'tied'; ch.t = 0; shake = 0.12; impact = 0.2;
        impX = ch.x * W; impY = G - h * 0.5;
      }
      if (hu.t >= 0.55) { hu.state = 'idle'; hu.t = 0; }
    } else if (hu.state === 'idle') {
      // 少し下がって見届ける
      hu.t += dt;
      if (hu.t < 0.35) { hu.x -= 0.08 * dt; hu.phase += dt * 6; }
    }

    // 椅子
    if (ch.state === 'tied') {
      ch.t += dt;
      var amp = Math.min(ch.t / 0.7, 1) * h * 0.03;
      ch.jx = (Math.random() - 0.5) * amp * 2;
      if (Math.random() < dt * 14) puff(h * 0.6, 0.6);
      if (ch.t >= 0.8) { ch.state = 'launch'; ch.t = 0; shake = 0.35; flash = 0.2; }
    } else if (ch.state === 'launch') {
      ch.t += dt;
      ch.y = 0.5 * H * 7 * ch.t * ch.t;
      ch.jx = (Math.random() - 0.5) * h * 0.02;
      for (var n = 0; n < 3; n++) puff(h * 0.9, 1);
    }
    if (sv.state === 'seated') { sv.x = ch.x + ch.jx / W; sv.lift = ch.y; }
    for (var m = ch.smoke.length - 1; m >= 0; m--) {
      var sm = ch.smoke[m];
      sm.x += sm.vx * dt; sm.y += sm.vy * dt; sm.r += h * 0.5 * dt; sm.life -= dt * 0.9;
      if (sm.life <= 0) ch.smoke.splice(m, 1);
    }

    if (!logoShown && (ch.state === 'launch' || T > 4.5)) { logoShown = true; logo.classList.add('op-show'); }
    if (!done && ((ch.state === 'launch' && ch.t > 1.1) || T > 6.5)) finish();
  }

  function puff(spread, power) {
    if (ch.smoke.length > 120) return;
    ch.smoke.push({
      x: ch.x * W + (Math.random() - 0.5) * h * 0.4,
      y: G - ch.y,
      vx: (Math.random() - 0.5) * spread,
      vy: -Math.random() * h * 0.3 * power,
      r: h * (0.06 + Math.random() * 0.08),
      life: 0.6 + Math.random() * 0.5
    });
  }

  function shatter() {
    pl.state = 'broken';
    shake = 0.2;
    var L = palletLen(), px = pl.x * W;
    for (var i = 0; i < 5; i++) {
      pl.pieces.push({
        x: px - L + L * (i + 0.5) / 5, y: G - h * 0.05,
        vx: (Math.random() * 1.4 - 0.2) * h * 2,
        vy: -(1.5 + Math.random() * 1.8) * h * 1.6,
        r: 0, vr: (Math.random() - 0.5) * 14,
        len: L / 5 * 0.9, life: 1
      });
    }
  }

  /* ===== 描画 ===== */
  function seg(x1, y1, x2, y2, x3, y3, w) {
    ctx.lineWidth = w;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    if (x3 !== undefined) ctx.lineTo(x3, y3);
    ctx.stroke();
  }

  // f: {x, s, phase, lean, alpha, tilt, hunter, armA, stars}
  function drawFigure(f) {
    var s = f.s, p = f.phase, lean = f.lean;
    ctx.save();
    ctx.globalAlpha = f.alpha;
    ctx.translate(f.x, G - (f.lift || 0));
    if (f.tilt) ctx.rotate(f.tilt);
    ctx.strokeStyle = COL; ctx.fillStyle = COL;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';

    var bob = Math.abs(Math.cos(p)) * 0.03 * s;
    var hx = 0, hy = f.sit ? -0.27 * s : -0.44 * s - bob;
    var sx = hx + Math.sin(lean) * 0.3 * s, sy = hy - Math.cos(lean) * 0.3 * s;
    var cx = sx + Math.sin(lean) * 0.11 * s, cy = sy - Math.cos(lean) * 0.11 * s;

    function leg(q) {
      var a = Math.sin(q) * 0.7;
      var b = 0.15 + 1.2 * Math.max(0, Math.cos(q));
      if (f.sit) { a = 1.5 + Math.sin(q) * 0.08; b = a; }   // 座り姿勢（足をばたつかせる）
      var kx = hx + Math.sin(a) * 0.24 * s, ky = hy + Math.cos(a) * 0.24 * s;
      var fx = kx + Math.sin(a - b) * 0.25 * s, fy = ky + Math.cos(a - b) * 0.25 * s;
      seg(hx, hy, kx, ky, fx, fy, 0.075 * s);
      seg(fx, fy, fx + 0.06 * s, fy, undefined, undefined, 0.05 * s);
    }
    function arm(a, fore) {
      var ex = sx + Math.sin(a) * 0.16 * s, ey = sy + Math.cos(a) * 0.16 * s;
      var wx = ex + Math.sin(a + fore) * 0.15 * s, wy = ey + Math.cos(a + fore) * 0.15 * s;
      seg(sx, sy, ex, ey, wx, wy, 0.06 * s);
      return [wx, wy, a + fore];
    }

    // 奥の手足
    leg(p + Math.PI);
    if (f.sit) arm(-0.45, 0.5); else arm(-Math.sin(p) * 0.8, 1.4);

    if (f.hunter) {
      // コート
      var fl = Math.sin(T * 10 + f.x * 0.01) * 0.04 * s;
      ctx.beginPath();
      ctx.moveTo(sx - 0.07 * s, sy + 0.02 * s);
      ctx.lineTo(sx + 0.06 * s, sy + 0.03 * s);
      ctx.lineTo(hx + 0.1 * s, hy + 0.2 * s);
      ctx.lineTo(hx - 0.28 * s - fl, hy + 0.15 * s + fl * 0.5);
      ctx.closePath(); ctx.fill();
    } else {
      // マフラー
      var wv = Math.sin(T * 14) * 0.03 * s;
      ctx.lineWidth = 0.035 * s;
      ctx.beginPath();
      ctx.moveTo(sx, sy - 0.02 * s);
      ctx.quadraticCurveTo(sx - 0.15 * s, sy - 0.04 * s + wv, sx - 0.28 * s, sy + 0.02 * s - wv);
      ctx.stroke();
    }

    // 胴体・頭
    seg(hx, hy, sx, sy, undefined, undefined, (f.hunter ? 0.15 : 0.13) * s);
    ctx.beginPath(); ctx.arc(cx, cy, 0.075 * s, 0, Math.PI * 2); ctx.fill();

    if (f.hunter) {
      // 帽子
      ctx.fillRect(cx - 0.12 * s, cy - 0.065 * s, 0.24 * s, 0.025 * s);
      ctx.fillRect(cx - 0.065 * s, cy - 0.2 * s, 0.13 * s, 0.14 * s);
    } else {
      // 髪
      ctx.beginPath(); ctx.arc(cx - 0.03 * s, cy - 0.02 * s, 0.07 * s, Math.PI * 0.9, Math.PI * 1.9); ctx.fill();
    }

    // 手前の脚
    leg(p);

    // 手前の腕（ハンターは武器持ち）
    if (f.hunter) {
      var w = arm(f.armA, 0.3);
      var da = w[2] + 0.35, len = 0.5 * s;
      var tx = w[0] + Math.sin(da) * len, ty = w[1] + Math.cos(da) * len;
      seg(w[0], w[1], tx, ty, undefined, undefined, 0.03 * s);
      // 刃
      var nx = Math.sin(da + 1.6), ny = Math.cos(da + 1.6);
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.quadraticCurveTo(tx + nx * 0.2 * s + Math.sin(da) * 0.02 * s, ty + ny * 0.2 * s + Math.cos(da) * 0.02 * s,
                           tx + nx * 0.22 * s - Math.sin(da) * 0.12 * s, ty + ny * 0.22 * s - Math.cos(da) * 0.12 * s);
      ctx.quadraticCurveTo(tx + nx * 0.08 * s, ty + ny * 0.08 * s, tx - Math.sin(da) * 0.04 * s, ty - Math.cos(da) * 0.04 * s);
      ctx.closePath(); ctx.fill();
    } else if (f.sit) {
      arm(-0.35, 0.45);
    } else {
      arm(Math.sin(p) * 0.8, 1.4);
    }

    // スタンの星
    if (f.stars) {
      ctx.fillStyle = '#f2b705';
      for (var i = 0; i < 3; i++) {
        var a2 = T * 7 + i * Math.PI * 2 / 3;
        star(cx + Math.cos(a2) * 0.16 * s, cy - 0.27 * s + Math.sin(a2) * 0.05 * s, 0.045 * s);
      }
    }
    ctx.restore();
  }

  function star(x, y, r) {
    ctx.beginPath();
    for (var i = 0; i < 8; i++) {
      var rr = i % 2 ? r * 0.4 : r, a = i * Math.PI / 4 - Math.PI / 2;
      ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    }
    ctx.closePath(); ctx.fill();
  }

  function drawRunner(o, isHunter) {
    var s = isHunter ? hunterSize() : h;
    var x = o.x * W;
    if (x < -s || x > W + s) return;

    // 地面の影
    if (isHunter || (sv.lift < h * 0.2 && sv.state !== 'seated')) {
      var lying = !isHunter && sv.state !== 'run';
      ctx.fillStyle = 'rgba(27,23,38,0.16)';
      ctx.beginPath();
      ctx.ellipse(x + (lying ? 0.45 : 0.04) * s, G + 2, (lying ? 0.5 : 0.24) * s, 0.035 * s, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    var moving = isHunter ? (hu.state === 'run' || hu.state === 'chase') : sv.state === 'run';
    var base = { x: x, s: s, phase: o.phase, lean: isHunter ? 0.2 : 0.3, alpha: 1, hunter: isHunter, tilt: 0, lift: 0, armA: 0.55 + Math.sin(o.phase) * 0.15, stars: false };

    if (!isHunter && sv.state !== 'run') {
      base.tilt = sv.tilt; base.lift = sv.lift;
      base.lean = sv.state === 'hit' ? 0.3 : 0.1;
      if (sv.state === 'seated') {
        base.sit = true;
        base.lean = 0.02 + Math.sin(T * 18) * 0.06;   // もがく
        base.phase = T * 14;
      }
    }

    if (isHunter && CAUGHT) {
      var ct = hu.t;
      if (hu.state === 'swing') {
        base.phase = Math.PI / 2; base.lean = 0.3;
        if (ct < 0.15) base.armA = 0.55 + (3.0 - 0.55) * (ct / 0.15);
        else if (ct < 0.22) base.armA = 3.0 + (0.5 - 3.0) * ((ct - 0.15) / 0.07);
        else base.armA = 0.5;
      } else if (hu.state === 'approach' || hu.state === 'carry') {
        base.armA = 0.35 + Math.sin(o.phase) * 0.1;
        base.lean = hu.state === 'carry' ? 0.12 : 0.18;
      } else if (hu.state === 'pickup') {
        base.phase = Math.PI / 2;
        base.lean = 0.2 + 0.45 * Math.max(0, 1 - ct / 0.3);
        base.armA = 0.35;
      } else if (hu.state === 'place') {
        base.phase = Math.PI / 2;
        base.lean = 0.2 + 0.35 * Math.sin(Math.min(ct / 0.5, 1) * Math.PI);
        base.armA = 0.35;
      } else if (hu.state === 'idle') {
        base.lean = 0.1; base.armA = 0.3;
        if (ct >= 0.35) base.phase = Math.PI / 2;
      }
    } else if (isHunter) {
      if (hu.state === 'stun') {
        base.phase = Math.PI / 2; base.lean = -0.05;
        base.tilt = -0.22 * Math.min(hu.t / 0.12, 1);
        base.stars = hu.t > 0.1;
        base.armA = 1.6;
      } else if (hu.state === 'break') {
        var t = hu.t;
        base.phase = Math.PI / 2; base.lean = 0.25;
        if (t < 0.2) base.armA = 0.55 + (3.0 - 0.55) * (t / 0.2);
        else if (t < 0.26) base.armA = 3.0 + (0.2 - 3.0) * ((t - 0.2) / 0.06);
        else base.armA = 0.2;
      }
    }

    // 残像（影っぽさ）
    if (moving) {
      for (var k = 3; k >= 1; k--) {
        var g = {};
        for (var key in base) g[key] = base[key];
        g.x = x - k * s * 0.2; g.phase = o.phase - k * 0.45; g.alpha = 0.16 / k;
        g.armA = 0.55 + Math.sin(g.phase) * 0.15;
        drawFigure(g);
      }
    }
    drawFigure(base);
  }

  function drawPallet() {
    var L = palletLen(), t = h * 0.08, px = pl.x * W;
    if (pl.state === 'broken') {
      for (var i = 0; i < pl.pieces.length; i++) {
        var p = pl.pieces[i];
        if (p.life <= 0) continue;
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = '#5a4232';
        ctx.fillRect(-p.len / 2, -t / 2, p.len, t);
        ctx.restore();
      }
      return;
    }
    ctx.save();
    ctx.translate(px, G);
    var wob = pl.state === 'up' ? Math.sin(T * 3) * 0.015 : 0;
    ctx.rotate(-pl.ang + wob);
    ctx.fillStyle = '#5a4232';
    ctx.fillRect(0, -L, t, L);
    ctx.fillStyle = '#8a6a50';
    ctx.fillRect(t * 0.35, -L + t * 0.4, t * 0.3, L - t * 0.8);
    ctx.fillStyle = '#3d2c21';
    for (var n = 1; n <= 3; n++) ctx.fillRect(0, -L * n / 4 - t * 0.12, t, t * 0.24);
    ctx.restore();

    // 当たった瞬間の衝撃
    if (impact > 0) {
      var a = Math.min(1, impact / 0.2), ix = impX, iy = impY;
      ctx.save();
      ctx.globalAlpha = a; ctx.strokeStyle = ACCENT; ctx.lineWidth = h * 0.025; ctx.lineCap = 'round';
      for (var r = 0; r < 8; r++) {
        var ang = r * Math.PI / 4, r1 = h * (0.12 + (1 - a) * 0.15), r2 = r1 + h * 0.12;
        seg(ix + Math.cos(ang) * r1, iy + Math.sin(ang) * r1, ix + Math.cos(ang) * r2, iy + Math.sin(ang) * r2);
      }
      ctx.restore();
    }
  }

  /* 椅子：layer='back'（本体）/ 'front'（縄） */
  function drawChair(layer) {
    var cx = ch.x * W + ch.jx, by = G - ch.y;
    if (layer === 'back') {
      // 煙
      for (var i = 0; i < ch.smoke.length; i++) {
        var sm = ch.smoke[i];
        ctx.fillStyle = 'rgba(27,23,38,' + (0.14 * Math.max(0, sm.life)).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(sm.x, sm.y, sm.r, 0, Math.PI * 2); ctx.fill();
      }
      if (by < -h) return;
      // 地面の影（浮くほど小さく）
      var sc = 1 / (1 + ch.y / h);
      ctx.fillStyle = 'rgba(27,23,38,' + (0.16 * sc).toFixed(3) + ')';
      ctx.beginPath(); ctx.ellipse(cx - 0.04 * h, G + 2, 0.22 * h * sc, 0.035 * h * sc, 0, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#5a4232';
      ctx.fillRect(cx - 0.18 * h, by - 0.24 * h, 0.3 * h, 0.05 * h);   // 座面
      ctx.fillRect(cx - 0.17 * h, by - 0.2 * h, 0.04 * h, 0.2 * h);    // 後ろ脚
      ctx.fillRect(cx + 0.07 * h, by - 0.2 * h, 0.04 * h, 0.2 * h);    // 前脚
      ctx.fillRect(cx - 0.17 * h, by - 0.88 * h, 0.05 * h, 0.66 * h);  // 背もたれ
      ctx.fillStyle = '#3d2c21';
      ctx.fillRect(cx - 0.2 * h, by - 0.9 * h, 0.11 * h, 0.04 * h);    // 背もたれの上
      ctx.fillRect(cx - 0.17 * h, by - 0.11 * h, 0.28 * h, 0.025 * h); // 貫
    } else if (sv.state === 'seated') {
      if (by < -h) return;
      ctx.save();
      ctx.strokeStyle = '#c9a27a'; ctx.lineCap = 'round'; ctx.lineWidth = h * 0.03;
      seg(cx - 0.17 * h, by - 0.47 * h, cx + 0.08 * h, by - 0.46 * h);
      seg(cx - 0.17 * h, by - 0.6 * h, cx + 0.07 * h, by - 0.6 * h);
      seg(cx + 0.14 * h, by - 0.32 * h, cx + 0.15 * h, by - 0.21 * h);
      ctx.restore();
    }
  }

  function drawBg() {
    // 霧
    for (var i = 0; i < fog.length; i++) {
      var f = fog[i];
      var x = ((f.x - T * f.v) % 1.4 + 1.4) % 1.4 - 0.2;
      var gx = x * W, gy = f.y * H, r = f.r * Math.max(W, H);
      var g = ctx.createRadialGradient(gx, gy, 0, gx, gy, r);
      g.addColorStop(0, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
    // 遠くの柵（ゆっくり流れる）
    ctx.fillStyle = 'rgba(27,23,38,0.07)';
    var gap = Math.max(60, W * 0.09), off = -((T * W * 0.05) % gap);
    for (var x2 = off; x2 < W + gap; x2 += gap) {
      ctx.fillRect(x2, G - h * 0.42, h * 0.05, h * 0.42);
    }
    ctx.fillRect(0, G - h * 0.34, W, h * 0.03);
    ctx.fillRect(0, G - h * 0.2, W, h * 0.03);
    // 地面
    var gg = ctx.createLinearGradient(0, G, 0, H);
    gg.addColorStop(0, 'rgba(27,23,38,0.10)'); gg.addColorStop(1, 'rgba(27,23,38,0.02)');
    ctx.fillStyle = gg; ctx.fillRect(0, G, W, H - G);
    ctx.fillStyle = 'rgba(27,23,38,0.25)'; ctx.fillRect(0, G, W, 1);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    if (shake > 0) {
      var m = shake * h * 0.12;
      ctx.translate((Math.random() - 0.5) * m, (Math.random() - 0.5) * m);
    }
    drawBg();
    drawPallet();
    if (CAUGHT) drawChair('back');
    drawRunner(hu, true);
    drawRunner(sv, false);
    if (CAUGHT) drawChair('front');
    ctx.restore();
    // 殴られた瞬間のフラッシュ
    if (flash > 0) {
      ctx.fillStyle = 'rgba(124,58,237,' + (flash / 0.25 * 0.18).toFixed(3) + ')';
      ctx.fillRect(0, 0, W, H);
    }
  }

  /* ===== ループ・終了 ===== */
  function frame(ts) {
    if (!last) last = ts;
    var dt = Math.min((ts - last) / 1000, 0.05);
    last = ts;
    try { update(dt); draw(); } catch (err) { finish(true); return; }
    raf = requestAnimationFrame(frame);
  }

  function finish(immediate) {
    if (done) return;
    done = true;
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    document.documentElement.classList.remove('op-lock');
    ov.classList.add('op-hide');
    document.removeEventListener('keydown', onKey);
    setTimeout(function () {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (ov.parentNode) ov.parentNode.removeChild(ov);
    }, immediate === true ? 0 : 700);
  }

  function onKey(e) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') finish();
  }

  ov.addEventListener('click', function () { finish(); });
  document.addEventListener('keydown', onKey);
  setTimeout(function () { finish(); }, 8000);   // 保険：何があっても8秒で消える

  raf = requestAnimationFrame(frame);
})();
