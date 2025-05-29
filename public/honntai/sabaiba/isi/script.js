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
            data: [4, 6], // 例として8点と残りの2点
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

            const text = "4"; // 表示する得点
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

// NGワードリスト
const bannedWords = [
  // 一般的な暴言・侮辱
  "ばか",
  "アホ",
  "くそ",
  "しね",
  "死ね",
  "うざい",
  "キモい",
  "キモ",
  "ボケ",
  "カス",
  "消えろ",
  "ブス",
  "デブ",
  "ガリ",
  "まぬけ",
  "能無し",
  "低脳",
  "ハゲ",
  "クズ",
  "ババア",
  "ジジイ",
  "ガキ",

  // 性的な内容
  "エロ",
  "セックス",
  "ちんこ",
  "まんこ",
  "やりたい",
  "ハメ",
  "レイプ",
  "変態",
  "ヌード",
  "裸",
  "自慰",
  "フェラ",
  "オナニー",
  "勃起",
  "射精",
  "乳首",
  "パイズリ",
  "挿入",
  "中出し",
  "処女",

  // 差別・ヘイト
  "障害者",
  "池沼",
  "キチガイ",
  "ホモ",
  "レズ",
  "チョン",
  "在日",
  "部落",
  "黒人",
  "差別",

  // 英語の卑語
  "fuck",
  "shit",
  "bitch",
  "asshole",
  "bastard",
  "nigger",
  "slut",
  "whore",
  "dick",
  "pussy",
  "faggot",
  "cunt",
  "rape",
  "nude",
  "kill",
  "die",
  "suck",
  "stupid",
  "retard",

  // 荒らしによく使われる絵文字など
  "💩",
  "👎",
  "🖕",

  // 政治・宗教・国家関連（炎上防止）
  "右翼",
  "左翼",
  "ネトウヨ",
  "パヨク",
  "保守",
  "革新",
  "政治",
  "選挙",
  "政党",
  "自民",
  "共産",
  "民主",
  "習近平",
  "プーチン",
  "ゼレンスキー",
  "安倍",
  "岸田",
  "天皇",
  "皇室",
  "北朝鮮",
  "中国",
  "韓国",
  "ロシア",
  "戦争",
  "大日本帝国",
  "大東亜",
  "植民地",
  "核兵器",
  "原爆",
  "南京",
  "慰安婦",
  "竹島",
  "尖閣",

  // 英語ベースの政治・宗教・差別ワード
  "allah",
  "jihad",
  "zion",
  "jew",
  "muslim",
  "christian",
  "satan",
  "cult",
  "bible",
  "terrorist",
  "communism",
  "capitalism",
  "leftist",
  "rightist",
  "democrat",
  "republican",
  "trump",
  "biden",
  "putin",
  "xi jinping",
  "war",
  "nazi",
  "hitler",
  "holocaust",
  "genocide",
  "propaganda",
];

// NGワードを検出（伏せ字など対応）
function containsBannedWord(text) {
  const normalized = text.toLowerCase().replace(/\s|\*/g, ""); // 空白や「*」除去
  return bannedWords.some((word) => normalized.includes(word));
}

// 投稿制限用の変数
let lastPostTime = 0;
let lastCommentContent = "";
let postTimestamps = [];

document
  .getElementById("comment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username-input").value.trim();
    const comment = document.getElementById("comment-input").value.trim();
    const now = Date.now();

    // 入力チェック
    if (!username || !comment) {
      alert("ユーザーネームとコメントを入力してください。");
      return;
    }

    // 空白のみチェック
    if (comment.replace(/\s/g, "").length === 0) {
      alert("空白のみのコメントは投稿できません。");
      return;
    }

    // 改行制限
    if (comment.split("\n").length > 10) {
      alert("改行が多すぎます。10行以内で投稿してください。");
      return;
    }

    // NGワード検出（ユーザーネームも含む）
    if (containsBannedWord(comment) || containsBannedWord(username)) {
      alert("不適切な内容が含まれています。修正してください。");
      return;
    }

    // 文字数制限
    if (comment.length > 300) {
      alert("コメントは300文字以内で入力してください。");
      return;
    }

    // 同一コメント防止
    if (comment === lastCommentContent) {
      alert("同じコメントを連続して投稿することはできません。");
      return;
    }

    // 30秒以内の連投防止
    if (now - lastPostTime < 30000) {
      alert("連続投稿は30秒空けてください。");
      return;
    }

    // 1分間に3件以上の投稿を制限
    postTimestamps = postTimestamps.filter((ts) => now - ts < 60000);
    if (postTimestamps.length >= 3) {
      alert("短時間に投稿しすぎています。しばらく待ってください。");
      return;
    }

    // 通過した場合の処理
    lastPostTime = now;
    lastCommentContent = comment;
    postTimestamps.push(now);

    await addDoc(commentsRef, {
      username: username,
      comment: comment,
      timestamp: serverTimestamp(),
    });

    // 入力欄クリア＆再読み込み
    document.getElementById("username-input").value = "";
    document.getElementById("comment-input").value = "";
    loadComments();
  });
