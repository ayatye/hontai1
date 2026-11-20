/* =========================================================
   siizun.js — シーズン残りメーター
   置き方：<div data-siizun></div>  （CSS は honntai/style/siizun.css）
   更新するのは下の SIIZUN_DATA だけ。
   ・時刻は日本時間（+09:00）で書く。公式告知の UTC+8 は +1時間する
     例）8:00(UTC+8) → 9:00(JST)
   ・終了日が公式発表されていない間は yosou: true にしておく
     （「予想」バッジと注意書きが出る）。発表されたら false に。
   ・新シーズンが始まったら配列の先頭に足す（古いものは残してOK）
   ========================================================= */
(function () {
  "use strict";

  const SIIZUN_DATA = [
    {
      no: 45,
      // 2026/11/19 8:00(UTC+8)〜240分メンテ → 12:00(UTC+8) = 13:00 JST
      start: "2026-11-19T13:00:00+09:00",
      // 未発表。直近の多くのシーズンが70日なので 2027/1/28 のメンテ開始(9:00 JST)と予想
      end: "2027-01-28T09:00:00+09:00",
      yosou: true,
      link: "/honntai/ibento/ibento.html",
    },
    {
      no: 44,
      start: "2026-09-10T13:00:00+09:00",
      end: "2026-11-19T09:00:00+09:00",
      yosou: false,
      link: "/honntai/ibento/ibento.html",
    },
  ];

  // ラストスパートは例年「終了の1週間前」から
  const LAST_SPURT_DAYS = 7;

  const DAY = 86400000;
  const HOUR = 3600000;

  function fmtDate(d) {
    const w = "日月火水木金土"[d.getDay()];
    return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + "(" + w + ")";
  }

  // 日本時間で表示したいので、端末のタイムゾーンに関係なく JST に寄せる
  function toJst(ms) {
    return new Date(ms + (9 * 60 + new Date(ms).getTimezoneOffset()) * 60000);
  }

  function pickSeason(now) {
    const list = SIIZUN_DATA.slice().sort((a, b) => Date.parse(b.start) - Date.parse(a.start));
    return list.find((s) => Date.parse(s.start) <= now) || list[list.length - 1];
  }

  function remainText(ms) {
    if (ms <= 0) return { big: "0", unit: "日", sub: "" };
    const d = Math.floor(ms / DAY);
    const h = Math.floor((ms % DAY) / HOUR);
    const m = Math.floor((ms % HOUR) / 60000);
    if (d >= 1) return { big: String(d), unit: "日", sub: h + "時間" };
    if (h >= 1) return { big: String(h), unit: "時間", sub: m + "分" };
    return { big: String(m), unit: "分", sub: "" };
  }

  function render(el) {
    const now = Date.now();
    const s = pickSeason(now);
    const start = Date.parse(s.start);
    const end = Date.parse(s.end);
    const total = end - start;
    const left = end - now;
    const pct = Math.max(0, Math.min(100, ((now - start) / total) * 100));
    const spurtAt = end - LAST_SPURT_DAYS * DAY;
    const r = remainText(left);

    let state = "normal";
    if (left <= 0) state = "over";
    else if (now >= spurtAt) state = "spurt";

    // 1週間ごとの目盛り
    let ticks = "";
    for (let t = start + 7 * DAY; t < end; t += 7 * DAY) {
      ticks += '<i style="left:' + (((t - start) / total) * 100).toFixed(2) + '%"></i>';
    }

    const tip =
      fmtDate(toJst(start)) + " 開幕 〜 " + fmtDate(toJst(end)) +
      (s.yosou ? " 終了予想（終了日は公式未発表）" : " 終了");

    const remain =
      state === "over"
        ? (s.yosou ? "確認中" : "終了")
        : "<span class=\"siizun__nokori\">残り</span><b>" + r.big + "</b>" + r.unit + (r.sub ? '<span class="siizun__sub">' + r.sub + "</span>" : "");

    el.className = "siizun siizun--" + state;
    el.title = tip;
    el.innerHTML =
      '<div class="siizun__top">' +
      '<span class="siizun__badge">S' + s.no + "</span>" +
      '<h2 class="siizun__title">シーズン残りメーター</h2>' +
      '<span class="siizun__remain">' + remain +
      (s.yosou && state !== "over" ? '<span class="siizun__yosou">予想</span>' : "") +
      "</span>" +
      "</div>" +
      '<div class="siizun__meter" role="progressbar" aria-label="S' + s.no + 'の経過（' + tip + '）" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(pct) + '">' +
      '<div class="siizun__fill" style="width:' + pct.toFixed(2) + '%"></div>' +
      ticks +
      "</div>";
  }

  function init() {
    const els = document.querySelectorAll("[data-siizun]");
    if (!els.length) return;
    const tick = () => els.forEach(render);
    tick();
    setInterval(tick, 60000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
