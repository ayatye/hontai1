// サバイバーとハンターのリスト
const survivors = [
  {
    name: "幸運児",
    url: "../images/kyaragazou/sabaibagazou/kouunzi.jpeg",
    link: "../sabaiba/kouunzi/kouunzi.html",
  },
  {
    name: "医師",
    url: "../images/kyaragazou/sabaibagazou/isi.jpeg",
    link: "../sabaiba/isi/isi.html",
  },
  {
    name: "弁護士",
    url: "../images/kyaragazou/sabaibagazou/benngosi.jpeg",
    link: "../sabaiba/benngosi/benngosi.html",
  },
  {
    name: "空軍",
    url: "../images/kyaragazou/sabaibagazou/kuugunn.jpeg",
    link: "../sabaiba/kuugunn/kuugunn.html",
  },
  {
    name: "庭師",
    url: "../images/kyaragazou/sabaibagazou/niwasi.jpeg",
    link: "../sabaiba/niwasi/niwasi.html",
  },
  {
    name: "泥棒",
    url: "../images/kyaragazou/sabaibagazou/dorobou.jpeg",
    link: "../sabaiba/dorobou/dorobou.html",
  },
  {
    name: "傭兵",
    url: "../images/kyaragazou/sabaibagazou/youhei.jpeg",
    link: "../sabaiba/youhei/youhei.html",
  },
  {
    name: "調香師",
    url: "../images/kyaragazou/sabaibagazou/tyoukousi.jpeg",
    link: "../sabaiba/tyoukousi/tyoukousi.html",
  },
  {
    name: "占い師",
    url: "../images/kyaragazou/sabaibagazou/uranaisi.jpeg",
    link: "../sabaiba/uranaisi/uranaisi.html",
  },
  {
    name: "マジシャン",
    url: "../images/kyaragazou/sabaibagazou/mazisyann.jpeg",
    link: "../sabaiba/mazisyann/mazisyann.html",
  },
  {
    name: "カウボーイ",
    url: "../images/kyaragazou/sabaibagazou/kauboi.jpeg",
    link: "../sabaiba/kauboi/kauboi.html",
  },
  {
    name: "冒険家",
    url: "../images/kyaragazou/sabaibagazou/boukennka.jpeg",
    link: "../sabaiba/boukennka/boukennka.html",
  },
  {
    name: "祭司",
    url: "../images/kyaragazou/sabaibagazou/saisi.jpeg",
    link: "../sabaiba/saisi/saisi.html",
  },
  {
    name: "機械技師",
    url: "../images/kyaragazou/sabaibagazou/kikaigisi.jpeg",
    link: "../sabaiba/kikaigisi/kikaigisi.html",
  },
  {
    name: "オフェンス",
    url: "../images/kyaragazou/sabaibagazou/ofensu.jpeg",
    link: "../sabaiba/ofensu/ofensu.html",
  },
  {
    name: "心眼",
    url: "../images/kyaragazou/sabaibagazou/sinngann.jpeg",
    link: "../sabaiba/sinngann/sinngann.html",
  },
  {
    name: "踊り子",
    url: "../images/kyaragazou/sabaibagazou/odoriko.jpeg",
    link: "../sabaiba/odoriko/odoriko.html",
  },
  {
    name: "納棺師",
    url: "../images/kyaragazou/sabaibagazou/noukannsi.jpeg",
    link: "../sabaiba/noukannsi/noukannsi.html",
  },
  {
    name: "探鉱者",
    url: "../images/kyaragazou/sabaibagazou/tannkousya.jpeg",
    link: "../sabaiba/tannkousya/tannkousya.html",
  },
  {
    name: "呪術師",
    url: "../images/kyaragazou/sabaibagazou/zyuzyutusi.jpeg",
    link: "../sabaiba/zyuzyutusi/zyuzyutusi.html",
  },
  {
    name: "野人",
    url: "../images/kyaragazou/sabaibagazou/yazinn.jpeg",
    link: "../sabaiba/yazinn/yazinn.html",
  },
  {
    name: "曲芸師",
    url: "../images/kyaragazou/sabaibagazou/kyokugeisi.jpeg",
    link: "../sabaiba/kyokugeisi/kyokugeisi.html",
  },
  {
    name: "一等航海士",
    url: "../images/kyaragazou/sabaibagazou/ittoukoukaisi.jpeg",
    link: "../sabaiba/ittoukoukaisi/ittoukoukaisi.html",
  },
  {
    name: "バーメイド",
    url: "../images/kyaragazou/sabaibagazou/bameido.jpeg",
    link: "../sabaiba/bameido/bameido.html",
  },
  {
    name: "ポストマン",
    url: "../images/kyaragazou/sabaibagazou/posutomann.jpeg",
    link: "../sabaiba/posutomann/posutomann.html",
  },
  {
    name: "墓守",
    url: "../images/kyaragazou/sabaibagazou/hakamori.jpeg",
    link: "../sabaiba/hakamori/hakamori.html",
  },
  {
    name: "囚人",
    url: "../images/kyaragazou/sabaibagazou/syuuzinn.jpeg",
    link: "../sabaiba/syuuzinn/syuuzinn.html",
  },
  {
    name: "昆虫学者",
    url: "../images/kyaragazou/sabaibagazou/konntyuugakusya.jpeg",
    link: "../sabaiba/konntyuugakusya/konntyuugakusya.html",
  },
  {
    name: "画家",
    url: "../images/kyaragazou/sabaibagazou/gaka.jpeg",
    link: "../sabaiba/gaka/gaka.html",
  },
  {
    name: "バッツマン",
    url: "../images/kyaragazou/sabaibagazou/battumann.jpeg",
    link: "../sabaiba/battumann/battumann.html",
  },
  {
    name: "玩具職人",
    url: "../images/kyaragazou/sabaibagazou/ganngusyokuninn.jpeg",
    link: "../sabaiba/ganngusyokuninn/ganngusyokuninn.html",
  },
  {
    name: "患者",
    url: "../images/kyaragazou/sabaibagazou/kannzya.jpeg",
    link: "../sabaiba/kannzya/kannzya.html",
  },
  {
    name: "心理学者",
    url: "../images/kyaragazou/sabaibagazou/sinnrigakusya.jpeg",
    link: "../sabaiba/sinnrigakusya/sinnrigakusya.html",
  },
  {
    name: "小説家",
    url: "../images/kyaragazou/sabaibagazou/syousetuka.jpeg",
    link: "../sabaiba/syousetuka/syousetuka.html",
  },
  {
    name: "少女",
    url: "../images/kyaragazou/sabaibagazou/syouzyo.jpeg",
    link: "../sabaiba/syouzyo/syouzyo.html",
  },
  {
    name: "泣きピエロ",
    url: "../images/kyaragazou/sabaibagazou/nakipiero.jpeg",
    link: "../sabaiba/nakipiero/nakipiero.html",
  },
  {
    name: "教授",
    url: "../images/kyaragazou/sabaibagazou/kyouzyu.jpeg",
    link: "../sabaiba/kyouzyu/kyouzyu.html",
  },
  {
    name: "骨董商",
    url: "../images/kyaragazou/sabaibagazou/kottousyou.jpeg",
    link: "../sabaiba/kottousyou/kottousyou.html",
  },
  {
    name: "作曲家",
    url: "../images/kyaragazou/sabaibagazou/sakkyokuka.jpeg",
    link: "../sabaiba/sakkyokuka/sakkyokuka.html",
  },
  {
    name: "記者",
    url: "../images/kyaragazou/sabaibagazou/kisya.jpeg",
    link: "../sabaiba/kisya/kisya.html",
  },
  {
    name: "航空エンジニア",
    url: "../images/kyaragazou/sabaibagazou/koukuuennzinia.jpeg",
    link: "../sabaiba/koukuuennzinia/koukuuennzinia.html",
  },
  {
    name: "応援団",
    url: "../images/kyaragazou/sabaibagazou/ouenndann.jpeg",
    link: "../sabaiba/ouenndann/ouenndann.html",
  },
  {
    name: "人形師",
    url: "../images/kyaragazou/sabaibagazou/ningyousi.jpeg",
    link: "../sabaiba/ningyousi/ningyousi.html",
  },
  {
    name: "火災調査員",
    url: "../images/kyaragazou/sabaibagazou/kasaityousainn.jpeg",
    link: "../sabaiba/kasaityousainn/kasaityousainn.html",
  },
  {
    name: "レディファウロ",
    url: "../images/kyaragazou/sabaibagazou/redhifauro.jpeg",
    link: "../sabaiba/redhifauro/redhifauro.html",
  },
  {
    name: "騎士",
    url: "../images/kyaragazou/sabaibagazou/kisi.jpeg",
    link: "../sabaiba/kisi/kisi.html",
  },
  {
    name: "気象学者",
    url: "../images/kyaragazou/sabaibagazou/kisyougakusya.jpeg",
    link: "../sabaiba/kisyougakusya/kisyougakusya.html",
  },
  {
    name: "弓使い",
    url: "../images/kyaragazou/sabaibagazou/yumitukai.jpeg",
    link: "../sabaiba/yumitukai/yumitukai.html",
  },
  {
    name: "脱出マスター",
    url: "../images/kyaragazou/sabaibagazou/dassyutumasuta.jpeg",
    link: "../sabaiba/dassyutumasuta/dassyutumasuta.html",
  },
];

