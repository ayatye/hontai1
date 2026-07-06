// サバイバーとハンターのリスト
const survivors = [
  {
    name: "幸運児",
    link: "/honntai/sabaiba/kouunzi/kouunzi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kouunzi.jpeg",
    alt: "幸運児の画像",
  },
  {
    name: "医師",
    link: "/honntai/sabaiba/isi/isi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/isi.jpeg",
    alt: "医師の画像",
  },
  {
    name: "弁護士",
    link: "/honntai/sabaiba/benngosi/benngosi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/benngosi.jpeg",
    alt: "弁護士の画像",
  },
  {
    name: "空軍",
    link: "/honntai/sabaiba/kuugunn/kuugunn.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kuugunn.jpeg",
    alt: "空軍の画像",
  },
  {
    name: "庭師",
    link: "/honntai/sabaiba/niwasi/niwasi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/niwasi.jpeg",
    alt: "庭師の画像",
  },
  {
    name: "泥棒",
    link: "/honntai/sabaiba/dorobou/dorobou.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/dorobou.jpeg",
    alt: "泥棒の画像",
  },
  {
    name: "傭兵",
    link: "/honntai/sabaiba/youhei/youhei.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/youhei.jpeg",
    alt: "傭兵の画像",
  },
  {
    name: "調香師",
    link: "/honntai/sabaiba/tyoukousi/tyoukousi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/tyoukousi.jpeg",
    alt: "調香師の画像",
  },
  {
    name: "占い師",
    link: "/honntai/sabaiba/uranaisi/uranaisi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/uranaisi.jpeg",
    alt: "占い師の画像",
  },
  {
    name: "マジシャン",
    link: "/honntai/sabaiba/mazisyann/mazisyann.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/mazisyann.jpeg",
    alt: "マジシャンの画像",
  },
  {
    name: "カウボーイ",
    link: "/honntai/sabaiba/kauboi/kauboi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kauboi.jpeg",
    alt: "カウボーイの画像",
  },
  {
    name: "冒険家",
    link: "/honntai/sabaiba/boukennka/boukennka.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/boukennka.jpeg",
    alt: "冒険家の画像",
  },
  {
    name: "祭司",
    link: "/honntai/sabaiba/saisi/saisi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/saisi.jpeg",
    alt: "祭司の画像",
  },
  {
    name: "機械技師",
    link: "/honntai/sabaiba/kikaigisi/kikaigisi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kikaigisi.jpeg",
    alt: "機械技師の画像",
  },
  {
    name: "オフェンス",
    link: "/honntai/sabaiba/ofensu/ofensu.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/ofensu.jpeg",
    alt: "オフェンスの画像",
  },
  {
    name: "心眼",
    link: "/honntai/sabaiba/sinngann/sinngann.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/sinngann.jpeg",
    alt: "心眼の画像",
  },
  {
    name: "踊り子",
    link: "/honntai/sabaiba/odoriko/odoriko.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/odoriko.jpeg",
    alt: "踊り子の画像",
  },
  {
    name: "納棺師",
    link: "/honntai/sabaiba/noukannsi/noukannsi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/noukannsi.jpeg",
    alt: "納棺師の画像",
  },
  {
    name: "探鉱者",
    link: "/honntai/sabaiba/tannkousya/tannkousya.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/tannkousya.jpeg",
    alt: "探鉱者の画像",
  },
  {
    name: "呪術師",
    link: "/honntai/sabaiba/zyuzyutusi/zyuzyutusi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/zyuzyutusi.jpeg",
    alt: "呪術師の画像",
  },
  {
    name: "野人",
    link: "/honntai/sabaiba/yazinn/yazinn.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/yazinn.jpeg",
    alt: "野人の画像",
  },
  {
    name: "曲芸師",
    link: "/honntai/sabaiba/kyokugeisi/kyokugeisi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kyokugeisi.jpeg",
    alt: "曲芸師の画像",
  },
  {
    name: "一等航海士",
    link: "/honntai/sabaiba/ittoukoukaisi/ittoukoukaisi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/ittoukoukaisi.jpeg",
    alt: "一等航海士の画像",
  },
  {
    name: "バーメイド",
    link: "/honntai/sabaiba/bameido/bameido.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/bameido.jpeg",
    alt: "バーメイドの画像",
  },
  {
    name: "ポストマン",
    link: "/honntai/sabaiba/posutomann/posutomann.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/posutomann.jpeg",
    alt: "ポストマンの画像",
  },
  {
    name: "墓守",
    link: "/honntai/sabaiba/hakamori/hakamori.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/hakamori.jpeg",
    alt: "墓守の画像",
  },
  {
    name: "囚人",
    link: "/honntai/sabaiba/syuuzinn/syuuzinn.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/syuuzinn.jpeg",
    alt: "囚人の画像",
  },
  {
    name: "昆虫学者",
    link: "/honntai/sabaiba/konntyuugakusya/konntyuugakusya.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/konntyuugakusya.jpeg",
    alt: "昆虫学者の画像",
  },
  {
    name: "画家",
    link: "/honntai/sabaiba/gaka/gaka.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/gaka.jpeg",
    alt: "画家の画像",
  },
  {
    name: "バッツマン",
    link: "/honntai/sabaiba/battumann/battumann.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/battumann.jpeg",
    alt: "バッツマンの画像",
  },
  {
    name: "玩具職人",
    link: "/honntai/sabaiba/ganngusyokuninn/ganngusyokuninn.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/ganngusyokuninn.jpeg",
    alt: "玩具職人の画像",
  },
  {
    name: "患者",
    link: "/honntai/sabaiba/kannzya/kannzya.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kannzya.jpeg",
    alt: "患者の画像",
  },
  {
    name: "心理学者",
    link: "/honntai/sabaiba/sinnrigakusya/sinnrigakusya.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/sinnrigakusya.jpeg",
    alt: "心理学者の画像",
  },
  {
    name: "小説家",
    link: "/honntai/sabaiba/syousetuka/syousetuka.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/syousetuka.jpeg",
    alt: "小説家の画像",
  },
  {
    name: "少女",
    link: "/honntai/sabaiba/syouzyo/syouzyo.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/syouzyo.jpeg",
    alt: "少女の画像",
  },
  {
    name: "泣きピエロ",
    link: "/honntai/sabaiba/nakipiero/nakipiero.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/nakipiero.jpeg",
    alt: "泣きピエロの画像",
  },
  {
    name: "教授",
    link: "/honntai/sabaiba/kyouzyu/kyouzyu.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kyouzyu.jpeg",
    alt: "教授の画像",
  },
  {
    name: "骨董商",
    link: "/honntai/sabaiba/kottousyou/kottousyou.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kottousyou.jpeg",
    alt: "骨董商の画像",
  },
  {
    name: "作曲家",
    link: "/honntai/sabaiba/sakkyokuka/sakkyokuka.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/sakkyokuka.jpeg",
    alt: "作曲家の画像",
  },
  {
    name: "記者",
    link: "/honntai/sabaiba/kisya/kisya.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kisya.jpeg",
    alt: "記者の画像",
  },
  {
    name: "航空エンジニア",
    link: "/honntai/sabaiba/koukuuennzinia/koukuuennzinia.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/koukuuennzinia.jpeg",
    alt: "航空エンジニアの画像",
  },
  {
    name: "応援団",
    link: "/honntai/sabaiba/ouenndann/ouenndann.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/ouenndann.jpeg",
    alt: "応援団の画像",
  },
  {
    name: "人形師",
    link: "/honntai/sabaiba/ningyousi/ningyousi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/ningyousi.jpeg",
    alt: "人形師の画像",
  },
  {
    name: "火災調査員",
    link: "/honntai/sabaiba/kasaityousainn/kasaityousainn.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kasaityousainn.jpeg",
    alt: "火災調査員の画像",
  },
  {
    name: "レディ・ファウロ",
    link: "/honntai/sabaiba/redhifauro/redhifauro.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/redhifauro.jpeg",
    alt: "レディ・ファウロの画像",
  },
  {
    name: "騎士",
    link: "/honntai/sabaiba/kisi/kisi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kisi.jpeg",
    alt: "騎士の画像",
  },
  {
    name: "気象学者",
    link: "/honntai/sabaiba/kisyougakusya/kisyougakusya.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/kisyougakusya.jpeg",
    alt: "気象学者の画像",
  },
  {
    name: "弓使い",
    link: "/honntai/sabaiba/yumitukai/yumitukai.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/yumitukai.jpeg",
    alt: "弓使いの画像",
  },
  {
    name: "脱出マスター",
    link: "/honntai/sabaiba/dassyutumasuta/dassyutumasuta.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/dassyutumasuta.jpeg",
    alt: "脱出マスターの画像",
  },
  {
    name: "幻灯師",
    link: "/honntai/sabaiba/genntousi/genntousi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/genntousi.png",
    alt: "幻灯師の画像",
  },
  {
    name: "闘牛士",
    link: "/honntai/sabaiba/tougyuusi/tougyuusi.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/tougyuusi.jpeg",
    alt: "闘牛士の画像",
  },
  {
    name: "マイムアーティスト",
    link: "/honntai/sabaiba/maimu/maimu.html",
    url: "/honntai/images/kyaragazou/sabaibagazou/maimu.jpeg",
    alt: "マイムアーティストの画像",
  },
];

