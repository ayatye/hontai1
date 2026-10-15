/* =========================================================
   第五カレンダー（karenda.js）
   ---------------------------------------------------------
   キャラの誕生日・イベント・コラボ・大会の日付をまとめたカレンダー。
   データはこのファイルの KARENDA_DATA だけ。更新はここを触ればOK。

   使い方（どのページでも、置いた場所に表示される）：
     ・小さいウィジェット「今日の荘園」
         <div data-karenda="widget"></div>
     ・月表示のフルカレンダー（karenda/karenda.html 用）
         <div data-karenda="page"></div>
     ・カレンダー部分だけ（トップページ下部用）
         <div data-karenda="mini"></div>
         見出しをページ側で付けるときは data-head="off"
       ※月ごとの一覧は出さず、URLも書き換えない。下にカレンダーページへのリンク
     ・読み込み（パスは深さに合わせる）
         <script src="honntai/script/karenda.js" defer></script>

   動き：
     ・前月／次月で、壁掛けカレンダーをめくるように紙が切り替わる
       （スマホは左右スワイプでもめくれる）
     ・日付を押すと、その日の詳細が日めくり風のカードで開く

   日付は日本時間で判定する（海外から見ても日付がずれない）。
   「s」「e」は開始日・終了日。どちらの日も「開催中」扱い。
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
      [10, 21, "時空の影", "/honntai/hanta/zikuunokage/zikuunokage.html", "/honntai/images/kyaragazou/hanntagazou/zikuunokage.jpeg", "h"],
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
      // 2026/10/15 アップデート告知より
      { t: "夜半の囁き", type: "ibento", s: "2026-10-15", e: "2026-10-22", link: "/honntai/ibento/ibento.html" },
      { t: "ハロウィン復刻（イベントショップ・ショップ）", type: "ibento", s: "2026-10-15", e: "2026-11-11", link: "/honntai/ibento/ibento.html" },
      { t: "キャラの日 二次開放（幻灯師・時空の影）", type: "ibento", s: "2026-10-23", e: "2026-10-25", link: "/honntai/ibento/ibento.html" },
    ],
    // 大会。type: "taikai"。place=会場、url=外部リンク、tentative=true は未確定（「予定」表示）
    taikai: [
      { t: "2025秋季IJL レギュラーシーズン", s: "2025-10-25", e: "2025-12-07", place: "", url: "https://x.com/IdentityVChamp" },
      { t: "COA Ⅸ 日本地区予選", s: "2026-02-27", e: "2026-03-15", place: "", url: "https://x.com/IdentityVChamp" },
      { t: "COA Ⅸ ワールド決勝 開幕", s: "2026-04-10", e: "2026-04-10", place: "中国・上海", url: "https://x.com/IdentityVChamp" },
      { t: "COA Ⅸ トーナメント戦", s: "2026-05-01", e: "2026-05-05", place: "中国・上海", url: "https://x.com/IdentityVChamp" },
      { t: "2026夏季IJL レギュラーシーズン", s: "2026-06-06", e: "2026-07-19", place: "浜町スタジオ", url: "https://x.com/IdentityVChamp" },
      { t: "2026夏季IJL プレイオフ", s: "2026-07-31", e: "2026-08-02", place: "千葉JPFドーム", url: "https://x.com/IdentityVChamp" },
      { t: "アジア競技大会 第五人格（グループ戦・決勝）", s: "2026-09-29", e: "2026-09-30", place: "愛知・名古屋", url: "https://kamigame.jp/identity5/page/442115465620272108.html" },
      { t: "2026秋季IJL レギュラーシーズン", s: "2026-10-24", e: "2026-12-06", place: "浜町スタジオ", url: "https://x.com/IdentityVChamp", tentative: true },
      { t: "2026秋季IJL プレイオフ", s: "2026-12-26", e: "2026-12-28", place: "神戸国際展示場", url: "https://x.com/IdentityVChamp", tentative: true },
    ],
  };

  const PAGE_URL = "/honntai/karenda/karenda.html";
  const WEEK = ["日", "月", "火", "水", "木", "金", "土"];
  const TYPE_LABEL = { ibento: "イベント", korabo: "コラボ", taikai: "大会" };
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 日付まわり（日本時間） ---------- */
  function todayJST() {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
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
  function addDays(s, n) {
    const dt = new Date(toUTC(s) + n * 86400000);
    return ymd(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
  }
  function diffDays(a, b) {
    return Math.round((toUTC(b) - toUTC(a)) / 86400000);
  }
  function weekdayIndex(s) {
    return new Date(toUTC(s)).getUTCDay();
  }
  function md(s) {
    const p = parse(s);
    return p.m + "/" + p.d;
  }
  function slash(s) {
    return s.replace(/-/g, "/");
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }

  /* ---------- データの取り出し ---------- */
  const birthdays = KARENDA_DATA.birthdays.map(([m, d, name, link, img, side]) => ({ m, d, name, link, img, side }));
  // イベント・コラボ・大会をひとつの並びにまとめる
  const events = KARENDA_DATA.events
    .concat((KARENDA_DATA.taikai || []).map((e) => Object.assign({ type: "taikai" }, e)))
    .sort((a, b) => (a.s < b.s ? -1 : a.s > b.s ? 1 : 0));

  function birthdaysOn(m, d) {
    return birthdays.filter((b) => b.m === m && b.d === d);
  }
  // その日に開催中のもの。大会 → コラボ → イベントの順（同じ種類は開始が早い順）
  const TYPE_ORDER = { taikai: 0, korabo: 1, ibento: 2 };
  function eventsOn(day) {
    return events
      .filter((e) => e.s <= day && day <= e.e)
      .sort((a, b) => TYPE_ORDER[a.type] - TYPE_ORDER[b.type] || (a.s < b.s ? -1 : 1));
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
    const lastLeft = first.length ? first[first.length - 1].left : 0;
    return list.filter((b) => b.left <= lastLeft); // 同じ日に複数いれば全員
  }
  function linkAttrs(e) {
    const href = e.link || e.url || "#";
    const ext = /^https?:/.test(href);
    return 'href="' + esc(href) + '"' + (ext ? ' target="_blank" rel="noopener"' : "");
  }
  function statusHTML(e, today) {
    if (e.s <= today && today <= e.e) {
      const n = diffDays(today, e.e);
      if (e.s === e.e) return '<span class="krd-left krd-left--soon">本日</span>';
      return '<span class="krd-left' + (n <= 3 ? " krd-left--soon" : "") + '">' + (n <= 0 ? "本日まで" : "あと" + n + "日") + "</span>";
    }
    if (e.s > today) {
      const n = diffDays(today, e.s);
      return '<span class="krd-left">' + (n === 1 ? "明日から" : "あと" + n + "日で開始") + "</span>";
    }
    return '<span class="krd-left krd-left--end">終了</span>';
  }
  function periodText(e) {
    return e.s === e.e ? slash(e.s) : slash(e.s) + " 〜 " + slash(e.e);
  }
  function tentativeHTML(e) {
    return e.tentative ? '<span class="krd-tent">予定</span>' : "";
  }

  /* ---------- 見た目（このファイルだけで完結させる） ---------- */
  const css = `
  .krd{--krd-p:#7c3aed;--krd-pd:#5b21b6;--krd-l:#ede9fe;--krd-line:#e4dff5;--krd-ink:#1e1b4b;--krd-sub:#6b7280;
    --krd-ev:#d97706;--krd-ev-soft:#fef3c7;--krd-ko:#0e7490;--krd-ko-soft:#cffafe;--krd-tk:#15803d;--krd-tk-soft:#dcfce7;
    --krd-bd:#db2777;--krd-bd-soft:#fce7f3;
    font-family:"Zen Kaku Gothic New","Hiragino Kaku Gothic ProN","Yu Gothic",Meiryo,sans-serif;color:var(--krd-ink);box-sizing:border-box}
  .krd *,.krd *::before,.krd *::after{box-sizing:border-box}
  .krd a{color:inherit;text-decoration:none}
  .krd-tag{display:inline-block;flex:none;font-size:.72rem;font-weight:700;line-height:1;padding:.32em .55em;border-radius:999px;white-space:nowrap}
  .krd-tag--ibento{background:var(--krd-ev-soft);color:var(--krd-ev)}
  .krd-tag--korabo{background:var(--krd-ko-soft);color:var(--krd-ko)}
  .krd-tag--taikai{background:var(--krd-tk-soft);color:var(--krd-tk)}
  .krd-tag--bd{background:var(--krd-bd-soft);color:var(--krd-bd)}
  .krd-tent{display:inline-block;margin-left:.4em;font-size:.68rem;font-weight:700;color:var(--krd-sub);border:1px solid var(--krd-line);border-radius:4px;padding:.05em .35em;vertical-align:.1em}
  .krd-left{flex:none;font-size:.8rem;font-weight:700;color:var(--krd-p);white-space:nowrap}
  .krd-left--soon{color:#b91c1c}
  .krd-left--end{color:#9ca3af}
  .krd-ava{width:40px;height:40px;border-radius:50%;object-fit:cover;flex:none;border:2px solid #fff;box-shadow:0 0 0 2px var(--krd-bd-soft);background:var(--krd-l)}
  .krd-empty{color:var(--krd-sub);font-size:.88rem;margin:.2em 0}

  /* ===== ウィジェット「今日の荘園」 ===== */
  .krd-w{border:1px solid var(--krd-line);border-radius:14px;background:#fff;margin:1.4em 0;overflow:hidden}
  .krd-w__head{display:flex;align-items:baseline;justify-content:space-between;gap:.6em;padding:.85em 1.1em;background:linear-gradient(90deg,var(--krd-p),#9f67ff);color:#fff}
  .krd-w__title{margin:0;font-size:1.05rem;font-weight:700;letter-spacing:.04em;border:0;padding:0;color:#fff;background:none}
  .krd-w__date{font-size:.9rem;opacity:.95;white-space:nowrap}
  .krd-w__body{display:grid;grid-template-columns:1fr 1fr}
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
  .krd-w__cal{padding:1em 1.1em 1.1em;border-top:1px solid var(--krd-line);background:#fdfcff}
  .krd-mini .krd-w__cal{border-top:0}
  .krd-w__title{white-space:nowrap}
  @media (max-width:640px){.krd-mini .krd-w__head{flex-wrap:wrap;row-gap:.1em}.krd-mini .krd-w__date{font-size:.78rem}}
  .krd-w__cal .krd-cell{min-height:84px}
  @media (max-width:640px){.krd-w__cal{padding:.8em .5em .9em}.krd-w__cal .krd-cell{min-height:52px}}
  @media (max-width:640px){
    .krd-w__body{grid-template-columns:1fr}
    .krd-w__col+.krd-w__col{border-left:0;border-top:1px solid var(--krd-line)}
  }

  /* ===== フルカレンダー（壁掛けカレンダー） ===== */
  .krd-p__nav{display:flex;justify-content:space-between;align-items:center;gap:.5em;margin:0 0 .4em}
  .krd-btn{font:inherit;font-size:.9rem;font-weight:700;border:1px solid var(--krd-line);background:#fff;color:var(--krd-pd);border-radius:8px;padding:.4em .9em;cursor:pointer;min-height:40px}
  .krd-btn:hover{background:var(--krd-l)}
  .krd-btn:focus-visible,.krd-cell:focus-visible,.krd-x:focus-visible{outline:2px solid var(--krd-p);outline-offset:2px}
  .krd-legend{display:flex;flex-wrap:wrap;justify-content:center;gap:.4em 1em;margin:.9em 0 0;font-size:.8rem;color:var(--krd-sub)}
  .krd-legend span{display:inline-flex;align-items:center;gap:.35em}
  .krd-legend i{width:10px;height:10px;border-radius:3px;display:inline-block}

  .krd-book{position:relative;perspective:1600px;padding-top:14px}
  .krd-rings{position:absolute;top:0;left:0;right:0;height:28px;display:flex;justify-content:space-around;padding:0 9%;z-index:3;pointer-events:none}
  .krd-rings i{width:10px;height:26px;border-radius:6px;background:linear-gradient(90deg,#9ca3af,#f3f4f6 45%,#6b7280);box-shadow:0 1px 2px rgba(0,0,0,.25)}
  .krd-sheet{background:#fff;border:1px solid var(--krd-line);border-radius:10px 10px 14px 14px;box-shadow:0 6px 0 -2px #f1eefb,0 6px 0 -1px var(--krd-line),0 12px 0 -4px #f6f4fc,0 12px 0 -3px var(--krd-line),0 18px 30px -18px rgba(30,27,75,.35);transform-origin:50% 0;backface-visibility:hidden;overflow:hidden}
  .krd-sheet--flip{position:absolute;left:0;right:0;top:14px;z-index:2}
  .krd-sheet__head{display:flex;align-items:flex-end;justify-content:center;gap:.5em;padding:1.3em 1em .7em;background:linear-gradient(180deg,#faf8ff,#fff);border-bottom:1px solid var(--krd-line)}
  .krd-sheet__y{font-size:.95rem;font-weight:700;color:var(--krd-sub);padding-bottom:.35em}
  .krd-sheet__m{font-size:2.6rem;font-weight:700;line-height:1;color:var(--krd-p);letter-spacing:-.02em}
  .krd-sheet__mj{font-size:1.05rem;font-weight:700;padding-bottom:.25em}
  .krd-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));background:var(--krd-line);gap:1px}
  .krd-wd{background:#faf8ff;text-align:center;font-size:.78rem;font-weight:700;padding:.4em 0;color:var(--krd-sub)}
  .krd-wd--sun{color:#b91c1c}.krd-wd--sat{color:#1d4ed8}
  .krd-cell{background:#fff;min-height:98px;padding:.3em .3em .4em;display:flex;flex-direction:column;gap:3px;cursor:pointer;border:0;font:inherit;text-align:left;color:inherit;min-width:0;transition:background .15s}
  .krd-cell:hover{background:#f6f3ff}
  .krd-cell--out{background:#fbfbfd;color:#c0c0cc}
  .krd-cell--out .krd-bar,.krd-cell--out .krd-avas{opacity:.45}
  .krd-num{font-size:.82rem;font-weight:700;line-height:1;padding:.2em .25em}
  .krd-cell--sun .krd-num{color:#b91c1c}.krd-cell--sat .krd-num{color:#1d4ed8}
  .krd-cell--today .krd-num{background:var(--krd-p);color:#fff!important;border-radius:999px;padding:.25em .45em;align-self:flex-start}
  .krd-bar{display:block;font-size:.68rem;line-height:1.25;padding:.15em .35em;border-radius:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700}
  .krd-bar--ibento{background:var(--krd-ev-soft);color:#92400e}
  .krd-bar--korabo{background:var(--krd-ko-soft);color:#155e75}
  .krd-bar--taikai{background:var(--krd-tk-soft);color:#166534}
  .krd-bar--more{color:var(--krd-sub);font-weight:500;padding-left:.35em}
  .krd-cell .krd-avas{display:flex;flex-wrap:wrap;gap:2px}
  .krd-cell .krd-ava{width:24px;height:24px;border-width:1px;box-shadow:0 0 0 1.5px var(--krd-bd)}
  .krd-dots{display:none;gap:3px;flex-wrap:wrap;justify-content:center}
  .krd-dots i{width:7px;height:7px;border-radius:50%;display:block}
  .krd-dot--ibento{background:var(--krd-ev)}.krd-dot--korabo{background:var(--krd-ko)}.krd-dot--taikai{background:var(--krd-tk)}.krd-dot--bd{background:var(--krd-bd)}
  .krd-hint{text-align:center;font-size:.78rem;color:var(--krd-sub);margin:.6em 0 0}

  .krd-list{list-style:none;margin:0;padding:0}
  .krd-list li{border-bottom:1px dashed var(--krd-line)}
  .krd-list li:last-child{border-bottom:0}
  .krd-row{display:flex;align-items:center;gap:.6em;padding:.6em .1em}
  .krd-row:hover .krd-row__t{text-decoration:underline}
  .krd-row__t{flex:1;min-width:0;font-weight:700;font-size:.95rem}
  .krd-row__sub{display:block;font-weight:400;font-size:.8rem;color:var(--krd-sub)}
  .krd-month-list{margin-top:2em}
  .krd-month-list h3{margin:1.3em 0 .4em;font-size:1.05rem;border:0;padding:0 0 .3em;background:none;border-bottom:2px solid var(--krd-l);color:var(--krd-ink)}

  /* ===== 日付を押したときの詳細（日めくり風カード） ===== */
  .krd-modal{position:fixed;top:0;left:0;bottom:0;width:100%;z-index:2147480000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(30,27,75,.45)}
  .krd-modal[hidden]{display:none}
  .krd-card{position:relative;width:100%;max-width:440px;max-height:calc(100vh - 32px);display:flex;flex-direction:column;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 24px 60px -20px rgba(30,27,75,.55)}
  .krd-card__top{position:relative;text-align:center;padding:1.1em 1em 1em;background:var(--krd-p);color:#fff}
  .krd-card__top--sun{background:#be123c}.krd-card__top--sat{background:#1d4ed8}
  .krd-card__ym{font-size:.9rem;font-weight:700;opacity:.9;letter-spacing:.06em}
  .krd-card__d{font-size:4.2rem;font-weight:700;line-height:1;margin:.05em 0}
  .krd-card__w{font-size:.95rem;font-weight:700}
  .krd-card__today{display:inline-block;margin-left:.4em;font-size:.72rem;background:#fff;color:var(--krd-p);border-radius:999px;padding:.15em .55em;vertical-align:.15em}
  .krd-card__step{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;border:0;background:rgba(255,255,255,.18);color:#fff;font-size:1.3rem;font-weight:700;cursor:pointer}
  .krd-card__step:hover{background:rgba(255,255,255,.3)}
  .krd-card__step--prev{left:12px}.krd-card__step--next{right:12px}
  .krd-x{position:absolute;top:8px;right:10px;width:34px;height:34px;border:0;background:none;color:#fff;font-size:1.5rem;line-height:1;cursor:pointer;border-radius:50%}
  .krd-card__body{overflow-y:auto;padding:.6em 1.1em 1.1em}
  .krd-card__sec{margin:.8em 0 .2em;font-size:.8rem;font-weight:700;color:var(--krd-sub);letter-spacing:.05em}
  .krd-card .krd-row--bd .krd-ava{width:52px;height:52px;box-shadow:0 0 0 3px var(--krd-bd)}
  .krd-card .krd-empty{text-align:center;padding:1.4em 0}
  .krd-card__more{display:block;margin-top:.8em;text-align:center;font-size:.85rem;font-weight:700;color:var(--krd-p)}

  @media (max-width:640px){
    .krd-cell{min-height:56px;align-items:center;gap:4px;padding:.35em .1em}
    .krd-cell .krd-bar,.krd-cell .krd-avas{display:none}
    .krd-dots{display:flex}
    .krd-num{font-size:.85rem}
    .krd-cell--today .krd-num{align-self:center}
    .krd-sheet__m{font-size:2.2rem}
    .krd-modal{align-items:flex-end;padding:0}
    .krd-card{max-width:none;border-radius:18px 18px 0 0;max-height:85vh}
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
  function eventRow(e, today) {
    const sub = periodText(e) + (e.place ? "・" + esc(e.place) : "");
    return (
      "<li><a class=\"krd-row\" " + linkAttrs(e) + '><span class="krd-tag krd-tag--' + e.type + '">' + TYPE_LABEL[e.type] + "</span>" +
      '<span class="krd-row__t">' + esc(e.t) + tentativeHTML(e) + '<span class="krd-row__sub">' + sub + "</span></span>" +
      statusHTML(e, today) + "</a></li>"
    );
  }
  function bdRow(b, big) {
    return (
      '<li><a class="krd-row' + (big ? " krd-row--bd" : "") + '" href="' + esc(b.link) + '">' + avatar(b) +
      '<span class="krd-row__t">' + esc(b.name) + '<span class="krd-row__sub">' + b.m + "月" + b.d + "日・" + sideLabel(b) +
      (big ? "・キャラの日" : "") + "</span></span>" + '<span class="krd-tag krd-tag--bd">誕生日</span></a></li>'
    );
  }

  /* ---------- ウィジェット「今日の荘園」 ---------- */
  function renderWidget(el) {
    const today = todayJST();
    const t = parse(today);
    const todays = birthdaysOn(t.m, t.d);
    const ongoing = eventsOn(today);
    const upcoming = events.filter((e) => e.s > today && diffDays(today, e.s) <= 14);

    let bdHTML = todays
      .map(
        (b) =>
          '<a class="krd-w__bd krd-w__bd--today" href="' + esc(b.link) + '">' + avatar(b) +
          '<span><span class="krd-w__bd-name">' + esc(b.name) + '</span><br><span class="krd-w__bd-sub">今日が誕生日（' + sideLabel(b) + "）</span></span></a>"
      )
      .join("");
    bdHTML += nextBirthdays(today, todays.length ? 1 : 2)
      .map(
        (b) =>
          '<a class="krd-w__bd" href="' + esc(b.link) + '">' + avatar(b) +
          '<span><span class="krd-w__bd-name">' + esc(b.name) + '</span><br><span class="krd-w__bd-sub">' +
          b.m + "月" + b.d + "日（あと" + b.left + "日）</span></span></a>"
      )
      .join("");

    const evHTML =
      ongoing
        .concat(upcoming)
        .map(
          (e) =>
            '<a class="krd-w__ev" ' + linkAttrs(e) + '><span class="krd-tag krd-tag--' + e.type + '">' + TYPE_LABEL[e.type] +
            '</span><span class="krd-w__ev-t">' + esc(e.t) + "</span>" +
            (e.s > today ? '<span class="krd-left">' + md(e.s) + "〜</span>" : statusHTML(e, today)) + "</a>"
        )
        .join("") || '<p class="krd-empty">いま掲載中のイベント・コラボ・大会はありません。</p>';

    el.innerHTML =
      '<section class="krd krd-w" aria-labelledby="krd-w-title">' +
      '<div class="krd-w__head"><h2 class="krd-w__title" id="krd-w-title">今日の荘園</h2><span class="krd-w__date">' +
      t.m + "月" + t.d + "日（" + WEEK[weekdayIndex(today)] + "）</span></div>" +
      '<div class="krd-w__body">' +
      '<div class="krd-w__col"><p class="krd-w__label">' + (todays.length ? "誕生日" : "次の誕生日") + "</p>" + bdHTML + "</div>" +
      '<div class="krd-w__col"><p class="krd-w__label">開催中・もうすぐ</p>' + evHTML + "</div>" +
      "</div>" +
      (el.dataset.calendar === "on" ? '<div class="krd-w__cal"></div>' : "") +
      '<a class="krd-w__more" href="' + PAGE_URL + '">' + (el.dataset.calendar === "on" ? "月ごとの一覧・大会日程をくわしく見る →" : "第五カレンダーを見る →") + "</a>" +
      "</section>";

    const cal = el.querySelector(".krd-w__cal");
    if (cal) renderPage(cal, { compact: true });
  }

  /* ---------- カレンダー部分だけ（トップページ用） ---------- */
  function renderMini(el) {
    el.innerHTML =
      '<section class="krd krd-w krd-mini"' + (el.dataset.head === "off" ? ' aria-label="第五カレンダー"' : ' aria-labelledby="krd-mini-title"') + ">" +
      (el.dataset.head === "off"
        ? ""
        : '<div class="krd-w__head"><h2 class="krd-w__title" id="krd-mini-title">第五カレンダー</h2>' +
          '<span class="krd-w__date">誕生日・イベント・コラボ・大会</span></div>') +
      '<div class="krd-w__cal"></div>' +
      '<a class="krd-w__more" href="' + PAGE_URL + '">月ごとの一覧・大会日程をくわしく見る →</a>' +
      "</section>";
    renderPage(el.querySelector(".krd-w__cal"), { compact: true });
  }

  /* ---------- フルカレンダー ---------- */
  function renderPage(el, opts) {
    const compact = !!(opts && opts.compact);
    const today = todayJST();
    const t = parse(today);
    const state = { y: t.y, m: t.m, busy: false };

    // URLの ?m=2026-10 で月を指定できる（共有用）
    const q = compact ? null : new URLSearchParams(location.search).get("m");
    if (q && /^\d{4}-\d{1,2}$/.test(q)) {
      const [qy, qm] = q.split("-").map(Number);
      if (qm >= 1 && qm <= 12) {
        state.y = qy;
        state.m = qm;
      }
    }

    el.innerHTML =
      '<div class="krd krd-p">' +
      '<div class="krd-p__nav"><button type="button" class="krd-btn" data-go="-1" aria-label="前の月へめくる">‹ 前月</button>' +
      '<button type="button" class="krd-btn" data-go="0">今月</button>' +
      '<button type="button" class="krd-btn" data-go="1" aria-label="次の月へめくる">次月 ›</button></div>' +
      '<div class="krd-book"><div class="krd-rings" aria-hidden="true">' + "<i></i>".repeat(8) + "</div></div>" +
      '<div class="krd-legend"><span><i style="background:#db2777"></i>誕生日</span><span><i style="background:#d97706"></i>イベント</span>' +
      '<span><i style="background:#0e7490"></i>コラボ</span><span><i style="background:#15803d"></i>大会</span></div>' +
      '<p class="krd-hint">日付を押すと、その日の詳細が見られます</p>' +
      (compact ? "" : '<div class="krd-month-list" aria-live="polite"></div>') +
      "</div>" +
      '<div class="krd krd-modal" hidden role="dialog" aria-modal="true" aria-label="日付の詳細"></div>';

    const book = el.querySelector(".krd-book");
    const list = el.querySelector(".krd-month-list");
    // 詳細カードは body 直下に移す（親の重なり順や横はみ出しの影響を受けないように）
    const modal = el.querySelector(".krd-modal");
    document.body.appendChild(modal);
    let sheet = null;
    let lastCell = null;
    let modalDay = null;

    function sheetHTML(y, m) {
      const first = ymd(y, m, 1);
      const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
      const last = ymd(y, m, days);
      const start = addDays(first, -weekdayIndex(first));
      const cells = [];
      for (let i = 0; i < 42; i++) cells.push(addDays(start, i));
      while (cells.length > 35 && cells[cells.length - 7] > last) cells.splice(cells.length - 7, 7);

      let grid = WEEK.map((w, i) => '<div class="krd-wd' + (i === 0 ? " krd-wd--sun" : i === 6 ? " krd-wd--sat" : "") + '">' + w + "</div>").join("");
      grid += cells
        .map((day) => {
          const p = parse(day);
          const wi = weekdayIndex(day);
          const bds = birthdaysOn(p.m, p.d);
          const evs = eventsOn(day);
          const cls = ["krd-cell"];
          if (p.m !== m) cls.push("krd-cell--out");
          if (wi === 0) cls.push("krd-cell--sun");
          if (wi === 6) cls.push("krd-cell--sat");
          if (day === today) cls.push("krd-cell--today");
          let bars = evs.slice(0, 2).map((e) => '<span class="krd-bar krd-bar--' + e.type + '">' + esc(e.t) + "</span>").join("");
          if (evs.length > 2) bars += '<span class="krd-bar krd-bar--more">ほか' + (evs.length - 2) + "件</span>";
          const avas = bds.length ? '<span class="krd-avas">' + bds.map(avatar).join("") + "</span>" : "";
          const types = ["taikai", "korabo", "ibento"].filter((ty) => evs.some((e) => e.type === ty));
          const dots = '<span class="krd-dots" aria-hidden="true">' + (bds.length ? '<i class="krd-dot--bd"></i>' : "") + types.map((ty) => '<i class="krd-dot--' + ty + '"></i>').join("") + "</span>";
          const label = p.m + "月" + p.d + "日" + (bds.length ? "、誕生日" + bds.length + "人" : "") + (evs.length ? "、予定" + evs.length + "件" : "");
          return '<button type="button" class="' + cls.join(" ") + '" data-day="' + day + '" aria-label="' + label + '"><span class="krd-num">' + p.d + "</span>" + avas + bars + dots + "</button>";
        })
        .join("");

      return (
        '<div class="krd-sheet__head"><span class="krd-sheet__y">' + y + '</span><span class="krd-sheet__m">' + m + '</span><span class="krd-sheet__mj">月</span></div>' +
        '<div class="krd-grid">' + grid + "</div>"
      );
    }

    function monthListHTML(y, m) {
      const first = ymd(y, m, 1);
      const last = ymd(y, m, new Date(Date.UTC(y, m, 0)).getUTCDate());
      const inMonth = events.filter((e) => e.s <= last && e.e >= first);
      const tk = inMonth.filter((e) => e.type === "taikai");
      const ev = inMonth.filter((e) => e.type !== "taikai");
      const bds = birthdays.filter((b) => b.m === m);
      const block = (title, arr, row, empty) =>
        "<h3>" + title + "（" + arr.length + "）</h3>" + (arr.length ? '<ul class="krd-list">' + arr.map(row).join("") + "</ul>" : '<p class="krd-empty">' + empty + "</p>");
      return (
        block(m + "月の大会", tk, (e) => eventRow(e, today), "この月に登録されている大会はありません。") +
        block(m + "月のイベント・コラボ", ev, (e) => eventRow(e, today), "この月に掲載中のイベント・コラボはありません。") +
        block(m + "月が誕生日のキャラ", bds, (b) => bdRow(b, false), "この月が誕生日のキャラは登録されていません。")
      );
    }

    function makeSheet() {
      const s = document.createElement("div");
      s.className = "krd-sheet";
      s.innerHTML = sheetHTML(state.y, state.m);
      return s;
    }

    function show(dir) {
      const next = makeSheet();
      if (list) {
        list.innerHTML = monthListHTML(state.y, state.m);
        try { history.replaceState(null, "", "?m=" + state.y + "-" + state.m); } catch (_) {}
      }
      if (!sheet || !dir || reduceMotion || !next.animate) {
        if (sheet) sheet.replaceWith(next);
        else book.appendChild(next);
        sheet = next;
        return;
      }
      const old = sheet;
      state.busy = true;
      const ease = "cubic-bezier(.45,.05,.35,1)";
      if (dir > 0) {
        // 次の月：上の紙がめくれて上へ消え、下から次の紙が出てくる
        book.insertBefore(next, old);
        old.classList.add("krd-sheet--flip");
        const a = old.animate(
          [
            { transform: "rotateX(0deg)", opacity: 1, filter: "brightness(1)" },
            { transform: "rotateX(-70deg)", opacity: 1, filter: "brightness(.85)", offset: 0.6 },
            { transform: "rotateX(-110deg)", opacity: 0, filter: "brightness(.7)" },
          ],
          { duration: 620, easing: ease }
        );
        a.onfinish = () => { old.remove(); state.busy = false; };
      } else {
        // 前の月：めくった紙が上から戻ってくる
        book.appendChild(next);
        next.classList.add("krd-sheet--flip");
        const a = next.animate(
          [
            { transform: "rotateX(-110deg)", opacity: 0, filter: "brightness(.7)" },
            { transform: "rotateX(-70deg)", opacity: 1, filter: "brightness(.85)", offset: 0.4 },
            { transform: "rotateX(0deg)", opacity: 1, filter: "brightness(1)" },
          ],
          { duration: 620, easing: ease }
        );
        a.onfinish = () => { next.classList.remove("krd-sheet--flip"); old.remove(); state.busy = false; };
      }
      sheet = next;
    }

    function go(n) {
      if (state.busy) return;
      if (n === 0) {
        const dir = state.y * 12 + state.m < t.y * 12 + t.m ? 1 : state.y * 12 + state.m > t.y * 12 + t.m ? -1 : 0;
        if (!dir) return;
        state.y = t.y;
        state.m = t.m;
        show(dir);
        return;
      }
      state.m += n;
      if (state.m < 1) { state.m = 12; state.y -= 1; }
      if (state.m > 12) { state.m = 1; state.y += 1; }
      show(n);
    }

    /* --- 詳細カード --- */
    function cardHTML(day) {
      const p = parse(day);
      const wi = weekdayIndex(day);
      const bds = birthdaysOn(p.m, p.d);
      const evs = eventsOn(day);
      const starts = events.filter((e) => e.s === day);
      let body = "";
      if (bds.length) body += '<p class="krd-card__sec">誕生日</p><ul class="krd-list">' + bds.map((b) => bdRow(b, true)).join("") + "</ul>";
      const sorted = evs;
      if (sorted.length) body += '<p class="krd-card__sec">この日に開催中</p><ul class="krd-list">' + sorted.map((e) => eventRow(e, today)).join("") + "</ul>";
      if (!body) body = '<p class="krd-empty">この日の予定はありません。</p>';
      if (starts.length) body += '<p class="krd-card__more">' + starts.length + "件がこの日からスタート</p>";
      return (
        '<div class="krd-card">' +
        '<div class="krd-card__top' + (wi === 0 ? " krd-card__top--sun" : wi === 6 ? " krd-card__top--sat" : "") + '">' +
        '<button type="button" class="krd-x" data-close aria-label="閉じる">×</button>' +
        '<button type="button" class="krd-card__step krd-card__step--prev" data-step="-1" aria-label="前の日">‹</button>' +
        '<button type="button" class="krd-card__step krd-card__step--next" data-step="1" aria-label="次の日">›</button>' +
        '<div class="krd-card__ym">' + p.y + "年 " + p.m + "月</div>" +
        '<div class="krd-card__d">' + p.d + "</div>" +
        '<div class="krd-card__w">' + WEEK[wi] + "曜日" + (day === today ? '<span class="krd-card__today">今日</span>' : "") + "</div>" +
        "</div>" +
        '<div class="krd-card__body">' + body + "</div>" +
        "</div>"
      );
    }
    function openCard(day, cell) {
      modalDay = day;
      if (cell) lastCell = cell;
      modal.innerHTML = cardHTML(day);
      if (modal.hidden) {
        // ページが横にはみ出していても、画面の幅ぴったりに出す
        modal.style.width = document.documentElement.clientWidth + "px";
        modal.hidden = false;
        document.documentElement.style.overflow = "hidden";
        const card = modal.querySelector(".krd-card");
        if (!reduceMotion && card.animate) {
          const sp = window.innerWidth <= 640;
          card.animate(
            sp ? [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }] : [{ transform: "scale(.92) rotateX(-12deg)", opacity: 0 }, { transform: "none", opacity: 1 }],
            { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" }
          );
        }
      }
      const x = modal.querySelector("[data-close]");
      if (x) x.focus({ preventScroll: true });
    }
    function closeCard() {
      if (modal.hidden) return;
      modal.hidden = true;
      modal.innerHTML = "";
      document.documentElement.style.overflow = "";
      if (lastCell && document.contains(lastCell)) lastCell.focus({ preventScroll: true });
    }

    function onClick(ev) {
      const g = ev.target.closest("[data-go]");
      if (g) return go(Number(g.dataset.go));
      const cell = ev.target.closest("[data-day]");
      if (cell) return openCard(cell.dataset.day, cell);
      if (ev.target.closest("[data-close]") || ev.target === modal) return closeCard();
      const step = ev.target.closest("[data-step]");
      if (step && modalDay) {
        const nd = addDays(modalDay, Number(step.dataset.step));
        const np = parse(nd);
        if (np.y !== state.y || np.m !== state.m) {
          const dir = np.y * 12 + np.m > state.y * 12 + state.m ? 1 : -1;
          state.y = np.y;
          state.m = np.m;
          show(dir);
        }
        openCard(nd, book.querySelector('[data-day="' + nd + '"]'));
      }
    }
    el.addEventListener("click", onClick);
    modal.addEventListener("click", onClick);
    document.addEventListener("keydown", (ev) => {
      if (modal.hidden) return;
      if (ev.key === "Escape") closeCard();
      else if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
        const b = modal.querySelector('[data-step="' + (ev.key === "ArrowLeft" ? -1 : 1) + '"]');
        if (b) b.click();
      }
    });

    // スマホ：左右スワイプでめくる
    let sx = 0, sy = 0;
    book.addEventListener("touchstart", (ev) => { sx = ev.touches[0].clientX; sy = ev.touches[0].clientY; }, { passive: true });
    book.addEventListener("touchend", (ev) => {
      const dx = ev.changedTouches[0].clientX - sx;
      const dy = ev.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    }, { passive: true });

    show(0);
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
      else if (el.dataset.karenda === "mini") renderMini(el);
      else renderWidget(el);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.karenda = { data: KARENDA_DATA, refresh: boot };
})();
