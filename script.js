// サバイバーとハンターのリスト
const survivors = [
  {
    name: "幸運児",
    url: "本体2/images/kyaragazou/sabaibagazou/幸運児.jpeg",
    link: "本体2/サバイバー/幸運児/幸運児.html",
  },
  { name: "医師", url: "本体2/images/kyaragazou/sabaibagazou/医師.jpeg" },
  { name: "弁護士", url: "本体2/images/kyaragazou/sabaibagazou/弁護士.jpeg" },
  { name: "空軍", url: "本体2/images/kyaragazou/sabaibagazou/空軍.jpeg" },
  { name: "庭師", url: "本体2/images/kyaragazou/sabaibagazou/庭師.jpeg" },
  { name: "泥棒", url: "本体2/images/kyaragazou/sabaibagazou/泥棒.jpeg" },
  { name: "傭兵", url: "本体2/images/kyaragazou/sabaibagazou/傭兵.jpeg" },
  { name: "調香師", url: "images/kyaragazou/sabaibagazou/調香師.jpeg" },
  { name: "占い師", url: "images/kyaragazou/sabaibagazou/占い師.jpeg" },
  { name: "マジシャン", url: "images/kyaragazou/sabaibagazou/マジシャン.jpeg" },
  { name: "カウボーイ", url: "images/kyaragazou/sabaibagazou/カウボーイ.jpeg" },
  { name: "冒険家", url: "images/kyaragazou/sabaibagazou/冒険家.jpeg" },
  { name: "祭司", url: "images/kyaragazou/sabaibagazou/祭司.jpeg" },
  { name: "機械技師", url: "images/kyaragazou/sabaibagazou/機械技師.jpeg" },
  { name: "オフェンス", url: "images/kyaragazou/sabaibagazou/オフェンス.jpeg" },
  { name: "心眼", url: "images/kyaragazou/sabaibagazou/心眼.jpeg" },
  { name: "踊り子", url: "images/kyaragazou/sabaibagazou/踊り子.jpeg" },
  { name: "納棺師", url: "images/kyaragazou/sabaibagazou/納棺師.jpeg" },
  { name: "探鉱者", url: "images/kyaragazou/sabaibagazou/探鉱者.jpeg" },
  { name: "呪術師", url: "images/kyaragazou/sabaibagazou/呪術師.jpeg" },
  { name: "野人", url: "images/kyaragazou/sabaibagazou/野人.jpeg" },
  { name: "曲芸師", url: "images/kyaragazou/sabaibagazou/曲芸師.jpeg" },
  { name: "一等航海士", url: "images/kyaragazou/sabaibagazou/一等航海士.jpeg" },
  {
    name: "バーメイド",
    url: "images/kyaragazou/sabaibagazou/バーメイド.jpeg",
  },
  { name: "ポストマン", url: "images/kyaragazou/sabaibagazou/ポストマン.jpeg" },
  { name: "墓守", url: "images/kyaragazou/sabaibagazou/墓守.jpeg" },
  { name: "囚人", url: "images/kyaragazou/sabaibagazou/囚人.jpeg" },
  { name: "昆虫学者", url: "images/kyaragazou/sabaibagazou/昆虫学者.jpeg" },
  { name: "画家", url: "images/kyaragazou/sabaibagazou/画家.jpeg" },
  { name: "バッツマン", url: "images/kyaragazou/sabaibagazou/バッツマン.jpeg" },
  { name: "玩具職人", url: "images/kyaragazou/sabaibagazou/玩具職人.jpeg" },
  { name: "患者", url: "images/kyaragazou/sabaibagazou/患者.jpeg" },
  { name: "心理学者", url: "images/kyaragazou/sabaibagazou/心理学者.jpeg" },
  { name: "小説家", url: "images/kyaragazou/sabaibagazou/小説家.jpeg" },
  { name: "少女", url: "images/kyaragazou/sabaibagazou/少女.jpeg" },
  { name: "泣きピエロ", url: "images/kyaragazou/sabaibagazou/泣きピエロ.jpeg" },
  { name: "教授", url: "images/kyaragazou/sabaibagazou/教授.jpeg" },
  { name: "骨董商", url: "images/kyaragazou/sabaibagazou/骨董商.jpeg" },
  { name: "作曲家", url: "images/kyaragazou/sabaibagazou/作曲家.jpeg" },
  { name: "記者", url: "images/kyaragazou/sabaibagazou/記者.jpeg" },
  {
    name: "航空エンジニア",
    url: "images/kyaragazou/sabaibagazou/航空エンジニア.jpeg",
  },
  { name: "応援団", url: "images/kyaragazou/sabaibagazou/応援団.jpeg" },
  { name: "人形師", url: "images/kyaragazou/sabaibagazou/人形師.jpeg" },
  { name: "火災調査員", url: "images/kyaragazou/sabaibagazou/火災調査員.jpeg" },
  {
    name: "レディファウロ",
    url: "images/kyaragazou/sabaibagazou/レディファウロ.jpeg",
  },
  { name: "騎士", url: "images/kyaragazou/sabaibagazou/騎士.jpeg" },
];