const hunters = [
  {
    name: "復讐者",
    url: "/honntai/images/kyaragazou/hanntagazou/hukusyuusya.jpeg",
    link: "/honntai/hanta/hukusyuusya/hukusyuusya.html",
    alt: "復讐者の画像",
  },
  {
    name: "道化師",
    url: "/honntai/images/kyaragazou/hanntagazou/doukesi.jpeg",
    link: "/honntai/hanta/doukesi/doukesi.html",
    alt: "道化師の画像",
  },
  {
    name: "断罪狩人",
    url: "/honntai/images/kyaragazou/hanntagazou/dannzaikariudo.jpeg",
    link: "/honntai/hanta/dannzaikariudo/dannzaikariudo.html",
    alt: "断罪狩人の画像",
  },
  {
    name: "リッパー",
    url: "/honntai/images/kyaragazou/hanntagazou/rippa.jpeg",
    link: "/honntai/hanta/rippa/rippa.html",
    alt: "リッパーの画像",
  },
  {
    name: "結魂者",
    url: "/honntai/images/kyaragazou/hanntagazou/kekkonnsya.jpeg",
    link: "/honntai/hanta/kekkonnsya/kekkonnsya.html",
    alt: "結魂者の画像",
  },
  {
    name: "芸者",
    url: "/honntai/images/kyaragazou/hanntagazou/geisya.jpeg",
    link: "/honntai/hanta/geisya/geisya.html",
    alt: "芸者の画像",
  },
  {
    name: "白黒無常",
    url: "/honntai/images/kyaragazou/hanntagazou/sirokuromuzyou.jpeg",
    link: "/honntai/hanta/sirokuromuzyou/sirokuromuzyou.html",
    alt: "白黒無常の画像",
  },
  {
    name: "写真家",
    url: "/honntai/images/kyaragazou/hanntagazou/syasinnka.jpeg",
    link: "/honntai/hanta/syasinnka/syasinnka.html",
    alt: "写真家の画像",
  },
  {
    name: "狂眼",
    url: "/honntai/images/kyaragazou/hanntagazou/kyougenn.jpeg",
    link: "/honntai/hanta/kyougenn/kyougenn.html",
    alt: "狂眼の画像",
  },
  {
    name: "黄衣の王",
    url: "/honntai/images/kyaragazou/hanntagazou/ika.jpeg",
    link: "/honntai/hanta/ika/ika.html",
    alt: "黄衣の王の画像",
  },
  {
    name: "夢の魔女",
    url: "/honntai/images/kyaragazou/hanntagazou/yumenomazyo.jpeg",
    link: "/honntai/hanta/yumenomazyo/yumenomazyo.html",
    alt: "夢の魔女の画像",
  },
  {
    name: "泣き虫",
    url: "/honntai/images/kyaragazou/hanntagazou/nakimusi.jpeg",
    link: "/honntai/hanta/nakimusi/nakimusi.html",
    alt: "泣き虫の画像",
  },
  {
    name: "魔トカゲ",
    url: "/honntai/images/kyaragazou/hanntagazou/matokage.jpeg",
    link: "/honntai/hanta/matokage/matokage.html",
    alt: "魔トカゲの画像",
  },
  {
    name: "血の女王",
    url: "/honntai/images/kyaragazou/hanntagazou/marhi.jpeg",
    link: "/honntai/hanta/marhi/marhi.html",
    alt: "血の女王の画像",
  },
  {
    name: "ガードNo.26",
    url: "/honntai/images/kyaragazou/hanntagazou/bonnbonn.jpeg",
    link: "/honntai/hanta/bonnbonn/bonnbonn.html",
    alt: "ガードNo.26の画像",
  },
  {
    name: "使徒",
    url: "/honntai/images/kyaragazou/hanntagazou/sito.jpeg",
    link: "/honntai/hanta/sito/sito.html",
    alt: "使徒の画像",
  },
  {
    name: "ヴァイオリニスト",
    url: "/honntai/images/kyaragazou/hanntagazou/vaiorinisuto.jpeg",
    link: "/honntai/hanta/vaiorinisuto/vaiorinisuto.html",
    alt: "ヴァイオリニストの画像",
  },
  {
    name: "彫刻家",
    url: "/honntai/images/kyaragazou/hanntagazou/tyoukokusi.jpeg",
    link: "/honntai/hanta/tyoukokusi/tyoukokusi.html",
    alt: "彫刻家の画像",
  },
  {
    name: "アンデッド",
    url: "/honntai/images/kyaragazou/hanntagazou/anndetto.jpeg",
    link: "/honntai/hanta/anndetto/anndetto.html",
    alt: "アンデッドの画像",
  },
  {
    name: "破輪",
    url: "/honntai/images/kyaragazou/hanntagazou/harinn.jpeg",
    link: "/honntai/hanta/harinn/harinn.html",
    alt: "破輪の画像",
  },
  {
    name: "漁師",
    url: "/honntai/images/kyaragazou/hanntagazou/ryousi.jpeg",
    link: "/honntai/hanta/ryousi/ryousi.html",
    alt: "漁師の画像",
  },
  {
    name: "蝋人形師",
    url: "/honntai/images/kyaragazou/hanntagazou/rouninngyousi.jpeg",
    link: "/honntai/hanta/rouninngyousi/rouninngyousi.html",
    alt: "蝋人形師の画像",
  },
  {
    name: "悪夢",
    url: "/honntai/images/kyaragazou/hanntagazou/akumu.jpeg",
    link: "/honntai/hanta/akumu/akumu.html",
    alt: "悪夢の画像",
  },
  {
    name: "書記官",
    url: "/honntai/images/kyaragazou/hanntagazou/syokikann.jpeg",
    link: "/honntai/hanta/syokikann/syokikann.html",
    alt: "書記官の画像",
  },
  {
    name: "隠者",
    url: "/honntai/images/kyaragazou/hanntagazou/innzya.jpeg",
    link: "/honntai/hanta/innzya/innzya.html",
    alt: "隠者の画像",
  },
  {
    name: "夜の番人",
    url: "/honntai/images/kyaragazou/hanntagazou/yorunobannninn.jpeg",
    link: "/honntai/hanta/yorunobannninn/yorunobannninn.html",
    alt: "夜の番人の画像",
  },
  {
    name: "フールズ・ゴールド",
    url: "/honntai/images/kyaragazou/hanntagazou/hurugo.jpeg",
    link: "/honntai/hanta/hurugo/hurugo.html",
    alt: "フールズ・ゴールドの画像",
  },
  {
    name: "オペラ歌手",
    url: "/honntai/images/kyaragazou/hanntagazou/operakasyu.jpeg",
    link: "/honntai/hanta/operakasyu/operakasyu.html",
    alt: "オペラ歌手の画像",
  },
  {
    name: "時空の影",
    url: "/honntai/images/kyaragazou/hanntagazou/zikuunokage.jpeg",
    link: "/honntai/hanta/zikuunokage/zikuunokage.html",
    alt: "時空の影の画像",
  },
  {
    name: "足萎えの羊",
    url: "/honntai/images/kyaragazou/hanntagazou/asinaenohituzi.jpeg",
    link: "/honntai/hanta/asinaenohituzi/asinaenohituzi.html",
    alt: "足萎えの羊の画像",
  },
  {
    name: "フラバルー",
    url: "/honntai/images/kyaragazou/hanntagazou/hurabaru.jpeg",
    link: "/honntai/hanta/hurabaru/hurabaru.html",
    alt: "フラバルーの画像",
  },
  {
    name: "雑貨商",
    url: "/honntai/images/kyaragazou/hanntagazou/zakkasyou.jpeg",
    link: "/honntai/hanta/zakkasyou/zakkasyou.html",
    alt: "雑貨商の画像",
  },
  {
    name: "ビリヤードプレイヤー",
    url: "/honntai/images/kyaragazou/hanntagazou/biriyadopureiya.jpeg",
    link: "/honntai/hanta/biriyadopureiya/biriyadopureiya.html",
    alt: "ビリヤードプレイヤーの画像",
  },
  {
    name: "女王蜂",
    url: "/honntai/images/kyaragazou/hanntagazou/zyououbati.jpeg",
    link: "/honntai/hanta/zyououbati/zyououbati.html",
    alt: "女王蜂の画像",
  },
  {
    name: "歯医者",
    url: "/honntai/images/kyaragazou/hanntagazou/haisha.jpeg",
    link: "/honntai/hanta/haisha/haisha.html",
    alt: "歯医者の画像",
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
  true,
);
