// サバイバーとハンターのリスト
const survivors = [
  {
    name: "幸運児",
    url: "/honntai/images/kyaragazou/sabaibagazou/kouunzi.jpeg",
    link: "/honntai/sabaiba/kouunzi/kouunzi.html",
  },
  {
    name: "医師",
    url: "/honntai/images/kyaragazou/sabaibagazou/isi.jpeg",
    link: "/honntai/sabaiba/isi/isi.html",
  },
  {
    name: "弁護士",
    url: "/honntai/images/kyaragazou/sabaibagazou/benngosi.jpeg",
    link: "/honntai/sabaiba/benngosi/benngosi.html",
  },
  {
    name: "空軍",
    url: "/honntai/images/kyaragazou/sabaibagazou/kuugunn.jpeg",
    link: "/honntai/sabaiba/kuugunn/kuugunn.html",
  },
  {
    name: "庭師",
    url: "/honntai/images/kyaragazou/sabaibagazou/niwasi.jpeg",
    link: "/honntai/sabaiba/niasi/niwasi.html",
  },
  {
    name: "泥棒",
    url: "/honntai/images/kyaragazou/sabaibagazou/dorobou.jpeg",
    link: "/honntai/sabaiba/dorobou/dorobou.html",
  },
  {
    name: "傭兵",
    url: "/honntai/images/kyaragazou/sabaibagazou/youhei.jpeg",
    link: "/honntai/sabaiba/youhei/youhei.html",
  },
  {
    name: "調香師",
    url: "/honntai/images/kyaragazou/sabaibagazou/tyoukousi.jpeg",
    link: "/honntai/sabaiba/tyoukousi/tyoukousi.html",
  },
  {
    name: "占い師",
    url: "/honntai/images/kyaragazou/sabaibagazou/uranaisi.jpeg",
    link: "/honntai/sabaiba/uranaisi/uranaisi.html",
  },
  {
    name: "マジシャン",
    url: "/honntai/images/kyaragazou/sabaibagazou/mazisyann.jpeg",
    link: "/honntai/sabaiba/mazisyann/mazisyann.html",
  },
  {
    name: "カウボーイ",
    url: "/honntai/images/kyaragazou/sabaibagazou/kauboi.jpeg",
    link: "/honntai/sabaiba/kauboi/kauboi.html",
  },
  {
    name: "冒険家",
    url: "/honntai/images/kyaragazou/sabaibagazou/boukennka.jpeg",
    link: "/honntai/sabaiba/boukennka/boukennka.html",
  },
  {
    name: "祭司",
    url: "/honntai/images/kyaragazou/sabaibagazou/saisi.jpeg",
    link: "/honntai/sabaiba/saisi/saisi.html",
  },
  {
    name: "機械技師",
    url: "/honntai/images/kyaragazou/sabaibagazou/kikaigisi.jpeg",
    link: "/honntai/sabaiba/kikaigisi/kikaigisi.html",
  },
  {
    name: "オフェンス",
    url: "/honntai/images/kyaragazou/sabaibagazou/ofensu.jpeg",
    link: "/honntai/sabaiba/ofennsu/ofensu.html",
  },
  {
    name: "心眼",
    url: "/honntai/images/kyaragazou/sabaibagazou/sinngann.jpeg",
    link: "/honntai/sabaiba/sinngann/sinngann.html",
  },
  {
    name: "踊り子",
    url: "/honntai/images/kyaragazou/sabaibagazou/odoriko.jpeg",
    link: "/honntai/sabaiba/odoriko/odoriko.html",
  },
  {
    name: "納棺師",
    url: "/honntai/images/kyaragazou/sabaibagazou/noukannsi.jpeg",
    link: "/honntai/sabaiba/noukannsi/noukannsi.html",
  },
  {
    name: "探鉱者",
    url: "/honntai/images/kyaragazou/sabaibagazou/tannkousya.jpeg",
    link: "/honntai/sabaiba/tannkousya/tannkkousya.html",
  },
  {
    name: "呪術師",
    url: "/honntai/images/kyaragazou/sabaibagazou/zyuzyutusi.jpeg",
    link: "/honntai/sabaiba/zyuzyutusi/zyuzyutusi.html",
  },
  {
    name: "野人",
    url: "/honntai/images/kyaragazou/sabaibagazou/yazinn.jpeg",
    link: "/honntai/sabaiba/yazinn/yazinn.html",
  },
  {
    name: "曲芸師",
    url: "/honntai/images/kyaragazou/sabaibagazou/kyokugeisi.jpeg",
    link: "/honntai/sabaiba/kyokugeisi/kyokugeisi.html",
  },
  {
    name: "一等航海士",
    url: "/honntai/images/kyaragazou/sabaibagazou/ittoukoukaisi.jpeg",
    link: "/honntai/sabaiba/ittoukoukaisi/ittoukoukaisi.html",
  },
  {
    name: "バーメイド",
    url: "/honntai/images/kyaragazou/sabaibagazou/bemeido.jpeg",
    link: "/honntai/sabaiba/bameido/bameido.html",
  },
  {
    name: "ポストマン",
    url: "/honntai/images/kyaragazou/sabaibagazou/posutomann.jpeg",
    link: "/honntai/sabaiba/posutomann/posutomann.html",
  },
  {
    name: "墓守",
    url: "/honntai/images/kyaragazou/sabaibagazou/hakamori.jpeg",
    link: "/honntai/sabaiba/hakamori/hakamori.html",
  },
  {
    name: "囚人",
    url: "/honntai/images/kyaragazou/sabaibagazou/syuuzinn.jpeg",
    link: "/honntai/sabaiba/syuuzinn/syuuzinn.html",
  },
  {
    name: "昆虫学者",
    url: "/honntai/images/kyaragazou/sabaibagazou/konntyuugakusya.jpeg",
    link: "/honntai/sabaiba/konntyuugakusya/konntyuugakusya.html",
  },
  {
    name: "画家",
    url: "/honntai/images/kyaragazou/sabaibagazou/gaka.jpeg",
    link: "/honntai/sabaiba/gaka/gaka.html",
  },
  {
    name: "バッツマン",
    url: "/honntai/images/kyaragazou/sabaibagazou/バッツマン.jpeg",
    link: "/honntai/sabaiba/バッツマン/バッツマン.html",
  },
  {
    name: "玩具職人",
    url: "/honntai/images/kyaragazou/sabaibagazou/玩具職人.jpeg",
    link: "/honntai/sabaiba/玩具職人/玩具職人.html",
  },
  {
    name: "患者",
    url: "/honntai/images/kyaragazou/sabaibagazou/患者.jpeg",
    link: "/honntai/sabaiba/患者/患者.html",
  },
  {
    name: "心理学者",
    url: "/honntai/images/kyaragazou/sabaibagazou/心理学者.jpeg",
    link: "/honntai/sabaiba/心理学者/心理学者.html",
  },
  {
    name: "小説家",
    url: "/honntai/images/kyaragazou/sabaibagazou/小説家.jpeg",
    link: "/honntai/sabaiba/小説家/小説家.html",
  },
  {
    name: "少女",
    url: "/honntai/images/kyaragazou/sabaibagazou/少女.jpeg",
    link: "/honntai/sabaiba/少女/少女.html",
  },
  {
    name: "泣きピエロ",
    url: "/honntai/images/kyaragazou/sabaibagazou/泣きピエロ.jpeg",
    link: "/honntai/sabaiba/泣きピエロ/泣きピエロ.html",
  },
  {
    name: "教授",
    url: "/honntai/images/kyaragazou/sabaibagazou/教授.jpeg",
    link: "/honntai/sabaiba/教授/教授.html",
  },
  {
    name: "骨董商",
    url: "/honntai/images/kyaragazou/sabaibagazou/骨董商.jpeg",
    link: "/honntai/sabaiba/骨董商/骨董商.html",
  },
  {
    name: "作曲家",
    url: "/honntai/images/kyaragazou/sabaibagazou/作曲家.jpeg",
    link: "/honntai/sabaiba/作曲家/作曲家.html",
  },
  {
    name: "記者",
    url: "/honntai/images/kyaragazou/sabaibagazou/記者.jpeg",
    link: "/honntai/sabaiba/記者/記者.html",
  },
  {
    name: "航空エンジニア",
    url: "/honntai/images/kyaragazou/sabaibagazou/航空エンジニア.jpeg",
    link: "/honntai/sabaiba/航空エンジニア/航空エンジニア.html",
  },
  {
    name: "応援団",
    url: "/honntai/images/kyaragazou/sabaibagazou/応援団.jpeg",
    link: "/honntai/sabaiba/応援団/応援団.html",
  },
  {
    name: "人形師",
    url: "/honntai/images/kyaragazou/sabaibagazou/人形師.jpeg",
    link: "/honntai/sabaiba/人形師/人形師.html",
  },
  {
    name: "火災調査員",
    url: "/honntai/images/kyaragazou/sabaibagazou/火災調査員.jpeg",
    link: "/honntai/sabaiba/火災調査員/火災調査員.html",
  },
  {
    name: "レディファウロ",
    url: "/honntai/images/kyaragazou/sabaibagazou/レディファウロ.jpeg",
    link: "/honntai/sabaiba/レディファウロ/レディファウロ.html",
  },
  {
    name: "騎士",
    url: "/honntai/images/kyaragazou/sabaibagazou/騎士.jpeg",
    link: "/honntai/sabaiba/騎士/騎士.html",
  },
  {
    name: "気象学者",
    url: "/honntai/images/kyaragazou/sabaibagazou/気象学者.jpeg",
    link: "/honntai/sabaiba/気象学者/気象学者.html",
  },
];

