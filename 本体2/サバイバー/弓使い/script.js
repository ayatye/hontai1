// サバイバーとハンターのリスト
const survivors = [
  {
    name: "幸運児",
    url: "../../images/kyaragazou/sabaibagazou/幸運児.jpeg",
    link: "../../サバイバー/幸運児/幸運児.html",
  },
  {
    name: "医師",
    url: "../../images/kyaragazou/sabaibagazou/医師.jpeg",
    link: "../../サバイバー/医師/医師.html",
  },
  {
    name: "弁護士",
    url: "../../images/kyaragazou/sabaibagazou/弁護士.jpeg",
    link: "../../サバイバー/弁護士/弁護士.html",
  },
  {
    name: "空軍",
    url: "../../images/kyaragazou/sabaibagazou/空軍.jpeg",
    link: "../../サバイバー/空軍/空軍.html",
  },
  {
    name: "庭師",
    url: "../../images/kyaragazou/sabaibagazou/庭師.jpeg",
    link: "../../サバイバー/庭師/庭師.html",
  },
  {
    name: "泥棒",
    url: "../../images/kyaragazou/sabaibagazou/泥棒.jpeg",
    link: "../../サバイバー/泥棒/泥棒.html",
  },
  {
    name: "傭兵",
    url: "../../images/kyaragazou/sabaibagazou/傭兵.jpeg",
    link: "../../サバイバー/傭兵/傭兵.html",
  },
  {
    name: "調香師",
    url: "../../images/kyaragazou/sabaibagazou/調香師.jpeg",
    link: "../../サバイバー/調香師/調香師.html",
  },
  {
    name: "占い師",
    url: "../../images/kyaragazou/sabaibagazou/占い師.jpeg",
    link: "../../サバイバー/占い師/占い師.html",
  },
  {
    name: "マジシャン",
    url: "../../images/kyaragazou/sabaibagazou/マジシャン.jpeg",
    link: "../../サバイバー/マジシャン/マジシャン.html",
  },
  {
    name: "カウボーイ",
    url: "../../images/kyaragazou/sabaibagazou/カウボーイ.jpeg",
    link: "../../サバイバー/カウボーイ/カウボーイ.html",
  },
  {
    name: "冒険家",
    url: "../../images/kyaragazou/sabaibagazou/冒険家.jpeg",
    link: "../../サバイバー/冒険家/冒険家.html",
  },
  {
    name: "祭司",
    url: "../../images/kyaragazou/sabaibagazou/祭司.jpeg",
    link: "../../サバイバー/祭司/祭司.html",
  },
  {
    name: "機械技師",
    url: "../../images/kyaragazou/sabaibagazou/機械技師.jpeg",
    link: "../../サバイバー/機械技師/機械技師.html",
  },
  {
    name: "オフェンス",
    url: "../../images/kyaragazou/sabaibagazou/オフェンス.jpeg",
    link: "../../サバイバー/オフェンス/オフェンス.html",
  },
  {
    name: "心眼",
    url: "../../images/kyaragazou/sabaibagazou/心眼.jpeg",
    link: "../../サバイバー/心眼/心眼.html",
  },
  {
    name: "踊り子",
    url: "../../images/kyaragazou/sabaibagazou/踊り子.jpeg",
    link: "../../サバイバー/踊り子/踊り子.html",
  },
  {
    name: "納棺師",
    url: "../../images/kyaragazou/sabaibagazou/納棺師.jpeg",
    link: "../../サバイバー/納棺師/納棺師.html",
  },
  {
    name: "探鉱者",
    url: "../../images/kyaragazou/sabaibagazou/探鉱者.jpeg",
    link: "../../サバイバー/探鉱者/探鉱者.html",
  },
  {
    name: "呪術師",
    url: "../../images/kyaragazou/sabaibagazou/呪術師.jpeg",
    link: "../../サバイバー/呪術師/呪術師.html",
  },
  {
    name: "野人",
    url: "../../images/kyaragazou/sabaibagazou/野人.jpeg",
    link: "../../サバイバー/野人/野人.html",
  },
  {
    name: "曲芸師",
    url: "../../images/kyaragazou/sabaibagazou/曲芸師.jpeg",
    link: "../../サバイバー/曲芸師/曲芸師.html",
  },
  {
    name: "一等航海士",
    url: "../../images/kyaragazou/sabaibagazou/一等航海士.jpeg",
    link: "../../サバイバー/一等航海士/一等航海士.html",
  },
  {
    name: "バーメイド",
    url: "../../images/kyaragazou/sabaibagazou/バーメイド.jpeg",
    link: "../../サバイバー/バーメイド/バーメイド.html",
  },
  {
    name: "ポストマン",
    url: "../../images/kyaragazou/sabaibagazou/ポストマン.jpeg",
    link: "../../サバイバー/ポストマン/ポストマン.html",
  },
  {
    name: "墓守",
    url: "../../images/kyaragazou/sabaibagazou/墓守.jpeg",
    link: "../../サバイバー/墓守/墓守.html",
  },
  {
    name: "囚人",
    url: "../../images/kyaragazou/sabaibagazou/囚人.jpeg",
    link: "../../サバイバー/囚人/囚人.html",
  },
  {
    name: "昆虫学者",
    url: "../../images/kyaragazou/sabaibagazou/昆虫学者.jpeg",
    link: "../../サバイバー/昆虫学者/昆虫学者.html",
  },
  {
    name: "画家",
    url: "../../images/kyaragazou/sabaibagazou/画家.jpeg",
    link: "../../サバイバー/画家/画家.html",
  },
  {
    name: "バッツマン",
    url: "../../images/kyaragazou/sabaibagazou/バッツマン.jpeg",
    link: "../../サバイバー/バッツマン/バッツマン.html",
  },
  {
    name: "玩具職人",
    url: "../../images/kyaragazou/sabaibagazou/玩具職人.jpeg",
    link: "../../サバイバー/玩具職人/玩具職人.html",
  },
  {
    name: "患者",
    url: "../../images/kyaragazou/sabaibagazou/患者.jpeg",
    link: "../../サバイバー/患者/患者.html",
  },
  {
    name: "心理学者",
    url: "../../images/kyaragazou/sabaibagazou/心理学者.jpeg",
    link: "../../サバイバー/心理学者/心理学者.html",
  },
  {
    name: "小説家",
    url: "../../images/kyaragazou/sabaibagazou/小説家.jpeg",
    link: "../../サバイバー/小説家/小説家.html",
  },
  {
    name: "少女",
    url: "../../images/kyaragazou/sabaibagazou/少女.jpeg",
    link: "../../サバイバー/少女/少女.html",
  },
  {
    name: "泣きピエロ",
    url: "../../images/kyaragazou/sabaibagazou/泣きピエロ.jpeg",
    link: "../../サバイバー/幸運児/幸運児.html",
  },
  {
    name: "教授",
    url: "../../images/kyaragazou/sabaibagazou/教授.jpeg",
    link: "../../サバイバー/教授/教授.html",
  },
  {
    name: "骨董商",
    url: "../../images/kyaragazou/sabaibagazou/骨董商.jpeg",
    link: "../../サバイバー/骨董商/骨董商.html",
  },
  {
    name: "作曲家",
    url: "../../images/kyaragazou/sabaibagazou/作曲家.jpeg",
    link: "../../サバイバー/作曲家/作曲家.html",
  },
  {
    name: "記者",
    url: "../../images/kyaragazou/sabaibagazou/記者.jpeg",
    link: "../../サバイバー/記者/記者.html",
  },
  {
    name: "航空エンジニア",
    url: "../../images/kyaragazou/sabaibagazou/航空エンジニア.jpeg",
    link: "../../サバイバー/航空エンジニア/航空エンジニア.html",
  },
  {
    name: "応援団",
    url: "../../images/kyaragazou/sabaibagazou/応援団.jpeg",
    link: "../../サバイバー/応援団/応援団.html",
  },
  {
    name: "人形師",
    url: "../../images/kyaragazou/sabaibagazou/人形師.jpeg",
    link: "../../サバイバー/人形師/人形師.html",
  },
  {
    name: "火災調査員",
    url: "../../images/kyaragazou/sabaibagazou/火災調査員.jpeg",
    link: "../../サバイバー/火災調査員/火災調査員.html",
  },
  {
    name: "レディファウロ",
    url: "../../images/kyaragazou/sabaibagazou/レディファウロ.jpeg",
    link: "../../サバイバー/レディファウロ/レディファウロ.html",
  },
  {
    name: "騎士",
    url: "../../images/kyaragazou/sabaibagazou/騎士.jpeg",
    link: "../../サバイバー/騎士/騎士.html",
  },
  {
    name: "気象学者",
    url: "../../images/kyaragazou/sabaibagazou/気象学者.jpeg",
    link: "../../サバイバー/気象学者/気象学者.html",
  },
  {
    name: "弓使い",
    url: "../../images/kyaragazou/sabaibagazou/弓使い.jpeg",
    link: "../../サバイバー/弓使い/弓使い.html",
  },
];

