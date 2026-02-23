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
    link: "/honntai/sabaiba/niwasi/niwasi.html",
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
    link: "/honntai/sabaiba/ofensu/ofensu.html",
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
    link: "/honntai/sabaiba/tannkousya/tannkousya.html",
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
    url: "/honntai/images/kyaragazou/sabaibagazou/bameido.jpeg",
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
    url: "/honntai/images/kyaragazou/sabaibagazou/battumann.jpeg",
    link: "/honntai/sabaiba/battumann/battumann.html",
  },
  {
    name: "玩具職人",
    url: "/honntai/images/kyaragazou/sabaibagazou/ganngusyokuninn.jpeg",
    link: "/honntai/sabaiba/ganngusyokuninn/ganngusyokuninn.html",
  },
  {
    name: "患者",
    url: "/honntai/images/kyaragazou/sabaibagazou/kannzya.jpeg",
    link: "/honntai/sabaiba/kannzya/kannzya.html",
  },
  {
    name: "心理学者",
    url: "/honntai/images/kyaragazou/sabaibagazou/sinnrigakusya.jpeg",
    link: "/honntai/sabaiba/sinnrigakusya/sinnrigakusya.html",
  },
  {
    name: "小説家",
    url: "/honntai/images/kyaragazou/sabaibagazou/syousetuka.jpeg",
    link: "/honntai/sabaiba/syousetuka/syousetuka.html",
  },
  {
    name: "少女",
    url: "/honntai/images/kyaragazou/sabaibagazou/syouzyo.jpeg",
    link: "/honntai/sabaiba/syouzyo/syouzyo.html",
  },
  {
    name: "泣きピエロ",
    url: "/honntai/images/kyaragazou/sabaibagazou/nakipiero.jpeg",
    link: "/honntai/sabaiba/nakipiero/nakipiero.html",
  },
  {
    name: "教授",
    url: "/honntai/images/kyaragazou/sabaibagazou/kyouzyu.jpeg",
    link: "/honntai/sabaiba/kyouzyu/kyouzyu.html",
  },
  {
    name: "骨董商",
    url: "/honntai/images/kyaragazou/sabaibagazou/kottousyou.jpeg",
    link: "/honntai/sabaiba/kottousyou/kottousyou.html",
  },
  {
    name: "作曲家",
    url: "/honntai/images/kyaragazou/sabaibagazou/sakkyokuka.jpeg",
    link: "/honntai/sabaiba/sakkyokuka/sakkyokuka.html",
  },
  {
    name: "記者",
    url: "/honntai/images/kyaragazou/sabaibagazou/kisya.jpeg",
    link: "/honntai/sabaiba/kisya/kisya.html",
  },
  {
    name: "航空エンジニア",
    url: "/honntai/images/kyaragazou/sabaibagazou/koukuuennzinia.jpeg",
    link: "/honntai/sabaiba/koukuuennzinia/koukuuennzinia.html",
  },
  {
    name: "応援団",
    url: "/honntai/images/kyaragazou/sabaibagazou/ouenndann.jpeg",
    link: "/honntai/sabaiba/ouenndann/ouenndann.html",
  },
  {
    name: "人形師",
    url: "/honntai/images/kyaragazou/sabaibagazou/ningyousi.jpeg",
    link: "/honntai/sabaiba/ningyousi/ningyousi.html",
  },
  {
    name: "火災調査員",
    url: "/honntai/images/kyaragazou/sabaibagazou/kasaityousainn.jpeg",
    link: "/honntai/sabaiba/kasaityousainn/kasaityousainn.html",
  },
  {
    name: "レディファウロ",
    url: "/honntai/images/kyaragazou/sabaibagazou/redhifauro.jpeg",
    link: "/honntai/sabaiba/redhifauro/redhifauro.html",
  },
  {
    name: "騎士",
    url: "/honntai/images/kyaragazou/sabaibagazou/kisi.jpeg",
    link: "/honntai/sabaiba/kisi/kisi.html",
  },
  {
    name: "気象学者",
    url: "/honntai/images/kyaragazou/sabaibagazou/kisyougakusya.jpeg",
    link: "/honntai/sabaiba/kisyougakusya/kisyougakusya.html",
  },
  {
    name: "弓使い",
    url: "/honntai/images/kyaragazou/sabaibagazou/yumitukai.jpeg",
    link: "/honntai/sabaiba/yumitukai/yumitukai.html",
  },
  {
    name: "脱出マスター",
    url: "/honntai/images/kyaragazou/sabaibagazou/dassyutumasuta.jpeg",
    link: "/honntai/sabaiba/dassyutumasuta/dassyutumasuta.html",
  },
  {
    name: "幻灯師",
    url: "/honntai/images/kyaragazou/sabaibagazou/genntousi.png",
    link: "/honntai/sabaiba/genntousi/genntousi.html",
  },
  {
    name: "闘牛士",
    url: "/honntai/images/kyaragazou/sabaibagazou/tougyuusi.jpeg",
    link: "/honntai/sabaiba/tougyuusi/tougyuusi.html",
  },
];