const hunters = [
  {
    name: "復讐者",
    url: "本体2/images/kyaragazou/hanntagazou/復讐者.jpeg",
    link: "本体2/ハンター/復讐者/復讐者.html",
  },
  {
    name: "道化師",
    url: "本体2/images/kyaragazou/hanntagazou/道化師.jpeg",
    link: "本体2/ハンター/道化師/道化師.html",
  },
  {
    name: "断罪狩人",
    url: "本体2/images/kyaragazou/hanntagazou/断罪狩人.jpeg",
    link: "本体2/ハンター/断罪狩人/断罪狩人.html",
  },
  {
    name: "リッパー",
    url: "本体2/images/kyaragazou/hanntagazou/リッパー.jpeg",
    link: "本体2/ハンター/リッパー/リッパー.html",
  },
  {
    name: "結魂者",
    url: "本体2/images/kyaragazou/hanntagazou/結魂者.jpeg",
    link: "本体2/ハンター/結魂者/結魂者.html",
  },
  {
    name: "芸者",
    url: "本体2/images/kyaragazou/hanntagazou/芸者.jpeg",
    link: "本体2/ハンター/芸者/芸者.html",
  },
  {
    name: "白黒無常",
    url: "本体2/images/kyaragazou/hanntagazou/白黒無常.jpeg",
    link: "本体2/ハンター/白黒無常/白黒無常.html",
  },
  {
    name: "写真家",
    url: "本体2/images/kyaragazou/hanntagazou/写真家.jpeg",
    link: "本体2/ハンター/写真家/写真家.html",
  },
  {
    name: "狂眼",
    url: "本体2/images/kyaragazou/hanntagazou/狂眼.jpeg",
    link: "本体2/ハンター/狂眼/狂眼.html",
  },
  {
    name: "黄衣の王",
    url: "本体2/images/kyaragazou/hanntagazou/黄衣の王.jpeg",
    link: "本体2/ハンター/黄衣の王/黄衣の王.html",
  },
  {
    name: "夢の魔女",
    url: "本体2/images/kyaragazou/hanntagazou/夢の魔女.jpeg",
    link: "本体2/ハンター/夢の魔女/夢の魔女.html",
  },
  {
    name: "泣き虫",
    url: "本体2/images/kyaragazou/hanntagazou/泣き虫.jpeg",
    link: "本体2/ハンター/泣き虫/泣き虫.html",
  },
  {
    name: "魔トカゲ",
    url: "本体2/images/kyaragazou/hanntagazou/魔トカゲ.jpeg",
    link: "本体2/ハンター/魔トカゲ/魔トカゲ.html",
  },
  {
    name: "血の女王",
    url: "本体2/images/kyaragazou/hanntagazou/マリィ.jpeg",
    link: "本体2/ハンター/マリィ/マリィ.html",
  },
  {
    name: "ガードNo.26",
    url: "本体2/images/kyaragazou/hanntagazou/ガードNO.26.jpeg",
    link: "本体2/ハンター/ガードNO.26/ガードNO.26.html",
  },
  {
    name: "使徒",
    url: "本体2/images/kyaragazou/hanntagazou/使徒.jpeg",
    link: "本体2/ハンター/使徒/使徒.html",
  },
  {
    name: "ヴァイオリニスト",
    url: "本体2/images/kyaragazou/hanntagazou/ヴァイオリニスト.jpeg",
    link: "本体2/ハンター/ヴァイオリニスト/ヴァイオリニスト.html",
  },
  {
    name: "彫刻家",
    url: "本体2/images/kyaragazou/hanntagazou/彫刻師.jpeg",
    link: "本体2/ハンター/彫刻師/彫刻師.html",
  },
  {
    name: "アンデッド",
    url: "本体2/images/kyaragazou/hanntagazou/アンデット.jpeg",
    link: "本体2/ハンター/アンデット/アンデット.html",
  },
  {
    name: "破輪",
    url: "本体2/images/kyaragazou/hanntagazou/破輪.jpeg",
    link: "本体2/ハンター/破輪/破輪.html",
  },
  {
    name: "漁師",
    url: "本体2/images/kyaragazou/hanntagazou/漁師.jpeg",
    link: "本体2/ハンター/漁師/漁師.html",
  },
  {
    name: "蝋人形師",
    url: "本体2/images/kyaragazou/hanntagazou/蝋人形師.jpeg",
    link: "本体2/ハンター/蝋人形師/蝋人形師.html",
  },
  {
    name: "悪夢",
    url: "本体2/images/kyaragazou/hanntagazou/悪夢.jpeg",
    link: "本体2/ハンター/悪夢/悪夢.html",
  },
  {
    name: "書記官",
    url: "本体2/images/kyaragazou/hanntagazou/書記官.jpeg",
    link: "本体2/ハンター/書記官/書記官.html",
  },
  {
    name: "隠者",
    url: "本体2/images/kyaragazou/hanntagazou/隠者.jpeg",
    link: "本体2/ハンター/隠者/隠者.html",
  },
  {
    name: "夜の番人",
    url: "本体2/images/kyaragazou/hanntagazou/夜の番人.jpeg",
    link: "本体2/ハンター/夜の番人/夜の番人.html",
  },
  {
    name: "フールズ・ゴールド",
    url: "本体2/images/kyaragazou/hanntagazou/フールズゴールド.jpeg",
    link: "本体2/ハンター/フールズ・ゴールド/フールズ・ゴールド.html",
  },
  {
    name: "時空の影",
    url: "本体2/images/kyaragazou/hanntagazou/時空の影.jpeg",
    link: "本体2/ハンター/時空の影/時空の影.html",
  },
  {
    name: "足萎えの羊",
    url: "本体2/images/kyaragazou/hanntagazou/足萎えの羊.jpeg",
    link: "本体2/ハンター/足萎えの羊/足萎えの羊.html",
  },
  {
    name: "フラバルー",
    url: "本体2/images/kyaragazou/hanntagazou/フラバルー.jpeg",
    link: "本体2/ハンター/フラバルー/フラバルー.html",
  },
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

// おすすめトピックとイベント情報のデータ
const topics = [
  {
    name: "激アツサバイバー",
    link: "/本体2/gekisaba/gekisaba.html",
    img: "/本体2/images/激アツ.jpeg",
  },
  {
    name: "激アツハンター",
    link: "/本体2/gekiatuhannta/gekiatuhannta.html",
    img: "/本体2/images/激アツ.jpeg",
  },
  {
    name: "次回のコラボ予想",
    link: "/本体2/yosou/コラボ予想.html",
    img: "/images/deals.jpg",
  },
  {
    name: "キャラクター別プロが使う人格",
    link: "/本体2/purozinnkaku/purozinnkaku.html",
    img: "/本体2/images/zinnkaku.jpeg",
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
    link: "本体2/sigati/sigati.html",
    img: "images/event2.jpg",
  },
  { name: "戦闘マップの活用方法", link: "#event3", img: "images/event3.jpg" },
  {
    name: "第五人格知っておきたい用語集",
    link: "本体2/yougo/yougo.html",
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
    link: "/本体2/purozinnkaku/purozinnkaku.html",
    img: "/本体2/images/zinnkaku.jpeg",
  },
  {
    name: "サバイバーキャラ別コンボ",
    link: "#master3",
    img: "images/master3.jpg",
  },
];

const createSpecialItem = (data, listElement) => {
  data.forEach((item) => {
    const listItem = document.createElement("li");

    const link = document.createElement("a");
    link.href = item.link;
    link.classList.add("special-item"); // 背景スタイルはaタグに適用
    link.style.backgroundImage = `url('${item.img}')`;
    link.style.color = "white"; // テキストが見えるように

    const text = document.createElement("span");
    text.textContent = item.name;
    text.style.backgroundColor = "rgba(0,0,0,0.5)";
    text.style.padding = "10px";

    link.appendChild(text);
    listItem.appendChild(link);
    listElement.appendChild(listItem);
  });
};

createSpecialItem(topics, document.getElementById("topics"));
createSpecialItem(events, document.getElementById("events-list"));
createSpecialItem(tisikis, document.getElementById("tisiki-list"));
createSpecialItem(masters, document.getElementById("master-list"));

const MAX_COMMENTS = 100; // 最大表示コメント数
const pageIdentifier = "index"; // このページに特有の識別子
const historyKey = `commentHistory_${pageIdentifier}`; // コメント履歴のローカルストレージキー
const commentsKey = `comments_${pageIdentifier}`; // コメント表示用のローカルストレージキー

// ローカルストレージからコメント履歴を取得
let commentHistory = JSON.parse(localStorage.getItem(historyKey)) || [];

// コメント表示用の配列（逆順で取得）
let comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
comments.reverse(); // **ロード時に最新のコメントを上にする**

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
