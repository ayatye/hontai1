// footer.js - 第五録 共通フッター（画像付きキャラクター一覧）
// このファイルを /js/footer.js に配置してください

(function () {
  "use strict";

  // サバイバー一覧データ（画像付き）
  const survivors = [
    {
      name: "幸運児",
      url: "/honntai/sabaiba/kouunzi/kouunzi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kouunzi.jpeg",
    },
    {
      name: "医師",
      url: "/honntai/sabaiba/isi/isi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/isi.jpeg",
    },
    {
      name: "弁護士",
      url: "/honntai/sabaiba/benngosi/benngosi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/benngosi.jpeg",
    },
    {
      name: "空軍",
      url: "/honntai/sabaiba/kuugunn/kuugunn.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kuugunn.jpeg",
    },
    {
      name: "庭師",
      url: "/honntai/sabaiba/niwasi/niwasi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/niwasi.jpeg",
    },
    {
      name: "泥棒",
      url: "/honntai/sabaiba/dorobou/dorobou.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/dorobou.jpeg",
    },
    {
      name: "傭兵",
      url: "/honntai/sabaiba/youhei/youhei.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/youhei.jpeg",
    },
    {
      name: "調香師",
      url: "/honntai/sabaiba/tyoukousi/tyoukousi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/tyoukousi.jpeg",
    },
    {
      name: "占い師",
      url: "/honntai/sabaiba/uranaisi/uranaisi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/uranaisi.jpeg",
    },
    {
      name: "マジシャン",
      url: "/honntai/sabaiba/mazisyann/mazisyann.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/mazisyann.jpeg",
    },
    {
      name: "カウボーイ",
      url: "/honntai/sabaiba/kauboi/kauboi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kauboi.jpeg",
    },
    {
      name: "冒険家",
      url: "/honntai/sabaiba/boukennka/boukennka.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/boukennka.jpeg",
    },
    {
      name: "祭司",
      url: "/honntai/sabaiba/saisi/saisi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/saisi.jpeg",
    },
    {
      name: "機械技師",
      url: "/honntai/sabaiba/kikaigisi/kikaigisi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kikaigisi.jpeg",
    },
    {
      name: "オフェンス",
      url: "/honntai/sabaiba/ofensu/ofensu.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/ofensu.jpeg",
    },
    {
      name: "心眼",
      url: "/honntai/sabaiba/sinngann/sinngann.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/sinngann.jpeg",
    },
    {
      name: "踊り子",
      url: "/honntai/sabaiba/odoriko/odoriko.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/odoriko.jpeg",
    },
    {
      name: "納棺師",
      url: "/honntai/sabaiba/noukannsi/noukannsi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/noukannsi.jpeg",
    },
    {
      name: "探鉱者",
      url: "/honntai/sabaiba/tannkousya/tannkousya.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/tannkousya.jpeg",
    },
    {
      name: "呪術師",
      url: "/honntai/sabaiba/zyuzyutusi/zyuzyutusi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/zyuzyutusi.jpeg",
    },
    {
      name: "野人",
      url: "/honntai/sabaiba/yazinn/yazinn.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/yazinn.jpeg",
    },
    {
      name: "曲芸師",
      url: "/honntai/sabaiba/kyokugeisi/kyokugeisi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kyokugeisi.jpeg",
    },
    {
      name: "一等航海士",
      url: "/honntai/sabaiba/ittoukoukaisi/ittoukoukaisi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/ittoukoukaisi.jpeg",
    },
    {
      name: "バーメイド",
      url: "/honntai/sabaiba/bameido/bameido.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/bameido.jpeg",
    },
    {
      name: "ポストマン",
      url: "/honntai/sabaiba/posutomann/posutomann.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/posutomann.jpeg",
    },
    {
      name: "墓守",
      url: "/honntai/sabaiba/hakamori/hakamori.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/hakamori.jpeg",
    },
    {
      name: "囚人",
      url: "/honntai/sabaiba/syuuzinn/syuuzinn.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/syuuzinn.jpeg",
    },
    {
      name: "昆虫学者",
      url: "/honntai/sabaiba/konntyuugakusya/konntyuugakusya.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/konntyuugakusya.jpeg",
    },
    {
      name: "画家",
      url: "/honntai/sabaiba/gaka/gaka.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/gaka.jpeg",
    },
    {
      name: "バッツマン",
      url: "/honntai/sabaiba/battumann/battumann.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/battumann.jpeg",
    },
    {
      name: "玩具職人",
      url: "/honntai/sabaiba/ganngusyokuninn/ganngusyokuninn.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/ganngusyokuninn.jpeg",
    },
    {
      name: "患者",
      url: "/honntai/sabaiba/kannzya/kannzya.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kannzya.jpeg",
    },
    {
      name: "心理学者",
      url: "/honntai/sabaiba/sinnrigakusya/sinnrigakusya.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/sinnrigakusya.jpeg",
    },
    {
      name: "小説家",
      url: "/honntai/sabaiba/syousetuka/syousetuka.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/syousetuka.jpeg",
    },
    {
      name: "少女",
      url: "/honntai/sabaiba/syouzyo/syouzyo.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/syouzyo.jpeg",
    },
    {
      name: "泣きピエロ",
      url: "/honntai/sabaiba/nakipiero/nakipiero.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/nakipiero.jpeg",
    },
    {
      name: "教授",
      url: "/honntai/sabaiba/kyouzyu/kyouzyu.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kyouzyu.jpeg",
    },
    {
      name: "骨董商",
      url: "/honntai/sabaiba/kottousyou/kottousyou.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kottousyou.jpeg",
    },
    {
      name: "作曲家",
      url: "/honntai/sabaiba/sakkyokuka/sakkyokuka.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/sakkyokuka.jpeg",
    },
    {
      name: "記者",
      url: "/honntai/sabaiba/kisya/kisya.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kisya.jpeg",
    },
    {
      name: "航空エンジニア",
      url: "/honntai/sabaiba/koukuuennzinia/koukuuennzinia.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/koukuuennzinia.jpeg",
    },
    {
      name: "応援団",
      url: "/honntai/sabaiba/ouenndann/ouenndann.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/ouenndann.jpeg",
    },
    {
      name: "人形師",
      url: "/honntai/sabaiba/ningyousi/ningyousi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/ningyousi.jpeg",
    },
    {
      name: "火災調査員",
      url: "/honntai/sabaiba/kasaityousainn/kasaityousainn.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kasaityousainn.jpeg",
    },
    {
      name: "レディファウロ",
      url: "/honntai/sabaiba/redhifauro/redhifauro.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/redhifauro.jpeg",
    },
    {
      name: "騎士",
      url: "/honntai/sabaiba/kisi/kisi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kisi.jpeg",
    },
    {
      name: "気象学者",
      url: "/honntai/sabaiba/kisyougakusya/kisyougakusya.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/kisyougakusya.jpeg",
    },
    {
      name: "弓使い",
      url: "/honntai/sabaiba/yumitukai/yumitukai.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/yumitukai.jpeg",
    },
    {
      name: "脱出マスター",
      url: "/honntai/sabaiba/dassyutumasuta/dassyutumasuta.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/dassyutumasuta.jpeg",
    },
    {
      name: "幻灯師",
      url: "/honntai/sabaiba/genntousi/genntousi.html",
      img: "/honntai/images/kyaragazou/sabaibagazou/genntousi.png",
    },
  ];

  // ハンター一覧データ（画像付き）
  const hunters = [
    {
      name: "復讐者",
      url: "/honntai/hanta/hukusyuusya/hukusyuusya.html",
      img: "/honntai/images/kyaragazou/hanntagazou/hukusyuusya.jpeg",
    },
    {
      name: "道化師",
      url: "/honntai/hanta/doukesi/doukesi.html",
      img: "/honntai/images/kyaragazou/hanntagazou/doukesi.jpeg",
    },
    {
      name: "断罪狩人",
      url: "/honntai/hanta/dannzaikariudo/dannzaikariudo.html",
      img: "/honntai/images/kyaragazou/hanntagazou/dannzaikariudo.jpeg",
    },
    {
      name: "リッパー",
      url: "/honntai/hanta/rippa/rippa.html",
      img: "/honntai/images/kyaragazou/hanntagazou/rippa.jpeg",
    },
    {
      name: "結魂者",
      url: "/honntai/hanta/kekkonnsya/kekkonnsya.html",
      img: "/honntai/images/kyaragazou/hanntagazou/kekkonnsya.jpeg",
    },
    {
      name: "芸者",
      url: "/honntai/hanta/geisya/geisya.html",
      img: "/honntai/images/kyaragazou/hanntagazou/geisya.jpeg",
    },
    {
      name: "白黒無常",
      url: "/honntai/hanta/sirokuromuzyou/sirokuromuzyou.html",
      img: "/honntai/images/kyaragazou/hanntagazou/sirokuromuzyou.jpeg",
    },
    {
      name: "写真家",
      url: "/honntai/hanta/syasinnka/syasinnka.html",
      img: "/honntai/images/kyaragazou/hanntagazou/syasinnka.jpeg",
    },
    {
      name: "狂眼",
      url: "/honntai/hanta/kyougenn/kyougenn.html",
      img: "/honntai/images/kyaragazou/hanntagazou/kyougenn.jpeg",
    },
    {
      name: "黄衣の王",
      url: "/honntai/hanta/ika/ika.html",
      img: "/honntai/images/kyaragazou/hanntagazou/ika.jpeg",
    },
    {
      name: "夢の魔女",
      url: "/honntai/hanta/yumenomazyo/yumenomazyo.html",
      img: "/honntai/images/kyaragazou/hanntagazou/yumenomazyo.jpeg",
    },
    {
      name: "泣き虫",
      url: "/honntai/hanta/nakimusi/nakimusi.html",
      img: "/honntai/images/kyaragazou/hanntagazou/nakimusi.jpeg",
    },
    {
      name: "魔トカゲ",
      url: "/honntai/hanta/matokage/matokage.html",
      img: "/honntai/images/kyaragazou/hanntagazou/matokage.jpeg",
    },
    {
      name: "血の女王",
      url: "/honntai/hanta/marhi/marhi.html",
      img: "/honntai/images/kyaragazou/hanntagazou/marhi.jpeg",
    },
    {
      name: "ガードNo.26",
      url: "/honntai/hanta/bonnbonn/bonnbonn.html",
      img: "/honntai/images/kyaragazou/hanntagazou/bonnbonn.jpeg",
    },
    {
      name: "使徒",
      url: "/honntai/hanta/sito/sito.html",
      img: "/honntai/images/kyaragazou/hanntagazou/sito.jpeg",
    },
    {
      name: "ヴァイオリニスト",
      url: "/honntai/hanta/vaiorinisuto/vaiorinisuto.html",
      img: "/honntai/images/kyaragazou/hanntagazou/vaiorinisuto.jpeg",
    },
    {
      name: "彫刻家",
      url: "/honntai/hanta/tyoukokusi/tyoukokusi.html",
      img: "/honntai/images/kyaragazou/hanntagazou/tyoukokusi.jpeg",
    },
    {
      name: "アンデッド",
      url: "/honntai/hanta/anndetto/anndetto.html",
      img: "/honntai/images/kyaragazou/hanntagazou/anndetto.jpeg",
    },
    {
      name: "破輪",
      url: "/honntai/hanta/harinn/harinn.html",
      img: "/honntai/images/kyaragazou/hanntagazou/harinn.jpeg",
    },
    {
      name: "漁師",
      url: "/honntai/hanta/ryousi/ryousi.html",
      img: "/honntai/images/kyaragazou/hanntagazou/ryousi.jpeg",
    },
    {
      name: "蝋人形師",
      url: "/honntai/hanta/rouninngyousi/rouninngyousi.html",
      img: "/honntai/images/kyaragazou/hanntagazou/rouninngyousi.jpeg",
    },
    {
      name: "悪夢",
      url: "/honntai/hanta/akumu/akumu.html",
      img: "/honntai/images/kyaragazou/hanntagazou/akumu.jpeg",
    },
    {
      name: "書記官",
      url: "/honntai/hanta/syokikann/syokikann.html",
      img: "/honntai/images/kyaragazou/hanntagazou/syokikann.jpeg",
    },
    {
      name: "隠者",
      url: "/honntai/hanta/innzya/innzya.html",
      img: "/honntai/images/kyaragazou/hanntagazou/innzya.jpeg",
    },
    {
      name: "夜の番人",
      url: "/honntai/hanta/yorunobannninn/yorunobannninn.html",
      img: "/honntai/images/kyaragazou/hanntagazou/yorunobannninn.jpeg",
    },
    {
      name: "フールズ・ゴールド",
      url: "/honntai/hanta/hurugo/hurugo.html",
      img: "/honntai/images/kyaragazou/hanntagazou/hurugo.jpeg",
    },
    {
      name: "オペラ歌手",
      url: "/honntai/hanta/operakasyu/operakasyu.html",
      img: "/honntai/images/kyaragazou/hanntagazou/operakasyu.jpeg",
    },
    {
      name: "時空の影",
      url: "/honntai/hanta/zikuunokage/zikuunokage.html",
      img: "/honntai/images/kyaragazou/hanntagazou/zikuunokage.jpeg",
    },
    {
      name: "足萎えの羊",
      url: "/honntai/hanta/asinaenohituzi/asinaenohituzi.html",
      img: "/honntai/images/kyaragazou/hanntagazou/asinaenohituzi.jpeg",
    },
    {
      name: "フラバルー",
      url: "/honntai/hanta/hurabaru/hurabaru.html",
      img: "/honntai/images/kyaragazou/hanntagazou/hurabaru.jpeg",
    },
    {
      name: "雑貨商",
      url: "/honntai/hanta/zakkasyou/zakkasyou.html",
      img: "/honntai/images/kyaragazou/hanntagazou/zakkasyou.jpeg",
    },
    {
      name: "ビリヤードプレイヤー",
      url: "/honntai/hanta/biriyadopureiya/biriyadopureiya.html",
      img: "/honntai/images/kyaragazou/hanntagazou/biriyadopureiya.jpeg",
    },
  ];

  // キャラクターカードを生成（画像付き）
  function generateCharacterCards(characters) {
    return characters
      .map(
        (char) =>
          `<a href="${char.url}" class="character-card">
        <img src="${char.img}" alt="${char.name}" loading="lazy">
        <span class="character-name">${char.name}</span>
      </a>`
      )
      .join("");
  }

  // フッターのHTML構造
  const footerHTML = `
    <footer id="site-footer">
      <div class="footer-content">
        <!-- キャラクター一覧セクション -->
        <div class="character-toggle-section">
          <button class="character-toggle-btn" data-target="footer-survivor-list">
            <span class="toggle-icon">▼</span> サバイバー一覧 (${
              survivors.length
            }体)
          </button>
          <div class="character-grid" id="footer-survivor-list" style="display: none;">
            ${generateCharacterCards(survivors)}
          </div>
        </div>

        <div class="character-toggle-section">
          <button class="character-toggle-btn" data-target="footer-hunter-list">
            <span class="toggle-icon">▼</span> ハンター一覧 (${
              hunters.length
            }体)
          </button>
          <div class="character-grid" id="footer-hunter-list" style="display: none;">
            ${generateCharacterCards(hunters)}
          </div>
        </div>

        <!-- 既存のナビゲーション -->
        <div class="site-footer-navigation" role="navigation" aria-label="フッターナビゲーション">
          <!-- 最新情報セクション -->
          <div class="footer-section">
            <h3>📰 最新情報</h3>
            <ul>
              <li><a href="/honntai/最新情報/最新情報.html">最新アップデート情報</a></li>
              <li><a href="/honntai/tyousei/tyousei.html">キャラ調整・天賦調整</a></li>
              <li><a href="/honntai/ibento/ibento.html">イベント情報</a></li>
              <li><a href="/honntai/korabo/korabo.html">コラボ情報</a></li>
              <li><a href="/honntai/yosou/koraboyosou.html">コラボ予想</a></li>
            </ul>
          </div>

          <!-- 攻略・ランキングセクション -->
          <div class="footer-section">
            <h3>🎯 攻略・ランキング</h3>
            <ul>
              <li><a href="/honntai/gekisaba/gekisaba.html">激アツ最強サバイバー</a></li>
              <li><a href="/honntai/gekiatuhannta/gekiatuhannta.html">激アツ最強ハンター</a></li>
              <li><a href="/honntai/sabaran/sabaran.html">サバイバーランキング</a></li>
              <li><a href="/honntai/hanran/hanran.html">ハンターランキング</a></li>
              <li><a href="/honntai/purozinnkaku/purozinnkaku.html">プロが使う人格</a></li>
              <li><a href="/honntai/kyarakosei/kyarakosei.html">キャラの身体能力</a></li>
            </ul>
          </div>

          <!-- 初心者向けセクション -->
          <div class="footer-section">
            <h3>📚 初心者向け</h3>
            <ul>
              <li><a href="/honntai/sigatu/sigatu.html">初心者におすすめキャラ</a></li>
              <li><a href="/honntai/sigati/sigati.html">初心者〜中級者の5ステップ</a></li>
              <li><a href="/honntai/chat/chat.html">定型文チャット活用ガイド</a></li>
              <li><a href="/honntai/rokka/rokka.html">ロッカーの活用方法</a></li>
              <li><a href="/honntai/yougo/yougo.html">用語集</a></li>
              <li><a href="/honntai/sabazinnkaku/sabazinnkaku.html">内在人格（サバイバー）</a></li>
              <li><a href="/honntai/hantazinnkaku/hantazinnkaku.html">内在人格（ハンター）</a></li>
            </ul>
          </div>

          <!-- モード攻略セクション -->
          <div class="footer-section">
            <h3>🎮 モード攻略</h3>
            <ul>
              <li><a href="/honntai/otogibanasi/otogibanasi.html">森のお伽話 攻略ガイド</a></li>
              <li><a href="/honntai/pennsaki/pennsaki.html">ペン先空想モード 攻略ガイド</a></li>
              <li><a href="/honntai/kopiki/kopiki.html">コピーキャット 攻略ガイド</a></li>
            </ul>
          </div>
        </div>

        <!-- ポリシーリンク -->
        <div class="footer-links">
          <a href="/honntai/puraibasi/puraibasi.html">プライバシーポリシー</a>
          <a href="/honntai/お問い合わせ/お問合せフォーム.html">お問い合わせフォーム</a>
          <a href="/honntai/uneizyouhou/uneizyouhou.html">運営情報</a>
        </div>

        <p>&copy; 2024 第五録 IdentityV 第五人格攻略サイト</p>
      </div>
    </footer>
  `;

  // フッターのCSS
  const footerCSS = `
    /* フッター専用スタイル */
    footer#site-footer {
      background-color: #333;
      color: #fff;
      padding: 40px 20px 20px;
      margin-top: 40px;
      font-size: 13px;
      width: 100%;
    }

    footer#site-footer .footer-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* キャラクター折りたたみセクション */
    footer#site-footer .character-toggle-section {
      margin-bottom: 20px;
      border-bottom: 1px solid #555;
      padding-bottom: 10px;
    }

    footer#site-footer .character-toggle-btn {
      background-color: #444;
      color: #ffd700;
      border: none;
      padding: 12px 20px;
      width: 100%;
      text-align: left;
      font-size: 15px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;
      font-weight: bold;
    }

    footer#site-footer .character-toggle-btn:hover {
      background-color: #555;
    }

    footer#site-footer .character-toggle-btn .toggle-icon {
      display: inline-block;
      transition: transform 0.3s;
      margin-right: 5px;
    }

    footer#site-footer .character-toggle-btn.active .toggle-icon {
      transform: rotate(180deg);
    }

    footer#site-footer .character-grid {
      margin-top: 15px;
      padding: 15px;
      background-color: #2a2a2a;
      border-radius: 4px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 15px;
    }

    footer#site-footer .character-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #ddd;
      padding: 10px;
      background-color: #3a3a3a;
      border-radius: 8px;
      transition: all 0.3s;
    }

    footer#site-footer .character-card:hover {
      background-color: #4a4a4a;
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    footer#site-footer .character-card img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 8px;
      border: 2px solid #555;
      transition: border-color 0.3s;
    }

    footer#site-footer .character-card:hover img {
      border-color: #ffd700;
    }

    footer#site-footer .character-name {
      font-size: 11px;
      text-align: center;
      color: #ddd;
      transition: color 0.3s;
    }

    footer#site-footer .character-card:hover .character-name {
      color: #ffd700;
    }

    /* 既存のナビゲーションスタイル */
    footer#site-footer .site-footer-navigation {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-bottom: 30px;
      margin-top: 30px;
      text-align: left;
    }

    footer#site-footer .footer-section h3 {
      color: #ffd700;
      font-size: 15px;
      margin-bottom: 15px;
      padding-bottom: 8px;
      border-bottom: 2px solid #555;
    }

    footer#site-footer .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    footer#site-footer .footer-section li {
      margin-bottom: 8px;
    }

    footer#site-footer .footer-section a {
      color: #ddd;
      text-decoration: none;
      transition: color 0.3s, padding-left 0.3s;
      display: inline-block;
    }

    footer#site-footer .footer-section a:hover {
      color: #ffd700;
      padding-left: 5px;
    }

    footer#site-footer .footer-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      align-items: center;
      margin: 30px 0 15px;
      padding-top: 20px;
      border-top: 1px solid #555;
      flex-wrap: wrap;
    }

    footer#site-footer .footer-links a {
      color: #bbb;
      text-decoration: none;
      padding: 5px 10px;
      transition: color 0.3s;
      font-size: 12px;
    }

    footer#site-footer .footer-links a:hover {
      color: #fff;
      text-decoration: underline;
    }

    footer#site-footer p {
      margin: 15px 0 0 0;
      padding: 0;
      color: #888;
      font-size: 12px;
      text-align: center;
    }

    /* タブレット対応 */
    @media (max-width: 968px) {
      footer#site-footer .site-footer-navigation {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }

      footer#site-footer .character-grid {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 12px;
      }
    }

    /* モバイル対応 */
    @media (max-width: 768px) {
      footer#site-footer {
        padding: 30px 15px 15px;
        font-size: 12px;
      }

      footer#site-footer .site-footer-navigation {
        grid-template-columns: 1fr;
        gap: 25px;
      }

      footer#site-footer .footer-section h3 {
        font-size: 14px;
      }

      footer#site-footer .footer-links {
        flex-direction: column;
        gap: 12px;
      }

      footer#site-footer .footer-links a {
        padding: 8px 0;
      }

      footer#site-footer .character-grid {
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        gap: 10px;
      }

      footer#site-footer .character-card {
        padding: 8px;
      }

      footer#site-footer .character-card img {
        width: 50px;
        height: 50px;
      }

      footer#site-footer .character-name {
        font-size: 10px;
      }
    }
  `;

  // CSSをページに追加
  function injectCSS() {
    const style = document.createElement("style");
    style.textContent = footerCSS;
    document.head.appendChild(style);
  }

  // フッターをページに追加
  function injectFooter() {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }

  // 折りたたみ機能を追加
  function setupToggle() {
    setTimeout(function () {
      const toggleButtons = document.querySelectorAll(
        "footer#site-footer .character-toggle-btn"
      );

      toggleButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("data-target");
          const targetList = document.getElementById(targetId);

          if (targetList) {
            if (
              targetList.style.display === "none" ||
              targetList.style.display === ""
            ) {
              targetList.style.display = "grid";
              this.classList.add("active");
            } else {
              targetList.style.display = "none";
              this.classList.remove("active");
            }
          }
        });
      });
    }, 100);
  }

  // DOMの読み込みが完了したら実行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      injectCSS();
      injectFooter();
      setupToggle();
    });
  } else {
    injectCSS();
    injectFooter();
    setupToggle();
  }
})();