const hunters = [
  { name: "復讐者", url: "images/kyaragazou/hanntagazou/復讐者.jpeg" },
  { name: "道化師", url: "images/kyaragazou/hanntagazou/道化師.jpeg" },
  { name: "断罪狩人", url: "images/kyaragazou/hanntagazou/断罪狩人.jpeg" },
  { name: "リッパー", url: "images/kyaragazou/hanntagazou/リッパー.jpeg" },
  { name: "結魂者", url: "images/kyaragazou/hanntagazou/結魂者.jpeg" },
  { name: "芸者", url: "images/kyaragazou/hanntagazou/芸者.jpeg" },
  { name: "白黒無常", url: "images/kyaragazou/hanntagazou/白黒無常.jpeg" },
  { name: "写真家", url: "images/kyaragazou/hanntagazou/写真家.jpeg" },
  { name: "狂眼", url: "images/kyaragazou/hanntagazou/狂眼.jpeg" },
  { name: "黄衣の王", url: "images/kyaragazou/hanntagazou/黄衣の王.jpeg" },
  { name: "夢の魔女", url: "images/kyaragazou/hanntagazou/夢の魔女.jpeg" },
  { name: "泣き虫", url: "images/kyaragazou/hanntagazou/泣き虫.jpeg" },
  { name: "魔トカゲ", url: "images/kyaragazou/hanntagazou/魔トカゲ.jpeg" },
  { name: "血の女王", url: "images/kyaragazou/hanntagazou/マリィ.jpeg" },
  {
    name: "ガードNo.26",
    url: "images/kyaragazou/hanntagazou/ガードNO.26.jpeg",
  },
  { name: "使徒", url: "images/kyaragazou/hanntagazou/使徒.jpeg" },
  {
    name: "ヴァイオリニスト",
    url: "images/kyaragazou/hanntagazou/ヴァイオリニスト.jpeg",
  },
  { name: "彫刻家", url: "images/kyaragazou/hanntagazou/彫刻師.jpeg" },
  { name: "アンデッド", url: "images/kyaragazou/hanntagazou/アンデット.jpeg" },
  { name: "破輪", url: "images/kyaragazou/hanntagazou/破輪.jpeg" },
  { name: "漁師", url: "images/kyaragazou/hanntagazou/漁師.jpeg" },
  { name: "蝋人形師", url: "images/kyaragazou/hanntagazou/蝋人形師.jpeg" },
  { name: "悪夢", url: "images/kyaragazou/hanntagazou/悪夢.jpeg" },
  { name: "書記官", url: "images/kyaragazou/hanntagazou/書記官.jpeg" },
  { name: "隠者", url: "images/kyaragazou/hanntagazou/隠者.jpeg" },
  { name: "夜の番人", url: "images/kyaragazou/hanntagazou/夜の番人.jpeg" },
  {
    name: "フールズ・ゴールド",
    url: "images/kyaragazou/hanntagazou/フールズゴールド.jpeg",
  },
  { name: "時空の影", url: "images/kyaragazou/hanntagazou/時空の影.jpeg" },
  { name: "足苗の羊", url: "images/kyaragazou/hanntagazou/足萎えの羊.jpeg" },
  { name: "フラバルー", url: "images/kyaragazou/hanntagazou/フラバルー.jpeg" },
];

// 仮のアイコン画像URL
const placeholderIcon = "https://via.placeholder.com/40";

