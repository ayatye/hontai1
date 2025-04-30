const survivors = [
  {
    name: "幸運児",
    url: "../../images/kyaragazou/sabaibagazou/kouunzi.jpeg",
    link: "../../sabaiba/kouunzi/kouunzi.html",
  },
  {
    name: "医師",
    url: "../../images/kyaragazou/sabaibagazou/isi.jpeg",
    link: "../../sabaiba/isi/isi.html",
  },
  {
    name: "弁護士",
    url: "../../images/kyaragazou/sabaibagazou/benngosi.jpeg",
    link: "../../sabaiba/benngosi/benngosi.html",
  },
  {
    name: "空軍",
    url: "../../images/kyaragazou/sabaibagazou/kuugunn.jpeg",
    link: "../../sabaiba/kuugunn/kuugunn.html",
  },
  {
    name: "庭師",
    url: "../../images/kyaragazou/sabaibagazou/niwasi.jpeg",
    link: "../../sabaiba/niwasi/niwasi.html",
  },
  {
    name: "泥棒",
    url: "../../images/kyaragazou/sabaibagazou/dorobou.jpeg",
    link: "../../sabaiba/dorobou/dorobou.html",
  },
  {
    name: "傭兵",
    url: "../../images/kyaragazou/sabaibagazou/youhei.jpeg",
    link: "../../sabaiba/youhei/youhei.html",
  },
  {
    name: "調香師",
    url: "../../images/kyaragazou/sabaibagazou/tyoukousi.jpeg",
    link: "../../sabaiba/tyoukousi/tyoukousi.html",
  },
  {
    name: "占い師",
    url: "../../images/kyaragazou/sabaibagazou/uranaisi.jpeg",
    link: "../../sabaiba/uranaisi/uranaisi.html",
  },
  {
    name: "マジシャン",
    url: "../../images/kyaragazou/sabaibagazou/mazisyann.jpeg",
    link: "../../sabaiba/mazisyann/mazisyann.html",
  },
  {
    name: "カウボーイ",
    url: "../../images/kyaragazou/sabaibagazou/kauboi.jpeg",
    link: "../../sabaiba/kauboi/kauboi.html",
  },
  {
    name: "冒険家",
    url: "../../images/kyaragazou/sabaibagazou/boukennka.jpeg",
    link: "../../sabaiba/boukennka/boukennka.html",
  },
  {
    name: "祭司",
    url: "../../images/kyaragazou/sabaibagazou/saisi.jpeg",
    link: "../../sabaiba/saisi/saisi.html",
  },
  {
    name: "機械技師",
    url: "../../images/kyaragazou/sabaibagazou/kikaigisi.jpeg",
    link: "../../sabaiba/kikaigisi/kikaigisi.html",
  },
  {
    name: "オフェンス",
    url: "../../images/kyaragazou/sabaibagazou/ofensu.jpeg",
    link: "../../sabaiba/ofensu/ofensu.html",
  },
  {
    name: "心眼",
    url: "../../images/kyaragazou/sabaibagazou/sinngann.jpeg",
    link: "../../sabaiba/sinngann/sinngann.html",
  },
  {
    name: "踊り子",
    url: "../../images/kyaragazou/sabaibagazou/odoriko.jpeg",
    link: "../../sabaiba/odoriko/odoriko.html",
  },
  {
    name: "納棺師",
    url: "../../images/kyaragazou/sabaibagazou/noukannsi.jpeg",
    link: "../../sabaiba/noukannsi/noukannsi.html",
  },
  {
    name: "探鉱者",
    url: "../../images/kyaragazou/sabaibagazou/tannkousya.jpeg",
    link: "../../sabaiba/tannkousya/tannkousya.html",
  },
  {
    name: "呪術師",
    url: "../../images/kyaragazou/sabaibagazou/zyuzyutusi.jpeg",
    link: "../../sabaiba/zyuzyutusi/zyuzyutusi.html",
  },
  {
    name: "野人",
    url: "../../images/kyaragazou/sabaibagazou/yazinn.jpeg",
    link: "../../sabaiba/yazinn/yazinn.html",
  },
  {
    name: "曲芸師",
    url: "../../images/kyaragazou/sabaibagazou/kyokugeisi.jpeg",
    link: "../../sabaiba/kyokugeisi/kyokugeisi.html",
  },
  {
    name: "一等航海士",
    url: "../../images/kyaragazou/sabaibagazou/ittoukoukaisi.jpeg",
    link: "../../sabaiba/ittoukoukaisi/ittoukoukaisi.html",
  },
  {
    name: "バーメイド",
    url: "../../images/kyaragazou/sabaibagazou/bameido.jpeg",
    link: "../../sabaiba/bameido/bameido.html",
  },
  {
    name: "ポストマン",
    url: "../../images/kyaragazou/sabaibagazou/posutomann.jpeg",
    link: "../../sabaiba/posutomann/posutomann.html",
  },
  {
    name: "墓守",
    url: "../../images/kyaragazou/sabaibagazou/hakamori.jpeg",
    link: "../../sabaiba/hakamori/hakamori.html",
  },
  {
    name: "囚人",
    url: "../../images/kyaragazou/sabaibagazou/syuuzinn.jpeg",
    link: "../../sabaiba/syuuzinn/syuuzinn.html",
  },
  {
    name: "昆虫学者",
    url: "../../images/kyaragazou/sabaibagazou/konntyuugakusya.jpeg",
    link: "../../sabaiba/konntyuugakusya/konntyuugakusya.html",
  },
  {
    name: "画家",
    url: "../../images/kyaragazou/sabaibagazou/gaka.jpeg",
    link: "../../sabaiba/gaka/gaka.html",
  },
  {
    name: "バッツマン",
    url: "../../images/kyaragazou/sabaibagazou/battumann.jpeg",
    link: "../../sabaiba/battumann/battumann.html",
  },
  {
    name: "玩具職人",
    url: "../../images/kyaragazou/sabaibagazou/ganngusyokuninn.jpeg",
    link: "../../sabaiba/ganngusyokuninn/ganngusyokuninn.html",
  },
  {
    name: "患者",
    url: "../../images/kyaragazou/sabaibagazou/kannzya.jpeg",
    link: "../../sabaiba/kannzya/kannzya.html",
  },
  {
    name: "心理学者",
    url: "../../images/kyaragazou/sabaibagazou/sinnrigakusya.jpeg",
    link: "../../sabaiba/sinnrigakusya/sinnrigakusya.html",
  },
  {
    name: "小説家",
    url: "../../images/kyaragazou/sabaibagazou/syousetuka.jpeg",
    link: "../../sabaiba/syousetuka/syousetuka.html",
  },
  {
    name: "少女",
    url: "../../images/kyaragazou/sabaibagazou/syouzyo.jpeg",
    link: "../../sabaiba/syouzyo/syouzyo.html",
  },
  {
    name: "泣きピエロ",
    url: "../../images/kyaragazou/sabaibagazou/nakipiero.jpeg",
    link: "../../sabaiba/nakipiero/nakipiero.html",
  },
  {
    name: "教授",
    url: "../../images/kyaragazou/sabaibagazou/kyouzyu.jpeg",
    link: "../../sabaiba/kyouzyu/kyouzyu.html",
  },
  {
    name: "骨董商",
    url: "../../images/kyaragazou/sabaibagazou/kottousyou.jpeg",
    link: "../../sabaiba/kottousyou/kottousyou.html",
  },
  {
    name: "作曲家",
    url: "../../images/kyaragazou/sabaibagazou/sakkyokuka.jpeg",
    link: "../../sabaiba/sakkyokuka/sakkyokuka.html",
  },
  {
    name: "記者",
    url: "../../images/kyaragazou/sabaibagazou/kisya.jpeg",
    link: "../../sabaiba/kisya/kisya.html",
  },
  {
    name: "航空エンジニア",
    url: "../../images/kyaragazou/sabaibagazou/koukuuennzinia.jpeg",
    link: "../../sabaiba/koukuuennzinia/koukuuennzinia.html",
  },
  {
    name: "応援団",
    url: "../../images/kyaragazou/sabaibagazou/ouenndann.jpeg",
    link: "../../sabaiba/ouenndann/ouenndann.html",
  },
  {
    name: "人形師",
    url: "../../images/kyaragazou/sabaibagazou/ningyousi.jpeg",
    link: "../../sabaiba/ningyousi/ningyousi.html",
  },
  {
    name: "火災調査員",
    url: "../../images/kyaragazou/sabaibagazou/kasaityousainn.jpeg",
    link: "../../sabaiba/kasaityousainn/kasaityousainn.html",
  },
  {
    name: "レディファウロ",
    url: "../../images/kyaragazou/sabaibagazou/redhifauro.jpeg",
    link: "../../sabaiba/redhifauro/redhifauro.html",
  },
  {
    name: "騎士",
    url: "../../images/kyaragazou/sabaibagazou/kisi.jpeg",
    link: "../../sabaiba/kisi/kisi.html",
  },
  {
    name: "気象学者",
    url: "../../images/kyaragazou/sabaibagazou/kisyougakusya.jpeg",
    link: "../../sabaiba/kisyougakusya/kisyougakusya.html",
  },
  {
    name: "弓使い",
    url: "../../images/kyaragazou/sabaibagazou/yumitukai.jpeg",
    link: "../../sabaiba/yumitukai/yumitukai.html",
  },
];