const hunters = [
  {
    name: "復讐者",
    url: "../images/kyaragazou/hanntagazou/hukusyuusya.jpeg",
    link: "../hanta/hukusyuusya/hukusyuusya.html",
  },
  {
    name: "道化師",
    url: "../images/kyaragazou/hanntagazou/doukesi.jpeg",
    link: "../hanta/doukesi/doukesi.html",
  },
  {
    name: "断罪狩人",
    url: "../images/kyaragazou/hanntagazou/dannzaikariudo.jpeg",
    link: "../hanta/dannzaikariudo/dannzaikariudo.html",
  },
  {
    name: "リッパー",
    url: "../images/kyaragazou/hanntagazou/rippa.jpeg",
    link: "../hanta/rippa/rippa.html",
  },
  {
    name: "結魂者",
    url: "../images/kyaragazou/hanntagazou/kekkonnsya.jpeg",
    link: "../hanta/kekkonnsya/kekkonnsya.html",
  },
  {
    name: "芸者",
    url: "../images/kyaragazou/hanntagazou/geisya.jpeg",
    link: "../hanta/geisya/geisya.html",
  },
  {
    name: "白黒無常",
    url: "../images/kyaragazou/hanntagazou/sirokuromuzyou.jpeg",
    link: "../hanta/sirokuromuzyou/sirokuromuzyou.html",
  },
  {
    name: "写真家",
    url: "../images/kyaragazou/hanntagazou/syasinnka.jpeg",
    link: "../hanta/syasinnka/syasinnka.html",
  },
  {
    name: "狂眼",
    url: "../images/kyaragazou/hanntagazou/kyougenn.jpeg",
    link: "../hanta/kyougenn/kyougenn.html",
  },
  {
    name: "黄衣の王",
    url: "../images/kyaragazou/hanntagazou/ika.jpeg",
    link: "../hanta/ika/ika.html",
  },
  {
    name: "夢の魔女",
    url: "../images/kyaragazou/hanntagazou/yumenomazyo.jpeg",
    link: "../hanta/yumenomazyo/yumenomazyo.html",
  },
  {
    name: "泣き虫",
    url: "../images/kyaragazou/hanntagazou/nakimusi.jpeg",
    link: "../hanta/nakimusi/nakimusi.html",
  },
  {
    name: "魔トカゲ",
    url: "../images/kyaragazou/hanntagazou/matokage.jpeg",
    link: "../hanta/matokage/matokage.html",
  },
  {
    name: "血の女王",
    url: "../images/kyaragazou/hanntagazou/marhi.jpeg",
    link: "../hanta/marhi/marhi.html",
  },
  {
    name: "ガードNo.26",
    url: "../images/kyaragazou/hanntagazou/bonnbonn.jpeg",
    link: "../hanta/bonnbonn/bonnbonn.html",
  },
  {
    name: "使徒",
    url: "../images/kyaragazou/hanntagazou/sito.jpeg",
    link: "../hanta/sito/sito.html",
  },
  {
    name: "ヴァイオリニスト",
    url: "../images/kyaragazou/hanntagazou/vaiorinisuto.jpeg",
    link: "../hanta/vaiorinisuto/vaiorinisuto.html",
  },
  {
    name: "彫刻家",
    url: "../images/kyaragazou/hanntagazou/tyoukokusi.jpeg",
    link: "../hanta/tyoukokusi/tyoukokusi.html",
  },
  {
    name: "アンデッド",
    url: "../images/kyaragazou/hanntagazou/anndetto.jpeg",
    link: "../hanta/anndetto/anndetto.html",
  },
  {
    name: "破輪",
    url: "../images/kyaragazou/hanntagazou/harinn.jpeg",
    link: "../hanta/harinn/harinn.html",
  },
  {
    name: "漁師",
    url: "../images/kyaragazou/hanntagazou/ryousi.jpeg",
    link: "../hanta/ryousi/ryousi.html",
  },
  {
    name: "蝋人形師",
    url: "../images/kyaragazou/hanntagazou/rouninngyousi.jpeg",
    link: "../hanta/rouninngyousi/rouninngyousi.html",
  },
  {
    name: "悪夢",
    url: "../images/kyaragazou/hanntagazou/akumu.jpeg",
    link: "../hanta/akumu/akumu.html",
  },
  {
    name: "書記官",
    url: "../images/kyaragazou/hanntagazou/syokikann.jpeg",
    link: "../hanta/syokikann/syokikann.html",
  },
  {
    name: "隠者",
    url: "../images/kyaragazou/hanntagazou/innzya.jpeg",
    link: "../hanta/innzya/innzya.html",
  },
  {
    name: "夜の番人",
    url: "../images/kyaragazou/hanntagazou/yorunobannninn.jpeg",
    link: "../hanta/yorunobannninn/yorunobannninn.html",
  },
  {
    name: "フールズ・ゴールド",
    url: "../images/kyaragazou/hanntagazou/hurugo.jpeg",
    link: "../hanta/hurugo/hurugo.html",
  },
  {
    name: "オペラ歌手",
    url: "../images/kyaragazou/hanntagazou/operakasyu.jpeg",
    link: "../hanta/operakasyu/operakasyu.html",
  },
  {
    name: "時空の影",
    url: "../images/kyaragazou/hanntagazou/zikuunokage.jpeg",
    link: "../hanta/zikuunokage/zikuunokage.html",
  },
  {
    name: "足萎えの羊",
    url: "../images/kyaragazou/hanntagazou/asinaenohituzi.jpeg",
    link: "../hanta/asinaenohituzi/asinaenohituzi.html",
  },
  {
    name: "フラバルー",
    url: "../images/kyaragazou/hanntagazou/hurabaru.jpeg",
    link: "../hanta/hurabaru/hurabaru.html",
  },
  {
    name: "雑貨商",
    url: "../images/kyaragazou/hanntagazou/zakkasyou.jpeg",
    link: "../hanta/zakkasyou/zakkasyou.html",
  },
  {
    name: "ビリヤードプレイヤー",
    url: "../images/kyaragazou/hanntagazou/biriyadopureiya.jpeg",
    link: "../hanta/biriyadopureiya/biriyadopureiya.html",
  },
];