// サバイバーリストをHTMLに追加
const survivorList = document.getElementById("survivor-list");
survivors.forEach((survivor) => {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.href = survivor.link;

  // アイコン画像を作成
  const img = document.createElement("img");
  img.src = survivor.url;

  // 矢印を作成
  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = ">";

  // 名前の部分もリンクでラップ
  const name = document.createElement("span");
  name.textContent = survivor.name;
  a.appendChild(name);

  li.appendChild(img);
  li.appendChild(a);
  li.appendChild(arrow);
  survivorList.appendChild(li);
});

// ハンターリストをHTMLに追加
const hunterList = document.getElementById("hunter-list");
hunters.forEach((hunter) => {
  const li = document.createElement("li");

  // アイコン画像を作成
  const img = document.createElement("img");
  img.src = hunter.url;

  const a = document.createElement("a");
  a.href = hunter.url;
  a.textContent = hunter.name;

  // 矢印を作成
  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = ">";

  li.appendChild(img);
  li.appendChild(a);
  li.appendChild(arrow);
  hunterList.appendChild(li);
});

// おすすめトピックとイベント情報のデータ
const topics = [
  {
    name: "激アツサバイバー",
    link: "#hot-survivor",
    img: "本体2/images/kyara.jpeg",
  },
  {
    name: "激アツハンター",
    link: "#popular-articles",
    img: "images/popular-articles.jpg",
  },
  { name: "次回のコラボ予想", link: "#deals", img: "images/deals.jpg" },
  {
    name: "キャラクター別プロが使う人格",
    link: "#character-persona",
    img: "本体2/images/zinnkaku.jpeg",
  },
];

const events = [
  {
    name: "初心者に使ってほしいキャラ",
    link: "#event1",
    img: "images/event1.jpg",
  },
  {
    name: "初心者が中級者になる確実なステップ",
    link: "#event2",
    img: "images/event2.jpg",
  },
  { name: "戦闘マップの活用方法", link: "#event3", img: "images/event3.jpg" },
  {
    name: "第五人格知っておきたい用語集",
    link: "#event4",
    img: "images/event4.jpg",
  },
];

const tisikis = [
  {
    name: "危機一髪人格の注意点",
    link: "#tisiki1",
    img: "images/tisiki1.jpg",
  },
  {
    name: "ハッチ逃げ",
    link: "#tisiki2",
    img: "images/tisiki2.jpg",
  },
  {
    name: "マップ内のロッカーの活用方法",
    link: "#tisiki3",
    img: "images/tisiki3.jpg",
  },
  {
    name: "エモート利用",
    link: "#tisiki4",
    img: "images/tisiki4.jpg",
  },
];

const masters = [
  {
    name: "キャラの個性について",
    link: "#master1",
    img: "本体2/images/kosei.jpeg",
  },
  {
    name: "キャラ別プロが使っている人格",
    link: "#master2",
    img: "本体2/images/zinnkaku.jpeg",
  },
  {
    name: "サバイバーキャラ別コンボ",
    link: "#master3",
    img: "images/master3.jpg",
  },
];

// 関数のテンプレートリテラルの修正
const createSpecialItem = (data, listElement) => {
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("special-item");
    listItem.style.backgroundImage = `url('${item.img}')`;

    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = item.name;

    listItem.appendChild(link);
    listElement.appendChild(listItem);
    listItem.style.width = "calc(100% - 20px)";
  });
};

createSpecialItem(topics, document.getElementById("topics"));
createSpecialItem(events, document.getElementById("events-list"));
createSpecialItem(tisikis, document.getElementById("tisiki-list"));
createSpecialItem(masters, document.getElementById("master-list"));

const MAX_COMMENTS = 100; // 最大表示コメント数
const historyKey = "commentHistory"; // コメント履歴のローカルストレージキー

// ローカルストレージからコメント履歴を取得
let commentHistory = JSON.parse(localStorage.getItem(historyKey)) || [];

// コメント表示用の配列
let comments = JSON.parse(localStorage.getItem("comments")) || [];

// ランダムアイコンのURLリスト
const icons = [
  "本体2/images/randomicon/オフェンス.jpeg",
  "本体2/images/randomicon/ポストマン.jpeg",
  "本体2/images/randomicon/骨董商.jpeg",
  "本体2/images/randomicon/祭司.jpeg",
  "本体2/images/randomicon/傭兵.jpeg",
  "本体2/images/randomicon/応援団.jpeg",
  "本体2/images/randomicon/少女.jpeg",
  "本体2/images/randomicon/機械技師.jpeg",
  "本体2/images/randomicon/空軍.jpeg",
  "本体2/images/randomicon/調香師.jpeg",
  "本体2/images/randomicon/記者.jpeg",
];