const hunters = [
  {
    name: "復讐者",
    url: "../../images/kyaragazou/hanntagazou/hukusyuusya.jpeg",
    link: "../../hanta/hukusyuusya/hukusyuusya.html",
  },
  {
    name: "道化師",
    url: "../../images/kyaragazou/hanntagazou/doukesi.jpeg",
    link: "../../hanta/doukesi/doukesi.html",
  },
  {
    name: "断罪狩人",
    url: "../../images/kyaragazou/hanntagazou/dannzaikariudo.jpeg",
    link: "../../hanta/dannzaikariudo/dannzaikariudo.html",
  },
  {
    name: "リッパー",
    url: "../../images/kyaragazou/hanntagazou/rippa.jpeg",
    link: "../../hanta/rippa/rippa.html",
  },
  {
    name: "結魂者",
    url: "../../images/kyaragazou/hanntagazou/kekkonnsya.jpeg",
    link: "../../hanta/kekkonnsya/kekkonnsya.html",
  },
  {
    name: "芸者",
    url: "../../images/kyaragazou/hanntagazou/geisya.jpeg",
    link: "../../hanta/geisya/geisya.html",
  },
  {
    name: "白黒無常",
    url: "../../images/kyaragazou/hanntagazou/sirokuromuzyou.jpeg",
    link: "../../hanta/sirokuromuzyou/sirokuromuzyou.html",
  },
  {
    name: "写真家",
    url: "../../images/kyaragazou/hanntagazou/syasinnka.jpeg",
    link: "../../hanta/syasinnka/syasinnka.html",
  },
  {
    name: "狂眼",
    url: "../../images/kyaragazou/hanntagazou/kyougenn.jpeg",
    link: "../../hanta/kyougenn/kyougenn.html",
  },
  {
    name: "黄衣の王",
    url: "../../images/kyaragazou/hanntagazou/ika.jpeg",
    link: "../../hanta/ika/ika.html",
  },
  {
    name: "夢の魔女",
    url: "../../images/kyaragazou/hanntagazou/yumenomazyo.jpeg",
    link: "../../hanta/yumenomazyo/yumenomazyo.html",
  },
  {
    name: "泣き虫",
    url: "../../images/kyaragazou/hanntagazou/nakimusi.jpeg",
    link: "../../hanta/nakimusi/nakimusi.html",
  },
  {
    name: "魔トカゲ",
    url: "../../images/kyaragazou/hanntagazou/matokage.jpeg",
    link: "../../hanta/matokage/matokage.html",
  },
  {
    name: "血の女王",
    url: "../../images/kyaragazou/hanntagazou/marhi.jpeg",
    link: "../../hanta/marhi/marhi.html",
  },
  {
    name: "ガードNo.26",
    url: "../../images/kyaragazou/hanntagazou/bonnbonn.jpeg",
    link: "../../hanta/bonnbonn/bonnbonn.html",
  },
  {
    name: "使徒",
    url: "../../images/kyaragazou/hanntagazou/sito.jpeg",
    link: "../../hanta/sito/sito.html",
  },
  {
    name: "ヴァイオリニスト",
    url: "../../images/kyaragazou/hanntagazou/vaiorinisuto.jpeg",
    link: "../../hanta/vaiorinisuto/vaiorinisuto.html",
  },
  {
    name: "彫刻家",
    url: "../../images/kyaragazou/hanntagazou/tyoukokusi.jpeg",
    link: "../../hanta/tyoukokusi/tyoukokusi.html",
  },
  {
    name: "アンデッド",
    url: "../../images/kyaragazou/hanntagazou/anndetto.jpeg",
    link: "../../hanta/anndetto/anndetto.html",
  },
  {
    name: "破輪",
    url: "../../images/kyaragazou/hanntagazou/harinn.jpeg",
    link: "../../hanta/harinn/harinn.html",
  },
  {
    name: "漁師",
    url: "../../images/kyaragazou/hanntagazou/ryousi.jpeg",
    link: "../../hanta/ryousi/ryousi.html",
  },
  {
    name: "蝋人形師",
    url: "../../images/kyaragazou/hanntagazou/rouninngyousi.jpeg",
    link: "../../hanta/rouninngyousi/rouninngyousi.html",
  },
  {
    name: "悪夢",
    url: "../../images/kyaragazou/hanntagazou/akumu.jpeg",
    link: "../../hanta/akumu/akumu.html",
  },
  {
    name: "書記官",
    url: "../../images/kyaragazou/hanntagazou/syokikann.jpeg",
    link: "../../hanta/syokikann/syokikann.html",
  },
  {
    name: "隠者",
    url: "../../images/kyaragazou/hanntagazou/innzya.jpeg",
    link: "../../hanta/innzya/innzya.html",
  },
  {
    name: "夜の番人",
    url: "../../images/kyaragazou/hanntagazou/yorunobannninn.jpeg",
    link: "../../hanta/yorunobannninn/yorunobannninn.html",
  },
  {
    name: "フールズ・ゴールド",
    url: "../../images/kyaragazou/hanntagazou/hurugo.jpeg",
    link: "../../hanta/hurugo/hurugo.html",
  },
  {
    name: "時空の影",
    url: "../../images/kyaragazou/hanntagazou/zikuunokage.jpeg",
    link: "../../hanta/zikuunokage/zikuunokage.html",
  },
  {
    name: "足萎えの羊",
    url: "../../images/kyaragazou/hanntagazou/asinaenohituzi.jpeg",
    link: "../../hanta/asinaenohituzi/asinaenohituzi.html",
  },
  {
    name: "フラバルー",
    url: "../../images/kyaragazou/hanntagazou/hurabaru.jpeg",
    link: "../../hanta/hurabaru/hurabaru.html",
  },
  {
    name: "雑貨商",
    url: "../../images/kyaragazou/hanntagazou/zakkasyou.jpeg",
    link: "../../hanta/zakkasyou/zakkasyou.html",
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
const pageIdentifier = "yorunobannninn"; // このページに特有の識別子
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
            data: [8, 2], // 例として8点と残りの2点
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

            const text = "8"; // 表示する得点
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