// キャラクターカードを作成する関数
function createCharacterCard(character, type) {
  return `
    <div class="character-card ${type}-card">
      <a href="${character.link}" class="character-link">
        <div class="character-image loading-placeholder">
          <img src="${character.url}" alt="${character.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='👤';">
        </div>
        <div class="character-name">${character.name}</div>
      </a>
    </div>
  `;
}

// サバイバーグリッドを生成
function renderSurvivors() {
  const survivorGrid = document.getElementById("survivor-grid");
  if (!survivorGrid) {
    console.error("survivor-grid element not found");
    return;
  }
  survivorGrid.innerHTML = survivors
    .map((survivor) => createCharacterCard(survivor, "survivor"))
    .join("");
}

// ハンターグリッドを生成
function renderHunters() {
  const hunterGrid = document.getElementById("hunter-grid");
  if (!hunterGrid) {
    console.error("hunter-grid element not found");
    return;
  }
  hunterGrid.innerHTML = hunters
    .map((hunter) => createCharacterCard(hunter, "hunter"))
    .join("");
}

// ページ読み込み時に実行
document.addEventListener("DOMContentLoaded", function () {
  renderSurvivors();
  renderHunters();
});

// 画像読み込み完了時にプレースホルダーを削除
document.addEventListener(
  "load",
  function (e) {
    if (e.target.tagName === "IMG") {
      e.target.parentElement.classList.remove("loading-placeholder");
    }
  },
  true
);