const hunters = [
  {
    name: "復讐者",
    url: "../../images/kyaragazou/hanntagazou/復讐者.jpeg",
    link: "../../ハンター/復讐者/復讐者.html",
  },
  {
    name: "道化師",
    url: "../../images/kyaragazou/hanntagazou/道化師.jpeg",
    link: "../../ハンター/道化師/道化師.html",
  },
  {
    name: "断罪狩人",
    url: "../../images/kyaragazou/hanntagazou/断罪狩人.jpeg",
    link: "../../ハンター/断罪狩人/断罪狩人.html",
  },
  {
    name: "リッパー",
    url: "../../images/kyaragazou/hanntagazou/リッパー.jpeg",
    link: "../../ハンター/リッパー/リッパー.html",
  },
  {
    name: "結魂者",
    url: "../../images/kyaragazou/hanntagazou/結魂者.jpeg",
    link: "../../ハンター/結魂者/結魂者.html",
  },
  {
    name: "芸者",
    url: "../../images/kyaragazou/hanntagazou/芸者.jpeg",
    link: "../../ハンター/芸者/芸者.html",
  },
  {
    name: "白黒無常",
    url: "../../images/kyaragazou/hanntagazou/白黒無常.jpeg",
    link: "../../ハンター/白黒無常/白黒無常.html",
  },
  {
    name: "写真家",
    url: "../../images/kyaragazou/hanntagazou/写真家.jpeg",
    link: "../../ハンター/写真家/写真家.html",
  },
  {
    name: "狂眼",
    url: "../../images/kyaragazou/hanntagazou/狂眼.jpeg",
    link: "../../ハンター/狂眼/狂眼.html",
  },
  {
    name: "黄衣の王",
    url: "../../images/kyaragazou/hanntagazou/黄衣の王.jpeg",
    link: "../../ハンター/黄衣の王/黄衣の王.html",
  },
  {
    name: "夢の魔女",
    url: "../../images/kyaragazou/hanntagazou/夢の魔女.jpeg",
    link: "../../ハンター/夢の魔女/夢の魔女.html",
  },
  {
    name: "泣き虫",
    url: "../../images/kyaragazou/hanntagazou/泣き虫.jpeg",
    link: "../../ハンター/泣き虫/泣き虫.html",
  },
  {
    name: "魔トカゲ",
    url: "../../images/kyaragazou/hanntagazou/魔トカゲ.jpeg",
    link: "../../ハンター/魔トカゲ/魔トカゲ.html",
  },
  {
    name: "血の女王",
    url: "../../images/kyaragazou/hanntagazou/マリィ.jpeg",
    link: "../../ハンター/マリィ/マリィ.html",
  },
  {
    name: "ガードNo.26",
    url: "../../images/kyaragazou/hanntagazou/ガードNO.26.jpeg",
    link: "../../ハンター/ガードNO.26/ガードNO.26.html",
  },
  {
    name: "使徒",
    url: "../../images/kyaragazou/hanntagazou/使徒.jpeg",
    link: "../../ハンター/使徒/使徒.html",
  },
  {
    name: "ヴァイオリニスト",
    url: "../../images/kyaragazou/hanntagazou/ヴァイオリニスト.jpeg",
    link: "../../ハンター/ヴァイオリニスト/ヴァイオリニスト.html",
  },
  {
    name: "彫刻家",
    url: "../../images/kyaragazou/hanntagazou/彫刻師.jpeg",
    link: "../../ハンター/彫刻師/彫刻師.html",
  },
  {
    name: "アンデット",
    url: "../../images/kyaragazou/hanntagazou/アンデット.jpeg",
    link: "../../ハンター/アンデット/アンデット.html",
  },
  {
    name: "破輪",
    url: "../../images/kyaragazou/hanntagazou/破輪.jpeg",
    link: ".././ハンター/破輪/破輪.html",
  },
  {
    name: "漁師",
    url: "../../images/kyaragazou/hanntagazou/漁師.jpeg",
    link: "../../ハンター/漁師/漁師.html",
  },
  {
    name: "蝋人形師",
    url: "../../images/kyaragazou/hanntagazou/蝋人形師.jpeg",
    link: "../../ハンター/蝋人形師/蝋人形師.html",
  },
  {
    name: "悪夢",
    url: "../../images/kyaragazou/hanntagazou/悪夢.jpeg",
    link: "../../ハンター/悪夢/悪夢.html",
  },
  {
    name: "書記官",
    url: "../../images/kyaragazou/hanntagazou/書記官.jpeg",
    link: "../../ハンター/書記官/書記官.html",
  },
  {
    name: "隠者",
    url: "../../images/kyaragazou/hanntagazou/隠者.jpeg",
    link: "../../ハンター/隠者/隠者.html",
  },
  {
    name: "夜の番人",
    url: "../../images/kyaragazou/hanntagazou/夜の番人.jpeg",
    link: ".././/ハンター/夜の番人/夜の番人.html",
  },
  {
    name: "フールズ・ゴールド",
    url: "../../images/kyaragazou/hanntagazou/フールズゴールド.jpeg",
    link: "../../ハンター/フールズ・ゴールド/フールズ・ゴールド.html",
  },
  {
    name: "時空の影",
    url: "../../images/kyaragazou/hanntagazou/時空の影.jpeg",
    link: "../../ハンター/時空の影/時空の影.html",
  },
  {
    name: "足苗の羊",
    url: "../../images/kyaragazou/hanntagazou/足萎えの羊.jpeg",
    link: "../../ハンター/足萎えの羊/足萎えの羊.html",
  },
  {
    name: "フラバルー",
    url: "../../images/kyaragazou/hanntagazou/フラバルー.jpeg",
    link: "../../ハンター/フラバルー/フラバルー.html",
  },
];

