/* =========================================================
   第五カレンダー（karenda.js）
   ---------------------------------------------------------
   キャラの誕生日・イベント・コラボの日付をまとめたカレンダー。
   データはこのファイルの KARENDA_DATA だけ。更新はここを触ればOK。

   使い方（どのページでも、置いた場所に表示される）：
     ・小さいウィジェット「今日の荘園」
         <div data-karenda="widget"></div>
     ・月表示のフルカレンダー（karenda/karenda.html 用）
         <div data-karenda="page"></div>
     ・読み込み（パスは深さに合わせる）
         <script src="honntai/script/karenda.js" defer></script>

   日付は日本時間で判定する（海外から見ても日付がずれない）。
   イベントの「s」「e」は開始日・終了日。どちらの日も「開催中」扱い。
   ========================================================= */
(function () {
  "use strict";

  const KARENDA_DATA = {
    // [月, 日, キャラ名, ページ, 画像, "s"=サバイバー / "h"=ハンター]
    birthdays: [
      [1, 2, "結魂者", "/honntai/hanta/kekkonnsya/kekkonnsya.html", "/honntai/images/kyaragazou/hanntagazou/kekkonnsya.jpeg", "h"],
      [1, 3, "呪術師", "/honntai/sabaiba/zyuzyutusi/zyuzyutusi.html", "/honntai/images/kyaragazou/sabaibagazou/zyuzyutusi.jpeg", "s"],
      [1, 12, "弁護士", "/honntai/sabaiba/benngosi/benngosi.html", "/honntai/images/kyaragazou/sabaibagazou/benngosi.jpeg", "s"],
      [1, 13, "心眼", "/honntai/sabaiba/sinngann/sinngann.html", "/honntai/images/kyaragazou/sabaibagazou/sinngann.jpeg", "s"],
      [1, 21, "書記官", "/honntai/hanta/syokikann/syokikann.html", "/honntai/images/kyaragazou/hanntagazou/syokikann.jpeg", "h"],
      [1, 24, "黄衣の王", "/honntai/hanta/ika/ika.html", "/honntai/images/kyaragazou/hanntagazou/ika.jpeg", "h"],
      [2, 1, "祭司", "/honntai/sabaiba/saisi/saisi.html", "/honntai/images/kyaragazou/sabaibagazou/saisi.jpeg", "s"],
      [2, 11, "気象学者", "/honntai/sabaiba/kisyougakusya/kisyougakusya.html", "/honntai/images/kyaragazou/sabaibagazou/kisyougakusya.jpeg", "s"],
      [2, 13, "墓守", "/honntai/sabaiba/hakamori/hakamori.html", "/honntai/images/kyaragazou/sabaibagazou/hakamori.jpeg", "s"],
      [2, 14, "バーメイド", "/honntai/sabaiba/bameido/bameido.html", "/honntai/images/kyaragazou/sabaibagazou/bameido.jpeg", "s"],
      [2, 18, "芸者", "/honntai/hanta/geisya/geisya.html", "/honntai/images/kyaragazou/hanntagazou/geisya.jpeg", "h"],
      [3, 1, "冒険家", "/honntai/sabaiba/boukennka/boukennka.html", "/honntai/images/kyaragazou/sabaibagazou/boukennka.jpeg", "s"],
      [3, 11, "写真家", "/honntai/hanta/syasinnka/syasinnka.html", "/honntai/images/kyaragazou/hanntagazou/syasinnka.jpeg", "h"],
      [3, 17, "医師", "/honntai/sabaiba/isi/isi.html", "/honntai/images/kyaragazou/sabaibagazou/isi.jpeg", "s"],
      [3, 19, "探鉱者", "/honntai/sabaiba/tannkousya/tannkousya.html", "/honntai/images/kyaragazou/sabaibagazou/tannkousya.jpeg", "s"],
      [4, 3, "空軍", "/honntai/sabaiba/kuugunn/kuugunn.html", "/honntai/images/kyaragazou/sabaibagazou/kuugunn.jpeg", "s"],
      [4, 16, "蝋人形師", "/honntai/hanta/rouninngyousi/rouninngyousi.html", "/honntai/images/kyaragazou/hanntagazou/rouninngyousi.jpeg", "h"],
      [4, 20, "隠者", "/honntai/hanta/innzya/innzya.html", "/honntai/images/kyaragazou/hanntagazou/innzya.jpeg", "h"],
      [4, 23, "画家", "/honntai/sabaiba/gaka/gaka.html", "/honntai/images/kyaragazou/sabaibagazou/gaka.jpeg", "s"],
      [4, 25, "泣き虫", "/honntai/hanta/nakimusi/nakimusi.html", "/honntai/images/kyaragazou/hanntagazou/nakimusi.jpeg", "h"],
      [4, 30, "野人", "/honntai/sabaiba/yazinn/yazinn.html", "/honntai/images/kyaragazou/sabaibagazou/yazinn.jpeg", "s"],
      [5, 2, "火災調査員", "/honntai/sabaiba/kasaityousainn/kasaityousainn.html", "/honntai/images/kyaragazou/sabaibagazou/kasaityousainn.jpeg", "s"],
      [5, 5, "記者", "/honntai/sabaiba/kisya/kisya.html", "/honntai/images/kyaragazou/sabaibagazou/kisya.jpeg", "s"],
      [5, 7, "泥棒", "/honntai/sabaiba/dorobou/dorobou.html", "/honntai/images/kyaragazou/sabaibagazou/dorobou.jpeg", "s"],
      [5, 11, "納棺師", "/honntai/sabaiba/noukannsi/noukannsi.html", "/honntai/images/kyaragazou/sabaibagazou/noukannsi.jpeg", "s"],
      [5, 15, "オフェンス", "/honntai/sabaiba/ofensu/ofensu.html", "/honntai/images/kyaragazou/sabaibagazou/ofensu.jpeg", "s"],
      [5, 21, "作曲家", "/honntai/sabaiba/sakkyokuka/sakkyokuka.html", "/honntai/images/kyaragazou/sabaibagazou/sakkyokuka.jpeg", "s"],
      [5, 21, "断罪狩人", "/honntai/hanta/dannzaikariudo/dannzaikariudo.html", "/honntai/images/kyaragazou/hanntagazou/dannzaikariudo.jpeg", "h"],
      [5, 25, "人形師", "/honntai/sabaiba/ningyousi/ningyousi.html", "/honntai/images/kyaragazou/sabaibagazou/ningyousi.jpeg", "s"],
      [5, 29, "バッツマン", "/honntai/sabaiba/battumann/battumann.html", "/honntai/images/kyaragazou/sabaibagazou/battumann.jpeg", "s"],
      [6, 1, "曲芸師", "/honntai/sabaiba/kyokugeisi/kyokugeisi.html", "/honntai/images/kyaragazou/sabaibagazou/kyokugeisi.jpeg", "s"],
      [6, 5, "航空エンジニア", "/honntai/sabaiba/koukuuennzinia/koukuuennzinia.html", "/honntai/images/kyaragazou/sabaibagazou/koukuuennzinia.jpeg", "s"],
      [6, 9, "踊り子", "/honntai/sabaiba/odoriko/odoriko.html", "/honntai/images/kyaragazou/sabaibagazou/odoriko.jpeg", "s"],
      [7, 4, "マジシャン", "/honntai/sabaiba/mazisyann/mazisyann.html", "/honntai/images/kyaragazou/sabaibagazou/mazisyann.jpeg", "s"],
      [7, 10, "囚人", "/honntai/sabaiba/syuuzinn/syuuzinn.html", "/honntai/images/kyaragazou/sabaibagazou/syuuzinn.jpeg", "s"],
      [7, 23, "傭兵", "/honntai/sabaiba/youhei/youhei.html", "/honntai/images/kyaragazou/sabaibagazou/youhei.jpeg", "s"],
      [7, 30, "弓使い", "/honntai/sabaiba/yumitukai/yumitukai.html", "/honntai/images/kyaragazou/sabaibagazou/yumitukai.jpeg", "s"],
      [8, 4, "泣きピエロ", "/honntai/sabaiba/nakipiero/nakipiero.html", "/honntai/images/kyaragazou/sabaibagazou/nakipiero.jpeg", "s"],
      [8, 4, "道化師", "/honntai/hanta/doukesi/doukesi.html", "/honntai/images/kyaragazou/hanntagazou/doukesi.jpeg", "h"],
      [8, 7, "リッパー", "/honntai/hanta/rippa/rippa.html", "/honntai/images/kyaragazou/hanntagazou/rippa.jpeg", "h"],
      [8, 8, "ガードNo.26", "/honntai/hanta/bonnbonn/bonnbonn.html", "/honntai/images/kyaragazou/hanntagazou/bonnbonn.jpeg", "h"],
      [8, 11, "使徒", "/honntai/hanta/sito/sito.html", "/honntai/images/kyaragazou/hanntagazou/sito.jpeg", "h"],
      [8, 25, "調香師", "/honntai/sabaiba/tyoukousi/tyoukousi.html", "/honntai/images/kyaragazou/sabaibagazou/tyoukousi.jpeg", "s"],
      [8, 27, "白黒無常", "/honntai/hanta/sirokuromuzyou/sirokuromuzyou.html", "/honntai/images/kyaragazou/hanntagazou/sirokuromuzyou.jpeg", "h"],
      [9, 8, "騎士", "/honntai/sabaiba/kisi/kisi.html", "/honntai/images/kyaragazou/sabaibagazou/kisi.jpeg", "s"],
      [9, 24, "一等航海士", "/honntai/sabaiba/ittoukoukaisi/ittoukoukaisi.html", "/honntai/images/kyaragazou/sabaibagazou/ittoukoukaisi.jpeg", "s"],
      [9, 28, "オペラ歌手", "/honntai/hanta/operakasyu/operakasyu.html", "/honntai/images/kyaragazou/hanntagazou/operakasyu.jpeg", "h"],
      [10, 2, "夢の魔女", "/honntai/hanta/yumenomazyo/yumenomazyo.html", "/honntai/images/kyaragazou/hanntagazou/yumenomazyo.jpeg", "h"],
      [10, 19, "幻灯師", "/honntai/sabaiba/genntousi/genntousi.html", "/honntai/images/kyaragazou/sabaibagazou/genntousi.png", "s"],
      [10, 27, "ヴァイオリニスト", "/honntai/hanta/vaiorinisuto/vaiorinisuto.html", "/honntai/images/kyaragazou/hanntagazou/vaiorinisuto.jpeg", "h"],
      [10, 31, "占い師", "/honntai/sabaiba/uranaisi/uranaisi.html", "/honntai/images/kyaragazou/sabaibagazou/uranaisi.jpeg", "s"],
      [11, 2, "血の女王", "/honntai/hanta/marhi/marhi.html", "/honntai/images/kyaragazou/hanntagazou/marhi.jpeg", "h"],
      [11, 13, "魔トカゲ", "/honntai/hanta/matokage/matokage.html", "/honntai/images/kyaragazou/hanntagazou/matokage.jpeg", "h"],
      [11, 17, "彫刻家", "/honntai/hanta/tyoukokusi/tyoukokusi.html", "/honntai/images/kyaragazou/hanntagazou/tyoukokusi.jpeg", "h"],
      [11, 22, "幸運児", "/honntai/sabaiba/kouunzi/kouunzi.html", "/honntai/images/kyaragazou/sabaibagazou/kouunzi.jpeg", "s"],
      [11, 25, "破輪", "/honntai/hanta/harinn/harinn.html", "/honntai/images/kyaragazou/hanntagazou/harinn.jpeg", "h"],
      [11, 27, "狂眼", "/honntai/hanta/kyougenn/kyougenn.html", "/honntai/images/kyaragazou/hanntagazou/kyougenn.jpeg", "h"],
      [11, 29, "玩具職人", "/honntai/sabaiba/ganngusyokuninn/ganngusyokuninn.html", "/honntai/images/kyaragazou/sabaibagazou/ganngusyokuninn.jpeg", "s"],
      [12, 7, "夜の番人", "/honntai/hanta/yorunobannninn/yorunobannninn.html", "/honntai/images/kyaragazou/hanntagazou/yorunobannninn.jpeg", "h"],
      [12, 21, "庭師", "/honntai/sabaiba/niwasi/niwasi.html", "/honntai/images/kyaragazou/sabaibagazou/niwasi.jpeg", "s"],
      [12, 21, "復讐者", "/honntai/hanta/hukusyuusya/hukusyuusya.html", "/honntai/images/kyaragazou/hanntagazou/hukusyuusya.jpeg", "h"],
      [12, 22, "昆虫学者", "/honntai/sabaiba/konntyuugakusya/konntyuugakusya.html", "/honntai/images/kyaragazou/sabaibagazou/konntyuugakusya.jpeg", "s"],
      [12, 25, "ポストマン", "/honntai/sabaiba/posutomann/posutomann.html", "/honntai/images/kyaragazou/sabaibagazou/posutomann.jpeg", "s"],
      [12, 27, "カウボーイ", "/honntai/sabaiba/kauboi/kauboi.html", "/honntai/images/kyaragazou/sabaibagazou/kauboi.jpeg", "s"],
    ],
    // type: "ibento"=イベント / "korabo"=コラボ。s=開始日, e=終了日（どちらも含む）
    events: [
      { t: "Ibコラボ", type: "korabo", s: "2025-04-17", e: "2025-05-15", link: "/honntai/korabo/korabo2025-1h.html" },
      { t: "Call of the Abyss Ⅷ優勝祭典イベント", type: "ibento", s: "2025-05-15", e: "2025-05-28", link: "/honntai/ibento/ibento2025-1h.html" },
      { t: "LINE FRIENDS", type: "korabo", s: "2025-05-15", e: "2025-06-26", link: "/honntai/korabo/korabo2025-1h.html" },
      { t: "LINE FRIENDS第2弾", type: "korabo", s: "2025-05-29", e: "2025-06-26", link: "/honntai/korabo/korabo2025-1h.html" },
      { t: "夏のイベント情報", type: "ibento", s: "2025-06-05", e: "2025-06-25", link: "/honntai/ibento/ibento2025-1h.html" },
      { t: "2024IJL秋季大会優勝——AXIZ WAVE戦隊限定イベント", type: "ibento", s: "2025-06-05", e: "2025-06-25", link: "/honntai/ibento/ibento2025-1h.html" },
      { t: "約束のネバーランド（復刻）", type: "korabo", s: "2025-06-19", e: "2025-07-17", link: "/honntai/korabo/korabo2025-1h.html" },
      { t: "Identity V×紙装束コラボ", type: "korabo", s: "2025-07-03", e: "2025-07-30", link: "/honntai/korabo/korabo2025-2h.html" },
      { t: "七周年イベント", type: "ibento", s: "2025-07-10", e: "2025-08-06", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "Identity V×上海天文館コラボイベント", type: "ibento", s: "2025-07-17", e: "2025-08-13", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "2025IJL夏季大会RC戦隊優勝イベント", type: "ibento", s: "2025-08-07", e: "2025-08-27", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "Identity V×TVアニメ『葬送のフリーレン』コラボ", type: "korabo", s: "2025-08-07", e: "2025-09-07", link: "/honntai/korabo/korabo2025-2h.html" },
      { t: "鵲がつなぐ川イベント", type: "ibento", s: "2025-08-21", e: "2025-09-03", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "象牙の塔シリーズストーリーイベント", type: "ibento", s: "2025-08-28", e: "2025-09-24", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "Game on! We are Team BLK! イベント", type: "ibento", s: "2025-09-10", e: "2025-10-08", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "Identity V×故宫观唐コラボイベント", type: "korabo", s: "2025-09-25", e: "2025-10-22", link: "/honntai/korabo/korabo2025-2h.html" },
      { t: "ハロウィンイベント", type: "ibento", s: "2025-10-16", e: "2025-10-23", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "Identity V×コナン・ドイル財団コラボ第二弾", type: "korabo", s: "2025-11-06", e: "2025-12-05", link: "/honntai/korabo/korabo2025-2h.html" },
      { t: "「台所の不思議な旅」― 無料ランチ支援イベント", type: "ibento", s: "2025-11-13", e: "2025-12-03", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "拡張パックイベント", type: "ibento", s: "2025-11-27", e: "2025-12-16", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "クリスマス復刻イベント", type: "ibento", s: "2025-12-11", e: "2026-01-07", link: "/honntai/ibento/ibento2025-2h.html" },  // 元ページの終了年を補正
      { t: "クリスマスイベント", type: "ibento", s: "2025-12-18", e: "2026-01-07", link: "/honntai/ibento/ibento2025-2h.html" },
      { t: "Call of the Abyss Ⅸ", type: "ibento", s: "2025-12-31", e: "2026-01-29", link: "/honntai/ibento/ibento2026-1h.html" },
      { t: "Game on 占い師-eスポーツシリーズ衣装イベント", type: "ibento", s: "2026-01-01", e: "2026-01-28", link: "/honntai/ibento/ibento2026-1h.html" },
      { t: "Identity V×B.Duckコラボ再登場", type: "korabo", s: "2026-01-22", e: "2026-02-21", link: "/honntai/korabo/korabo2026-1h.html" },
      { t: "新春イベント2026", type: "ibento", s: "2026-02-12", e: "2026-04-02", link: "/honntai/ibento/ibento2026-1h.html" },
      { t: "Identity V×有獣焉コラボ", type: "korabo", s: "2026-02-12", e: "2026-03-14", link: "/honntai/korabo/korabo2026-1h.html" },
      { t: "Identity V×時光代理人コラボ", type: "korabo", s: "2026-03-19", e: "2026-04-19", link: "/honntai/korabo/korabo2026-1h.html" },
      { t: "エイプリルフールイベント2026", type: "ibento", s: "2026-03-26", e: "2026-05-06", link: "/honntai/ibento/ibento2026-1h.html" },
      { t: "リベロの「天外の来客」", type: "ibento", s: "2026-04-02", e: "2026-04-22", link: "/honntai/ibento/ibento2026-1h.html" },
      { t: "Identity V×LiPU FRiENDSコラボ", type: "korabo", s: "2026-04-02", e: "2026-05-02", link: "/honntai/korabo/korabo2026-1h.html" },
      { t: "eスポーツシリーズ販売開始", type: "ibento", s: "2026-04-30", e: "2026-05-27", link: "/honntai/ibento/ibento2026-1h.html" },
      { t: "Identity V×MALTESEコラボ", type: "korabo", s: "2026-05-14", e: "2026-06-13", link: "/honntai/korabo/korabo2026-1h.html" },
      { t: "夢織の兎のプレゼント", type: "ibento", s: "2026-05-27", e: "2026-06-17", link: "/honntai/ibento/ibento2026-1h.html" },
      { t: "鎌田光司コラボ再登場", type: "korabo", s: "2026-06-11", e: "2026-07-08", link: "/honntai/korabo/korabo2026-1h.html" },
      { t: "B.Duckコラボイベント第三弾", type: "korabo", s: "2026-06-18", e: "2026-07-19", link: "/honntai/korabo/korabo.html" },
      { t: "炎昼の海声", type: "ibento", s: "2026-06-25", e: "2026-07-15", link: "/honntai/ibento/ibento.html" },
      { t: "シュティレヴァルトの舞踏会", type: "ibento", s: "2026-07-02", e: "2026-07-29", link: "/honntai/ibento/ibento.html" },
      { t: "Identity V×紙装束第二弾コラボ", type: "korabo", s: "2026-07-02", e: "2026-08-02", link: "/honntai/korabo/korabo.html" },
      { t: "ウィムジーシリーズ【UR衣装】ガードNo.26-檻中の獣", type: "korabo", s: "2026-07-09", e: "2026-08-05", link: "/honntai/korabo/korabo.html" },
      { t: "Identity V×盗墓筆記コラボ", type: "korabo", s: "2026-07-16", e: "2026-08-17", link: "/honntai/korabo/korabo.html" },
      { t: "「パンダの守護者」イベント", type: "ibento", s: "2026-07-23", e: "2026-08-19", link: "/honntai/ibento/ibento.html" },
      { t: "ミニ豆ちゃんコラボ", type: "korabo", s: "2026-07-30", e: "2026-08-30", link: "/honntai/korabo/korabo.html" },
      { t: "九色の岩絵 鹿降らす吉兆", type: "korabo", s: "2026-08-20", e: "2026-09-20", link: "/honntai/korabo/korabo.html" },
      { t: "「光と夢を追って」テーマイベント", type: "ibento", s: "2026-09-17", e: "2026-10-07", link: "/honntai/ibento/ibento.html" },
      { t: "桂下の祈り", type: "ibento", s: "2026-09-24", e: "2026-10-07", link: "/honntai/ibento/ibento.html" },
      { t: "Identity V×大理寺日誌コラボ", type: "korabo", s: "2026-09-30", e: "2026-10-30", link: "/honntai/korabo/korabo.html" },
    ],
  };

  const PAGE_URL = "/honntai/karenda/karenda.html";
  const WEEK = ["日", "月", "火", "水", "木", "金", "土"];
  const TYPE_LABEL = { ibento: "イベント", korabo: "コラボ" };

  /* ---------- 日付まわり（日本時間） ---------- */
  function todayJST() {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
    return parts; // "2026-10-14"
  }
  function ymd(y, m, d) {
    return y + "-" + String(m).padStart(2, "0") + "-" + String(d).padStart(2, "0");
  }
  function parse(s) {
    const [y, m, d] = s.split("-").map(Number);
    return { y, m, d };
  }
  function toUTC(s) {
    const p = parse(s);
    return Date.UTC(p.y, p.m - 1, p.d);
  }
  function diffDays(a, b) {
    return Math.round((toUTC(b) - toUTC(a)) / 86400000);
  }
  function weekday(s) {
    return WEEK[new Date(toUTC(s)).getUTCDay()];
  }
  function md(s) {
    const p = parse(s);
    return p.m + "/" + p.d;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }

  /* ---------- データの取り出し ---------- */
  const birthdays = KARENDA_DATA.birthdays.map(([m, d, name, link, img, side]) => ({ m, d, name, link, img, side }));
  const events = KARENDA_DATA.events.slice().sort((a, b) => (a.s < b.s ? -1 : 1));

  function birthdaysOn(m, d) {
    return birthdays.filter((b) => b.m === m && b.d === d);
  }
  function eventsOn(day) {
    return events.filter((e) => e.s <= day && day <= e.e);
  }
  // 今日から見て次の誕生日（今日は含まない）を近い順に
  function nextBirthdays(today, count) {
    const t = parse(today);
    const list = birthdays.map((b) => {
      let y = t.y;
      if (b.m < t.m || (b.m === t.m && b.d <= t.d)) y += 1;
      const day = ymd(y, b.m, b.d);
      return Object.assign({ day, left: diffDays(today, day) }, b);
    });
    list.sort((a, b) => a.left - b.left);
    const first = list.slice(0, count);
    // 同じ日に複数いる場合は全員出す
    const lastLeft = first.length ? first[first.length - 1].left : 0;
    return list.filter((b) => b.left <= lastLeft);
  }
  function leftText(today, end) {
    const n = diffDays(today, end);
    if (n <= 0) return "本日まで";
    return "あと" + n + "日";
  }

  /* ---------- 見た目（このファイルだけで完結させる） ---------- */
  const css = `
  .krd{--krd-p:#7c3aed;--krd-pd:#5b21b6;--krd-l:#ede9fe;--krd-line:#e4dff5;--krd-ink:#1e1b4b;--krd-sub:#6b7280;
    --krd-ev:#d97706;--krd-ev-soft:#fef3c7;--krd-ko:#0e7490;--krd-ko-soft:#cffafe;--krd-bd:#db2777;--krd-bd-soft:#fce7f3;
    font-family:"Zen Kaku Gothic New","Hiragino Kaku Gothic ProN","Yu Gothic",Meiryo,sans-serif;color:var(--krd-ink);box-sizing:border-box}
  .krd *,.krd *::before,.krd *::after{box-sizing:border-box}
  .krd a{color:inherit;text-decoration:none}
  .krd-tag{display:inline-block;flex:none;font-size:.72rem;font-weight:700;line-height:1;padding:.32em .55em;border-radius:999px;white-space:nowrap}
  .krd-tag--ibento{background:var(--krd-ev-soft);color:var(--krd-ev)}
  .krd-tag--korabo{background:var(--krd-ko-soft);color:var(--krd-ko)}
  .krd-tag--bd{background:var(--krd-bd-soft);color:var(--krd-bd)}
  .krd-left{flex:none;font-size:.8rem;font-weight:700;color:var(--krd-p);white-space:nowrap}
  .krd-left--soon{color:#b91c1c}
  .krd-ava{width:40px;height:40px;border-radius:50%;object-fit:cover;flex:none;border:2px solid #fff;box-shadow:0 0 0 2px var(--krd-bd-soft);background:var(--krd-l)}
  .krd-empty{color:var(--krd-sub);font-size:.88rem;margin:.2em 0}

  /* ウィジェット「今日の荘園」 */
  .krd-w{border:1px solid var(--krd-line);border-radius:14px;background:#fff;margin:1.4em 0;overflow:hidden}
  .krd-w__head{display:flex;align-items:baseline;justify-content:space-between;gap:.6em;padding:.85em 1.1em;background:linear-gradient(90deg,var(--krd-p),#9f67ff);color:#fff}
  .krd-w__title{margin:0;font-size:1.05rem;font-weight:700;letter-spacing:.04em;border:0;padding:0;color:#fff;background:none}
  .krd-w__date{font-size:.9rem;opacity:.95;white-space:nowrap}
  .krd-w__body{display:grid;grid-template-columns:1fr 1fr;gap:0}
  .krd-w__col{padding:.9em 1.1em;min-width:0}
  .krd-w__col+.krd-w__col{border-left:1px solid var(--krd-line)}
  .krd-w__label{margin:0 0 .55em;font-size:.82rem;font-weight:700;color:var(--krd-sub);letter-spacing:.05em}
  .krd-w__bd{display:flex;align-items:center;gap:.65em;padding:.35em 0}
  .krd-w__bd-name{font-weight:700;font-size:.98rem}
  .krd-w__bd-sub{font-size:.8rem;color:var(--krd-sub)}
  .krd-w__bd--today .krd-ava{width:52px;height:52px;box-shadow:0 0 0 3px var(--krd-bd)}
  .krd-w__bd--today .krd-w__bd-name{color:var(--krd-bd);font-size:1.05rem}
  .krd-w__ev{display:flex;align-items:center;gap:.5em;padding:.45em 0;border-bottom:1px dashed var(--krd-line)}
  .krd-w__ev:last-child{border-bottom:0}
  .krd-w__ev-t{flex:1;min-width:0;font-size:.9rem;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .krd-w__ev:hover .krd-w__ev-t,.krd-w__bd:hover .krd-w__bd-name{text-decoration:underline}
  .krd-w__more{display:block;text-align:right;padding:.65em 1.1em;border-top:1px solid var(--krd-line);font-size:.88rem;font-weight:700;color:var(--krd-p)!important;background:#faf8ff}
  .krd-w__more:hover{background:var(--krd-l)}
  @media (max-width:640px){
    .krd-w__body{grid-template-columns:1fr}
    .krd-w__col+.krd-w__col{border-left:0;border-top:1px solid var(--krd-line)}
  }

  /* フルカレンダー */
  .krd-p__bar{display:flex;align-items:center;justify-content:space-between;gap:.5em;margin:0 0 .9em}
  .krd-p__month{margin:0;font-size:1.35rem;font-weight:700;border:0;padding:0;background:none;color:var(--krd-ink)}
  .krd-p__nav{display:flex;gap:.4em}
  .krd-btn{font:inherit;font-size:.9rem;font-weight:700;border:1px solid var(--krd-line);background:#fff;color:var(--krd-pd);border-radius:8px;padding:.4em .8em;cursor:pointer;min-height:38px}
  .krd-btn:hover{background:var(--krd-l)}
  .krd-btn:focus-visible,.krd-cell:focus-visible{outline:2px solid var(--krd-p);outline-offset:2px}
  .krd-legend{display:flex;flex-wrap:wrap;gap:.5em 1em;margin:0 0 .8em;font-size:.8rem;color:var(--krd-sub)}
  .krd-legend span{display:inline-flex;align-items:center;gap:.35em}
  .krd-legend i{width:10px;height:10px;border-radius:3px;display:inline-block}
  .krd-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));border:1px solid var(--krd-line);border-radius:12px;overflow:hidden;background:var(--krd-line);gap:1px}
  .krd-wd{background:#faf8ff;text-align:center;font-size:.78rem;font-weight:700;padding:.4em 0;color:var(--krd-sub)}
  .krd-wd--sun{color:#b91c1c}.krd-wd--sat{color:#1d4ed8}
  .krd-cell{background:#fff;min-height:96px;padding:.3em .3em .4em;display:flex;flex-direction:column;gap:3px;cursor:pointer;border:0;font:inherit;text-align:left;color:inherit;min-width:0}
  .krd-cell:hover{background:#faf8ff}
  .krd-cell--out{background:#fbfbfd;color:#c0c0cc}
  .krd-cell--sel{background:var(--krd-l)!important}
  .krd-num{font-size:.82rem;font-weight:700;line-height:1;padding:.2em .25em}
  .krd-cell--today .krd-num{background:var(--krd-p);color:#fff;border-radius:999px;padding:.25em .45em;align-self:flex-start}
  .krd-bar{display:block;font-size:.68rem;line-height:1.25;padding:.15em .35em;border-radius:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700}
  .krd-bar--ibento{background:var(--krd-ev-soft);color:#92400e}
  .krd-bar--korabo{background:var(--krd-ko-soft);color:#155e75}
  .krd-bar--more{color:var(--krd-sub);font-weight:500;padding-left:.35em}
  .krd-cell .krd-avas{display:flex;flex-wrap:wrap;gap:2px}
  .krd-cell .krd-ava{width:24px;height:24px;border-width:1px;box-shadow:0 0 0 1.5px var(--krd-bd)}
  .krd-dots{display:none;gap:3px;flex-wrap:wrap;padding:0 .25em}
  .krd-dots i{width:7px;height:7px;border-radius:50%;display:block}
  .krd-dot--ibento{background:var(--krd-ev)}.krd-dot--korabo{background:var(--krd-ko)}.krd-dot--bd{background:var(--krd-bd)}
  .krd-detail{margin-top:1.1em;border:1px solid var(--krd-line);border-radius:12px;padding:1em 1.1em;background:#fff}
  .krd-detail h3{margin:0 0 .6em;font-size:1.05rem;border:0;padding:0;background:none;color:var(--krd-ink)}
  .krd-list{list-style:none;margin:0;padding:0}
  .krd-list li{border-bottom:1px dashed var(--krd-line)}
  .krd-list li:last-child{border-bottom:0}
  .krd-row{display:flex;align-items:center;gap:.6em;padding:.55em .1em}
  .krd-row:hover .krd-row__t{text-decoration:underline}
  .krd-row__t{flex:1;min-width:0;font-weight:700;font-size:.95rem}
  .krd-row__sub{display:block;font-weight:400;font-size:.8rem;color:var(--krd-sub)}
  .krd-month-list{margin-top:1.6em}
  .krd-month-list h3{margin:1.2em 0 .5em;font-size:1.05rem;border:0;padding:0 0 .3em;background:none;border-bottom:2px solid var(--krd-l);color:var(--krd-ink)}
  @media (max-width:640px){
    .krd-cell{min-height:58px;align-items:center;gap:4px;padding:.35em .1em}
    .krd-cell .krd-bar,.krd-cell .krd-avas{display:none}
    .krd-dots{display:flex;justify-content:center}
    .krd-num{font-size:.85rem}
    .krd-cell--today .krd-num{align-self:center}
    .krd-p__month{font-size:1.15rem}
  }
  `;
  function injectCSS() {
    if (document.getElementById("krd-style")) return;
    const s = document.createElement("style");
    s.id = "krd-style";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function avatar(b) {
    return '<img class="krd-ava" src="' + esc(b.img) + '" alt="' + esc(b.name) + '" loading="lazy" width="40" height="40" onerror="this.style.visibility=\'hidden\'">';
  }
  function sideLabel(b) {
    return b.side === "h" ? "ハンター" : "サバイバー";
  }

  /* ---------- ウィジェット「今日の荘園」 ---------- */
  function renderWidget(el) {
    const today = todayJST();
    const t = parse(today);
    const todays = birthdaysOn(t.m, t.d);
    const ongoing = events.filter((e) => e.s <= today && today <= e.e).sort((a, b) => (a.e < b.e ? -1 : 1));
    const upcoming = events.filter((e) => e.s > today && diffDays(today, e.s) <= 14);

    let bdHTML = "";
    if (todays.length) {
      bdHTML += todays
        .map(
          (b) =>
            '<a class="krd-w__bd krd-w__bd--today" href="' + esc(b.link) + '">' + avatar(b) +
            '<span><span class="krd-w__bd-name">' + esc(b.name) + '</span><br><span class="krd-w__bd-sub">今日が誕生日（' + sideLabel(b) + "）</span></span></a>"
        )
        .join("");
    }
    const next = nextBirthdays(today, todays.length ? 1 : 2);
    bdHTML += next
      .map(
        (b) =>
          '<a class="krd-w__bd" href="' + esc(b.link) + '">' + avatar(b) +
          '<span><span class="krd-w__bd-name">' + esc(b.name) + '</span><br><span class="krd-w__bd-sub">' +
          b.m + "月" + b.d + "日（あと" + b.left + "日）</span></span></a>"
      )
      .join("");

    let evHTML = "";
    if (ongoing.length) {
      evHTML += ongoing
        .map((e) => {
          const n = diffDays(today, e.e);
          return (
            '<a class="krd-w__ev" href="' + esc(e.link) + '"><span class="krd-tag krd-tag--' + e.type + '">' + TYPE_LABEL[e.type] +
            '</span><span class="krd-w__ev-t">' + esc(e.t) + '</span><span class="krd-left' + (n <= 3 ? " krd-left--soon" : "") + '">' +
            leftText(today, e.e) + "</span></a>"
          );
        })
        .join("");
    }
    if (upcoming.length) {
      evHTML += upcoming
        .map(
          (e) =>
            '<a class="krd-w__ev" href="' + esc(e.link) + '"><span class="krd-tag krd-tag--' + e.type + '">' + TYPE_LABEL[e.type] +
            '</span><span class="krd-w__ev-t">' + esc(e.t) + '</span><span class="krd-left">' + md(e.s) + "〜</span></a>"
        )
        .join("");
    }
    if (!evHTML) evHTML = '<p class="krd-empty">いま掲載中のイベント・コラボはありません。</p>';

    el.innerHTML =
      '<section class="krd krd-w" aria-labelledby="krd-w-title">' +
      '<div class="krd-w__head"><h2 class="krd-w__title" id="krd-w-title">今日の荘園</h2><span class="krd-w__date">' +
      t.m + "月" + t.d + "日（" + weekday(today) + "）</span></div>" +
      '<div class="krd-w__body">' +
      '<div class="krd-w__col"><p class="krd-w__label">' + (todays.length ? "誕生日" : "次の誕生日") + "</p>" + bdHTML + "</div>" +
      '<div class="krd-w__col"><p class="krd-w__label">開催中のイベント・コラボ</p>' + evHTML + "</div>" +
      "</div>" +
      '<a class="krd-w__more" href="' + PAGE_URL + '">第五カレンダーを見る →</a>' +
      "</section>";
  }

  /* ---------- フルカレンダー ---------- */
  function renderPage(el) {
    const today = todayJST();
    const t = parse(today);
    const state = { y: t.y, m: t.m, sel: today };

    // URLの ?m=2026-10 で月を指定できる（共有用）
    const q = new URLSearchParams(location.search).get("m");
    if (q && /^\d{4}-\d{1,2}$/.test(q)) {
      const [qy, qm] = q.split("-").map(Number);
      if (qm >= 1 && qm <= 12) {
        state.y = qy;
        state.m = qm;
        state.sel = qy === t.y && qm === t.m ? today : ymd(qy, qm, 1);
      }
    }

    function draw() {
      const first = ymd(state.y, state.m, 1);
      const days = new Date(Date.UTC(state.y, state.m, 0)).getUTCDate();
      const last = ymd(state.y, state.m, days);
      const startW = new Date(toUTC(first)).getUTCDay();
      const cells = [];
      for (let i = 0; i < 42; i++) {
        const dt = new Date(toUTC(first) + (i - startW) * 86400000);
        cells.push(ymd(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate()));
      }
      // 最終週が丸ごと翌月なら削る
      while (cells.length > 35 && cells[cells.length - 7] > last) cells.splice(cells.length - 7, 7);

      let grid = WEEK.map((w, i) => '<div class="krd-wd' + (i === 0 ? " krd-wd--sun" : i === 6 ? " krd-wd--sat" : "") + '">' + w + "</div>").join("");
      grid += cells
        .map((day) => {
          const p = parse(day);
          const out = p.m !== state.m;
          const bds = birthdaysOn(p.m, p.d);
          const evs = eventsOn(day);
          const cls = ["krd-cell"];
          if (out) cls.push("krd-cell--out");
          if (day === today) cls.push("krd-cell--today");
          if (day === state.sel) cls.push("krd-cell--sel");
          const shown = evs.slice(0, 2);
          let bars = shown.map((e) => '<span class="krd-bar krd-bar--' + e.type + '">' + esc(e.t) + "</span>").join("");
          if (evs.length > 2) bars += '<span class="krd-bar krd-bar--more">ほか' + (evs.length - 2) + "件</span>";
          const avas = bds.length ? '<span class="krd-avas">' + bds.map(avatar).join("") + "</span>" : "";
          const dots =
            '<span class="krd-dots" aria-hidden="true">' +
            (bds.length ? '<i class="krd-dot--bd"></i>' : "") +
            (evs.some((e) => e.type === "ibento") ? '<i class="krd-dot--ibento"></i>' : "") +
            (evs.some((e) => e.type === "korabo") ? '<i class="krd-dot--korabo"></i>' : "") +
            "</span>";
          const label = p.m + "月" + p.d + "日" + (bds.length ? "、誕生日" + bds.length + "人" : "") + (evs.length ? "、イベント・コラボ" + evs.length + "件" : "");
          return (
            '<button type="button" class="' + cls.join(" ") + '" data-day="' + day + '" aria-label="' + label + '"' +
            (day === state.sel ? ' aria-pressed="true"' : "") + '><span class="krd-num">' + p.d + "</span>" + avas + bars + dots + "</button>"
          );
        })
        .join("");

      el.innerHTML =
        '<div class="krd krd-p">' +
        '<div class="krd-p__bar"><h2 class="krd-p__month">' + state.y + "年" + state.m + "月</h2>" +
        '<div class="krd-p__nav"><button type="button" class="krd-btn" data-go="-1" aria-label="前の月">‹ 前月</button>' +
        '<button type="button" class="krd-btn" data-go="0">今日</button>' +
        '<button type="button" class="krd-btn" data-go="1" aria-label="次の月">次月 ›</button></div></div>' +
        '<div class="krd-legend"><span><i style="background:#db2777"></i>誕生日</span><span><i style="background:#d97706"></i>イベント</span><span><i style="background:#0e7490"></i>コラボ</span></div>' +
        '<div class="krd-grid">' + grid + "</div>" +
        '<div class="krd-detail" aria-live="polite">' + detailHTML(state.sel, today) + "</div>" +
        monthListHTML(first, last, today) +
        "</div>";
    }

    el.addEventListener("click", (ev) => {
      const go = ev.target.closest("[data-go]");
      if (go) {
        const n = Number(go.dataset.go);
        if (n === 0) {
          state.y = t.y;
          state.m = t.m;
          state.sel = today;
        } else {
          state.m += n;
          if (state.m < 1) { state.m = 12; state.y -= 1; }
          if (state.m > 12) { state.m = 1; state.y += 1; }
          state.sel = state.y === t.y && state.m === t.m ? today : ymd(state.y, state.m, 1);
        }
        try { history.replaceState(null, "", "?m=" + state.y + "-" + state.m); } catch (_) {}
        draw();
        return;
      }
      const cell = ev.target.closest("[data-day]");
      if (cell) {
        const p = parse(cell.dataset.day);
        if (p.m !== state.m) { state.y = p.y; state.m = p.m; }
        state.sel = cell.dataset.day;
        draw();
        const d = el.querySelector(".krd-detail");
        if (d && window.innerWidth < 769) d.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    draw();
  }

  function eventRow(e, today) {
    let right = "";
    if (e.s <= today && today <= e.e) right = '<span class="krd-left' + (diffDays(today, e.e) <= 3 ? " krd-left--soon" : "") + '">' + leftText(today, e.e) + "</span>";
    else if (e.s > today) right = '<span class="krd-left">あと' + diffDays(today, e.s) + "日で開始</span>";
    else right = '<span class="krd-left" style="color:#9ca3af">終了</span>';
    return (
      '<li><a class="krd-row" href="' + esc(e.link) + '"><span class="krd-tag krd-tag--' + e.type + '">' + TYPE_LABEL[e.type] + "</span>" +
      '<span class="krd-row__t">' + esc(e.t) + '<span class="krd-row__sub">' + e.s.replace(/-/g, "/") + " 〜 " + e.e.replace(/-/g, "/") + "</span></span>" +
      right + "</a></li>"
    );
  }
  function bdRow(b) {
    return (
      '<li><a class="krd-row" href="' + esc(b.link) + '">' + avatar(b) +
      '<span class="krd-row__t">' + esc(b.name) + '<span class="krd-row__sub">' + b.m + "月" + b.d + "日・" + sideLabel(b) + "</span></span>" +
      '<span class="krd-tag krd-tag--bd">誕生日</span></a></li>'
    );
  }
  function detailHTML(day, today) {
    const p = parse(day);
    const bds = birthdaysOn(p.m, p.d);
    const evs = eventsOn(day);
    let h = "<h3>" + p.m + "月" + p.d + "日（" + weekday(day) + "）" + (day === today ? "・今日" : "") + "</h3>";
    if (!bds.length && !evs.length) return h + '<p class="krd-empty">この日の予定はありません。</p>';
    return h + '<ul class="krd-list">' + bds.map(bdRow).join("") + evs.map((e) => eventRow(e, today)).join("") + "</ul>";
  }
  function monthListHTML(first, last, today) {
    const m = parse(first).m;
    const evs = events.filter((e) => e.s <= last && e.e >= first);
    const bds = birthdays.filter((b) => b.m === m);
    let h = '<div class="krd-month-list">';
    h += "<h3>" + m + "月のイベント・コラボ（" + evs.length + "件）</h3>";
    h += evs.length ? '<ul class="krd-list">' + evs.map((e) => eventRow(e, today)).join("") + "</ul>" : '<p class="krd-empty">この月に掲載中のイベント・コラボはありません。</p>';
    h += "<h3>" + m + "月が誕生日のキャラ（" + bds.length + "人）</h3>";
    h += bds.length ? '<ul class="krd-list">' + bds.map(bdRow).join("") + "</ul>" : '<p class="krd-empty">この月が誕生日のキャラは登録されていません。</p>';
    return h + "</div>";
  }

  /* ---------- 起動 ---------- */
  function boot() {
    const targets = document.querySelectorAll("[data-karenda]");
    if (!targets.length) return;
    injectCSS();
    targets.forEach((el) => {
      if (el.dataset.karendaReady) return;
      el.dataset.karendaReady = "1";
      if (el.dataset.karenda === "page") renderPage(el);
      else renderWidget(el);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.karenda = { data: KARENDA_DATA, refresh: boot };
})();