const hunters = [
  {
    name: "復讐者",
    url: "/honntai/images/kyaragazou/hanntagazou/hukusyuusya.jpeg",
    link: "/honntai/hanta/hukusyuusya/hukusyuusya.html",
  },
  {
    name: "道化師",
    url: "/honntai/images/kyaragazou/hanntagazou/doukesi.jpeg",
    link: "/honntai/hanta/doukesi/doukesi.html",
  },
  {
    name: "断罪狩人",
    url: "/honntai/images/kyaragazou/hanntagazou/dannzaikariudo.jpeg",
    link: "/honntai/hanta/dannzaikariudo/dannzaikariudo.html",
  },
  {
    name: "リッパー",
    url: "/honntai/images/kyaragazou/hanntagazou/rippa.jpeg",
    link: "/honntai/hanta/rippa/rippa.html",
  },
  {
    name: "結魂者",
    url: "/honntai/images/kyaragazou/hanntagazou/kekkonnsya.jpeg",
    link: "/honntai/hanta/kekkonnsya/kekkonnsya.html",
  },
  {
    name: "芸者",
    url: "/honntai/images/kyaragazou/hanntagazou/geisya.jpeg",
    link: "/honntai/hanta/geisya/geisya.html",
  },
  {
    name: "白黒無常",
    url: "/honntai/images/kyaragazou/hanntagazou/sirokuromuzyou.jpeg",
    link: "/honntai/hanta/sirokuromuzyou/sirokuromuzyou.html",
  },
  {
    name: "写真家",
    url: "/honntai/images/kyaragazou/hanntagazou/syasinnka.jpeg",
    link: "/honntai/hanta/syasinnka/syasinnka.html",
  },
  {
    name: "狂眼",
    url: "/honntai/images/kyaragazou/hanntagazou/kyougenn.jpeg",
    link: "/honntai/hanta/kyougenn/kyougenn.html",
  },
  {
    name: "黄衣の王",
    url: "/honntai/images/kyaragazou/hanntagazou/ika.jpeg",
    link: "/honntai/hanta/ika/ika.html",
  },
  {
    name: "夢の魔女",
    url: "/honntai/images/kyaragazou/hanntagazou/yumenomazyo.jpeg",
    link: "/honntai/hanta/yumenomazyo/yumenomazyo.html",
  },
  {
    name: "泣き虫",
    url: "/honntai/images/kyaragazou/hanntagazou/nakimusi.jpeg",
    link: "/honntai/hanta/nakimusi/nakimusi.html",
  },
  {
    name: "魔トカゲ",
    url: "/honntai/images/kyaragazou/hanntagazou/matokage.jpeg",
    link: "/honntai/hanta/matokage/matokage.html",
  },
  {
    name: "血の女王",
    url: "/honntai/images/kyaragazou/hanntagazou/marhi.jpeg",
    link: "/honntai/hanta/marhi/marhi.html",
  },
  {
    name: "ガードNo.26",
    url: "/honntai/images/kyaragazou/hanntagazou/bonnbonn.jpeg",
    link: "/honntai/hanta/bonnbonn/bonnbonn.html",
  },
  {
    name: "使徒",
    url: "/honntai/images/kyaragazou/hanntagazou/sito.jpeg",
    link: "/honntai/hanta/sito/sito.html",
  },
  {
    name: "ヴァイオリニスト",
    url: "/honntai/images/kyaragazou/hanntagazou/vaiorinisuto.jpeg",
    link: "/honntai/hanta/vaiorinisuto/vaiorinisuto.html",
  },
  {
    name: "彫刻家",
    url: "/honntai/images/kyaragazou/hanntagazou/tyoukokusi.jpeg",
    link: "/honntai/hanta/tyoukokusi/tyoukokusi.html",
  },
  {
    name: "アンデッド",
    url: "/honntai/images/kyaragazou/hanntagazou/anndetto.jpeg",
    link: "/honntai/hanta/anndetto/anndetto.html",
  },
  {
    name: "破輪",
    url: "/honntai/images/kyaragazou/hanntagazou/harinn.jpeg",
    link: "/honntai/hanta/harinn/harinn.html",
  },
  {
    name: "漁師",
    url: "/honntai/images/kyaragazou/hanntagazou/ryousi.jpeg",
    link: "/honntai/hanta/ryousi/ryousi.html",
  },
  {
    name: "蝋人形師",
    url: "/honntai/images/kyaragazou/hanntagazou/rouninngyousi.jpeg",
    link: "/honntai/hanta/rouninngyousi/rouninngyousi.html",
  },
  {
    name: "悪夢",
    url: "/honntai/images/kyaragazou/hanntagazou/akumu.jpeg",
    link: "/honntai/hanta/akumu/akumu.html",
  },
  {
    name: "書記官",
    url: "/honntai/images/kyaragazou/hanntagazou/syokikann.jpeg",
    link: "/honntai/hanta/syokikann/syokikann.html",
  },
  {
    name: "隠者",
    url: "/honntai/images/kyaragazou/hanntagazou/innzya.jpeg",
    link: "/honntai/hanta/innzya/innzya.html",
  },
  {
    name: "夜の番人",
    url: "/honntai/images/kyaragazou/hanntagazou/yorunobannninn.jpeg",
    link: "/honntai/hanta/yorunobannninn/yorunobannninn.html",
  },
  {
    name: "フールズ・ゴールド",
    url: "/honntai/images/kyaragazou/hanntagazou/hurugo.jpeg",
    link: "/honntai/hanta/hurugo/hurugo.html",
  },
  {
    name: "オペラ歌手",
    url: "/honntai/images/kyaragazou/hanntagazou/operakasyu.jpeg",
    link: "/honntai/hanta/operakasyu/operakasyu.html",
  },
  {
    name: "時空の影",
    url: "/honntai/images/kyaragazou/hanntagazou/zikuunokage.jpeg",
    link: "/honntai/hanta/zikuunokage/zikuunokage.html",
  },
  {
    name: "足萎えの羊",
    url: "/honntai/images/kyaragazou/hanntagazou/asinaenohituzi.jpeg",
    link: "/honntai/hanta/asinaenohituzi/asinaenohituzi.html",
  },
  {
    name: "フラバルー",
    url: "/honntai/images/kyaragazou/hanntagazou/hurabaru.jpeg",
    link: "/honntai/hanta/hurabaru/hurabaru.html",
  },
  {
    name: "雑貨商",
    url: "/honntai/images/kyaragazou/hanntagazou/zakkasyou.jpeg",
    link: "/honntai/hanta/zakkasyou/zakkasyou.html",
  },
  {
    name: "ビリヤードプレイヤー",
    url: "/honntai/images/kyaragazou/hanntagazou/biriyadopureiya.jpeg",
    link: "/honntai/hanta/biriyadopureiya/biriyadopureiya.html",
  },
  {
    name: "女王蜂",
    url: "/honntai/images/kyaragazou/hanntagazou/zyououbati.jpeg",
    link: "/honntai/hanta/zyououbati/zyououbati.html",
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
  img.alt = survivor.name;

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
  img.alt = hunter.name;

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