// 仮のアイコン画像URL
const placeholderIcon = "https://via.placeholder.com/40";

// サバイバーリストをHTMLに追加
const survivorList = document.getElementById("survivor-list");
survivors.forEach((survivor) => {
  const li = document.createElement("li");

  // アイコン画像を作成
  const img = document.createElement("img");
  img.src = survivor.url;

  const a = document.createElement("a");
  a.href = survivor.link;

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
  a.href = hunter.link;

  // 矢印を作成
  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = ">";

  // 名前の部分もリンクでラップ
  const name = document.createElement("span");
  name.textContent = hunter.name;
  a.appendChild(name);

  li.appendChild(img);
  li.appendChild(a);
  li.appendChild(arrow);
  hunterList.appendChild(li);
});

const MAX_COMMENTS = 100; // 最大表示コメント数
const pageIdentifier = "yumitukai"; // このページに特有の識別子
const historyKey = `commentHistory_${pageIdentifier}`; // コメント履歴のローカルストレージキー
const commentsKey = `comments_${pageIdentifier}`; // コメント表示用のローカルストレージキー

// ローカルストレージからコメント履歴を取得
let commentHistory = JSON.parse(localStorage.getItem(historyKey)) || [];

// コメント表示用の配列（逆順で取得）
let comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
comments.reverse(); // **ロード時に最新のコメントを上にする**

