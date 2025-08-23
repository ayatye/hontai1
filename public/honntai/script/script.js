// おすすめトピックとイベント情報のデータ
const topics = [
  {
    name: "激アツサバイバー",
    link: "/honntai/gekisaba/gekisaba.html",
    img: "/honntai/images/gekiatusabaiba.jpeg",
  },
  {
    name: "激アツハンター",
    link: "/honntai/gekiatuhannta/gekiatuhannta.html",
    img: "/honntai/images/gekiatuhanta.jpeg",
  },
  {
    name: "次回のコラボ予想",
    link: "/honntai/yosou/koraboyosou.html",
    img: "/honntai/images/zikainokorabo.jpeg",
  },
  {
    name: "キャラクター別プロが使う人格",
    link: "/honntai/purozinnkaku/purozinnkaku.html",
    img: "/honntai/images/zinnkaku.jpeg",
  },
];

const events = [
  {
    name: "初心者に使ってほしいキャラ",
    link: "/honntai/sigatu/sigatu.html",
    img: "/honntai/images/syosinnsya.jpeg",
  },
  {
    name: "初心者が中級者になる確実なステップ",
    link: "/honntai/sigati/sigati.html",
    img: "/honntai/images/suteppu.jpeg",
  },
  {
    name: "定型文チャットとは？？",
    link: "/honntai/chat/chat.html",
    img: "/honntai/images/chat/icon.jpeg",
  },
  {
    name: "第五人格知っておきたい用語集",
    link: "/honntai/yougo/yougo.html",
    img: "/honntai/images/yougo.jpeg",
  },
  {
    name: "内在人格とは？？サバイバー編",
    link: "/honntai/sabazinnkaku/sabazinnkaku.html",
    img: "/honntai/images/sabazinnkaku.jpeg",
  },
  {
    name: "内在人格とは？？ハンター編",
    link: "/honntai/hantazinnkaku/hantazinnkaku.html",
    img: "/honntai/images/hantazinnkaku.jpeg",
  },
];

const tisikis = [
  {
    name: "サバイバーランキング",
    link: "/honntai/sabaran/sabaran.html",
    img: "/honntai/images/sabaran.jpeg",
  },
  {
    name: "ハンターランキング",
    link: "/honntai/hanran/hanran.html",
    img: "/honntai/images/hanran.jpeg",
  },
  {
    name: "マップ内のロッカーの活用方法",
    link: "/honntai/rokka/rokka.html",
    img: "/honntai/images/rokka.jpeg",
  },
  {
    name: "エモート利用",
    link: "/honntai/emoto/emoto.html",
    img: "/honntai/images/emoto.jpeg",
  },
];

const masters = [
  {
    name: "キャラの個性について",
    link: "/honntai/kyarakosei/kyarakosei.html",
    img: "/honntai/images/kosei.jpeg",
  },
  {
    name: "キャラ別プロが使っている人格",
    link: "/honntai/purozinnkaku/purozinnkaku.html",
    img: "/honntai/images/zinnkaku.jpeg",
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