// ページ読み込み時にコメントをレンダリング
window.addEventListener("load", function () {
  renderComments();
});

document
  .getElementById("comment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // ユーザーネームとコメント入力欄から値を取得
    const usernameInput = document.getElementById("username-input");
    const commentInput = document.getElementById("comment-input");
    const username = usernameInput.value.trim();
    const commentText = commentInput.value.trim();

    // 現在の日時を取得
    const timestamp = new Date().toLocaleString();

    // ユーザーネームとコメントが空でない場合にのみ処理を実行
    if (username !== "" && commentText !== "") {
      // ランダムなアイコンを選択
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];

      // コメントデータをオブジェクトとして作成
      const commentData = {
        username,
        commentText,
        timestamp,
        icon: randomIcon,
      };

      // **新しいコメントを表示用配列の先頭に追加**
      comments.unshift(commentData);
      localStorage.setItem("comments", JSON.stringify(comments));

      // 入力欄をクリア
      usernameInput.value = "";
      commentInput.value = "";

      // **新しいコメントを即座に表示**
      addCommentToDOM(commentData);
    }
  });

// コメントを直接DOMに追加する関数
function addCommentToDOM(commentData) {
  const commentsContainer = document.getElementById("comments");

  if (commentsContainer) {
    // コメント要素を作成
    const comment = document.createElement("div");
    comment.classList.add("comment");

    // アイコン要素を作成
    const icon = document.createElement("img");
    icon.src = commentData.icon;
    icon.alt = "User Icon";

    // コンテンツ要素を作成
    const content = document.createElement("div");
    content.classList.add("content");

    // ユーザーネーム要素
    const username = document.createElement("div");
    username.classList.add("username");
    username.textContent = commentData.username;

    // 日時要素
    const timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.textContent = commentData.timestamp;

    // メッセージ要素
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = commentData.commentText;

    // コンテンツに要素を追加
    content.appendChild(username);
    content.appendChild(timestamp);
    content.appendChild(message);

    // コメントにアイコンとコンテンツを追加
    comment.appendChild(icon);
    comment.appendChild(content);

    // **最新のコメントを上に追加**
    commentsContainer.prepend(comment);
  }
}

// コメント履歴から集計してランキングを表示する関数
function generateRanking() {
  // 例: コメント数をカウントしてランキングを作成
  const ranking = commentHistory.reduce((acc, comment) => {
    acc[comment.username] = (acc[comment.username] || 0) + 1;
    return acc;
  }, {});

  // ランキングを表示（例: コンソールに表示）
  console.log("ランキング:", ranking);
}

// ランキング生成（デモ用）
generateRanking();

console.log(survivorList); // リスト要素が取得できているか確認
console.log(hunterList); // リスト要素が取得できているか確認
document
  .getElementById("comment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("コメントが送信されました"); // イベントが発生しているか確認 // ...
  });

window.addEventListener("scroll", function () {
  const sidebar = document.querySelector(".sidebar");
  const separator = document.querySelector(".separator-line");
  /* 位置計算のコード... */
});

let lastScrollY = window.scrollY;
const scrollBar = document.getElementById("scroll-bar");

// スクロールイベントを処理する関数
function handleScroll() {
  // 一番上に到達した場合は横棒を非表示
  if (window.scrollY === 0) {
    scrollBar.style.display = "none";
    return;
  }

  // 画面幅が600px以下の場合、横棒を表示しないがスクロール方向の判定は続ける
  if (window.innerWidth <= 600) {
    scrollBar.style.display = "none";
  } else if (window.scrollY < lastScrollY) {
    // 上にスクロールしている場合は横棒を表示
    scrollBar.style.display = "block";
  } else {
    // 下にスクロールしている場合は横棒を非表示
    scrollBar.style.display = "none";
  }

  lastScrollY = window.scrollY;
}

// スクロールイベントのリスナーを追加
window.addEventListener("scroll", handleScroll);

// ウィンドウサイズが変更された時にも横棒を制御
window.addEventListener("resize", handleScroll);