const icons = [
  "../../images/randomicon/オフェンス.jpeg",
  "../../images/randomicon/ポストマン.jpeg",
  "../../images/randomicon/骨董商.jpeg",
  "../../images/randomicon/祭司.jpeg",
  "../../images/randomicon/傭兵.jpeg",
  "../../images/randomicon/応援団.jpeg",
  "../../images/randomicon/少女.jpeg",
  "../../images/randomicon/機械技師.jpeg",
  "../../images/randomicon/空軍.jpeg",
  "../../images/randomicon/調香師.jpeg",
  "../../images/randomicon/記者.jpeg",
];

// ページ読み込み時にコメントをレンダリング
window.addEventListener("load", function () {
  renderComments();
});

document
  .getElementById("comment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById("username-input");
    const commentInput = document.getElementById("comment-input");
    const username = usernameInput.value.trim();
    const commentText = commentInput.value.trim();
    const timestamp = new Date().toLocaleString();

    if (username !== "" && commentText !== "") {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];

      const commentData = {
        username,
        commentText,
        timestamp,
        icon: randomIcon,
      };

      // **新しいコメントを配列の先頭に追加**
      comments.unshift(commentData);
      localStorage.setItem(commentsKey, JSON.stringify(comments));

      // **コメント履歴にも追加**
      commentHistory.unshift(commentData);
      localStorage.setItem(historyKey, JSON.stringify(commentHistory));

      // **コメントが上限を超えた場合、古いコメントを削除**
      if (comments.length > MAX_COMMENTS) {
        comments.pop();
        localStorage.setItem(commentsKey, JSON.stringify(comments));
      }

      // 入力欄をクリア
      usernameInput.value = "";
      commentInput.value = "";

      // **最新のコメントを上に追加**
      addCommentToDOM(commentData);
    }
  });

// **コメントをDOMに追加する関数**
function addCommentToDOM(commentData) {
  const commentsContainer = document.getElementById("comments");

  if (commentsContainer) {
    const comment = document.createElement("div");
    comment.classList.add("comment");

    const icon = document.createElement("img");
    icon.src = commentData.icon;
    icon.alt = "User Icon";

    const content = document.createElement("div");
    content.classList.add("content");

    const username = document.createElement("div");
    username.classList.add("username");
    username.textContent = commentData.username;

    const timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.textContent = commentData.timestamp;

    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = commentData.commentText;

    content.appendChild(username);
    content.appendChild(timestamp);
    content.appendChild(message);
    comment.appendChild(icon);
    comment.appendChild(content);

    // **最新のコメントを上に追加**
    commentsContainer.prepend(comment);
  }
}

// **コメントを全てレンダリングする関数**
function renderComments() {
  const commentsContainer = document.getElementById("comments");

  if (commentsContainer) {
    commentsContainer.innerHTML = ""; // 一度クリア

    // **コメントを逆順にして表示**
    comments.forEach((commentData) => {
      addCommentToDOM(commentData);
    });
  }
}

// **ページ読み込み時にコメントを表示**
renderComments();

// コメント履歴から集計してランキングを表示する関数
function generateRanking() {
  const ranking = commentHistory.reduce((acc, comment) => {
    acc[comment.username] = (acc[comment.username] || 0) + 1;
    return acc;
  }, {});

  console.log("ランキング:", ranking);
}

// **ランキング生成（デモ用）**
generateRanking();

console.log("コメントリスト:", comments);

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

document.querySelector(".logo").addEventListener("click", function () {
  window.location.href = "../../hontai.html"; // hontai.html に遷移
});

document.addEventListener("DOMContentLoaded", function () {
  const updateDate = document.getElementById("update-date");
  const today = new Date();
  const formattedDate =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  updateDate.textContent = formattedDate;
});

let strengthChart = null;

const createChart = () => {
  const ctx = document.getElementById("strengthChart").getContext("2d");

  if (!strengthChart) {
    strengthChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["強さ", "弱さ"],
        datasets: [
          {
            data: [10, 0], // 例として8点と残りの2点
            backgroundColor: [
              "rgba(255, 111, 97, 0.7)", // 半透明な赤色
              "rgba(241, 241, 241, 0.7)", // 半透明な灰色
            ],
            hoverBackgroundColor: [
              "rgba(255, 138, 101, 0.9)", // ホバー時の濃い赤色
              "rgba(224, 224, 224, 0.9)", // ホバー時の濃い灰色
            ],
            borderColor: "#fff", // 境界線の色
            borderWidth: 2, // 境界線の幅
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: "75%", // 中央をくり抜くドーナツグラフ
        animation: {
          animateScale: true, // 拡大アニメーション
          animateRotate: true, // 回転アニメーション
          duration: 2000, // アニメーションの時間を調整
          easing: "easeOutBounce", // バウンドするようなアニメーション効果
        },
        plugins: {
          legend: {
            display: false, // ラベル非表示
          },
          tooltip: {
            enabled: true, // ツールチップを有効
          },
        },
        hover: {
          animationDuration: 1000, // ホバー時のアニメーションを長く
        },
        elements: {
          arc: {
            backgroundColor: function (context) {
              return context.dataIndex === 0
                ? "rgba(255, 111, 97, 0.8)"
                : "rgba(241, 241, 241, 0.8)";
            },
            borderWidth: 3,
          },
        },
      },
      plugins: [
        {
          id: "centerText",
          beforeDraw: function (chart) {
            const ctx = chart.ctx;
            const width = chart.width;
            const height = chart.height;
            ctx.restore();
            const fontSize = (height / 70).toFixed(2); // フォントサイズを大きく調整
            ctx.font = fontSize + "em 'Comic Sans MS', cursive";
            ctx.textBaseline = "middle";

            const text = "10"; // 表示する得点
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;

            ctx.fillStyle = "#333"; // テキストの色
            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      ],
    });
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        createChart(); // グラフがビューポートに入ったら作成
        observer.unobserve(entry.target); // グラフの作成後に監視を停止
      }
    });
  },
  { threshold: 0.1 }
); // グラフが10%表示されたらトリガー

document.addEventListener("DOMContentLoaded", () => {
  const chartElement = document.getElementById("strengthChart");
  observer.observe(chartElement); // グラフ要素を監視
});
