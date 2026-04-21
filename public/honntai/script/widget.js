// 第五録 - サイドバーウィジェット
// このファイルを編集するだけで全ページに反映されます

(function () {
  // ========================================
  // データ設定エリア（ここを編集してください）
  // ========================================

  const widgetData = {
    // 人気記事ランキング
    popularArticles: [
      {
        title: "IdentityV 用語一覧",
        url: "/honntai/yougo/yougo.html",
        views: 1044,
        category: "初心者向け",
      },
      {
        title: "コラボ情報",
        url: "/honntai/korabo/korabo.html",
        views: 187,
        category: "コラボ",
      },
      {
        title: "最新アップデート情報",
        url: "/honntai/最新情報/最新情報.html",
        views: 183,
        category: "更新情報",
      },
      {
        title: "サバイバー tier表 2025",
        url: "/honntai/sabaran/sabaran.html",
        views: 97,
        category: "ランキング",
      },
      {
        title: "ビリヤードプレイヤー攻略",
        url: "/honntai/hanta/biriyadopureiya/biriyadopureiya.html",
        views: 56,
        category: "ハンター",
      },
    ],

    // 最近の更新
    recentUpdates: [
      {
        title: "第五人格 アップデート追跡 キャラ調整・天賦調整",
        url: "/honntai/tyousei/tyousei.html",
        date: "2026-4-10",
        tag: "キャラ調整",
      },
      {
        title: "最新アップデート情報",
        url: "/honntai/最新情報/最新情報.html",
        date: "2026-4-9",
        tag: "更新情報",
      },
      {
        title: "最新イベント情報",
        url: "/honntai/ibento/ibento.html",
        date: "2026-3-26",
        tag: "イベント",
      },
      {
        title: "第五人格情報発表番組～新バージョン～",
        url: "/honntai/idv-program-slider/idv-program-slider.html",
        date: "2026-3-12",
        tag: "第五人格情報番組まとめ",
      },
      {
        title: "最新コラボ情報",
        url: "/honntai/korobo/korobo.html",
        date: "2026-2-12",
        tag: "イベント",
      },
      {
        title: "「闘牛士」攻略",
        url: "/honntai/sabaiba/tougyuusi/tougyuusi.html",
        date: "2025-12-29",
        tag: "サバイバー",
      },
      {
        title: "第五人格情報発表番組～2025年クリスマス直前SP～",
        url: "/honntai/idv-program-slider/idv-program-slider.html",
        date: "2025-12-19",
        tag: "新規ページ開設",
      },
      {
        title: "「女王蜂」攻略",
        url: "/honntai/hanta/zyououbati/zyououbati.html",
        date: "2025-11-27",
        tag: "ハンター",
      },
      {
        title: "バランス調整まとめ（2025年11月20日）",
        url: "/honntai/tyousei/tyousei.html",
        date: "2025-11-20",
        tag: "重要",
      },
    ],

    // 今日のおすすめ記事（日替わりで1つ表示）
    recommendedArticles: [
      {
        title: "初心者が中級者になるための完全ガイド",
        url: "/honntai/sigati/sigati.html",
        description:
          "初心者から中級者になるための、確実なステップを詳しく解説！",
        category: "初心者向け",
        image: "/honntai/images/widget/suteppu.jpeg",
      },
      {
        title: "サバイバー最強ランキング2025",
        url: "/honntai/sabaran/sabaran.html",
        description: "現環境で強いサバイバーをランク形式で紹介",
        category: "ランキング",
        image: "/honntai/images/widget/sabaran.jpeg",
      },
      {
        title: "ハンター最強ランキング2025",
        url: "/honntai/hanran/hanran.html",
        description: "現環境で強いハンターをランク形式で紹介",
        category: "ランキング",
        image: "/honntai/images/widget/hanran.jpeg",
      },
      {
        title: "第五人格 キャラクター身体能力の例外一覧",
        url: "/honntai/images/widget//kyarakosei.html",
        description:
          "このページでは、各能力ごとに基準値から外れているキャラクターをまとめて紹介します。",
        category: "キャラクター身体能力",
        image: "/honntai/images/widget/kosei.jpeg",
      },
      {
        title: "森のお伽話モード完全攻略",
        url: "/honntai/otogibanasi/otogibanasi.html",
        description:
          "ルール解説、動物の特殊能力、武器の効果まで完全網羅した攻略ガイド",
        category: "モード攻略",
        image: "/honntai/images/widget/otogibanasi.jpeg",
      },
      {
        title: "コラボ予想",
        url: "/honntai/yosou/koraboyosou.html",
        description: "第五人格の雰囲気にマッチした最高のコラボ候補を徹底分析！",
        category: "予想",
        image: "/honntai/images/widget/zikainokorabo.jpeg",
      },
      {
        title: "激アツ最強サバイバー",
        url: "/honntai/gekisaba/gekisaba.html",
        description: "第五人格 最強サバイバー、今激アツサバイバーを紹介！",
        category: "サバイバー",
        image: "/honntai/images/widget/gekisaba.jpeg",
      },
      {
        title: "激アツ最強ハンター",
        url: "/honntai/gekiatuhannta/gekiatuhannta.html",
        description: "第五人格 最強ハンター、今激アツハンターを紹介！",
        category: "ハンター",
        image: "/honntai/images/widget/gekihan.jpeg",
      },
      {
        title: "第五人格 - 定型文チャット完全活用ガイド",
        url: "/honntai/chat/chat.html",
        description: "野良との連携もチャットで楽々に！！",
        category: "攻略",
        image: "/honntai/images/widget/chat.jpeg",
      },
      {
        title: "初心者おすすめキャラ",
        url: "/honntai/sigatu/sigatu.html",
        description:
          "第五人格始めて何のサバイバー、ハンター使ったら良いのか分からない。という方ランキング形式で使ってほしいキャラを3位まで発表します！！",
        category: "初心者向け",
        image: "/honntai/images/widget/syosinnsya.jpeg",
      },
      {
        title: "サバイバー内在人格完全解説",
        url: "/honntai/sabazinnkaku/sabazinnkaku.html",
        description: "第五人格のサバイバーの内在人格について紹介します。",
        category: "内在人格",
        image: "/honntai/images/widget/sabazinnkaku.jpeg",
      },
      {
        title: "ハンター内在人格完全解説",
        url: "/honntai/hantazinnkaku/hantazinnkaku.html",
        description: "第五人格のハンターの内在人格について紹介します。",
        category: "内在人格",
        image: "/honntai/images/widget/hantazinnkaku.jpeg",
      },
      {
        title: "IdentityV 用語一覧",
        url: "/honntai/yougo/yougo.html",
        description:
          "第五人格では暗黙の了解のように色々な新言語の単語が使われている。そんな用語集を作りました。",
        category: "用語集",
        image: "/honntai/images/widget/yougo.jpeg",
      },
    ],
  };

  // ========================================
  // ウィジェット生成（通常は編集不要）
  // ========================================

  const styles = `
    <style>
      .daigoroku-widget {
        background: #ffffff;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
        max-width: 800px;
        margin-left: 3cm;
        margin-right: 3cm;
      }
      .daigoroku-widget h3 {
        color: #e94560;
        font-size: 18px;
        margin: 0 0 15px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid #e94560;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .daigoroku-widget h3::before {
        content: '▶';
        font-size: 14px;
      }
      .widget-item {
        background: #f8f8f8;
        margin-bottom: 10px;
        border-radius: 8px;
        transition: all 0.3s ease;
        border-left: 3px solid transparent;
        border: 1px solid #e8e8e8;
        position: relative;
      }
      .widget-item > a {
        display: block;
        padding: 12px;
        color: #333333;
        text-decoration: none;
      }
      .widget-item:hover {
        background: #fff5f7;
        border-left-color: #e94560;
        transform: translateX(5px);
        box-shadow: 0 2px 6px rgba(233, 69, 96, 0.15);
      }
      .widget-item a {
        color: #333333;
        text-decoration: none;
        font-size: 14px;
        line-height: 1.5;
      }
      .widget-item a:hover {
        color: #e94560;
      }
      .widget-item-meta {
        color: #666666;
        font-size: 12px;
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .widget-tag {
        background: #e94560;
        color: white;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: bold;
      }
      .widget-category {
        color: #4a9eff;
        font-size: 11px;
        font-weight: 500;
      }
      .widget-views {
        color: #ff8c00;
        font-size: 11px;
        font-weight: 500;
      }
      .widget-rank {
        background: linear-gradient(135deg, #e94560, #ff6b6b);
        color: white;
        width: 24px;
        height: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-weight: bold;
        font-size: 12px;
        margin-right: 10px;
        flex-shrink: 0;
      }
      .widget-item-content {
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }
      .widget-item-text {
        flex: 1;
      }
      .recommended-article {
        background: linear-gradient(135deg, #fff5f7 0%, #ffe8ec 100%);
        padding: 20px;
        border-radius: 12px;
        border: 2px solid #e94560;
        transition: all 0.3s ease;
      }
      .recommended-article:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(233, 69, 96, 0.2);
      }
      .recommended-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
      }
      .recommended-icon {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        object-fit: cover;
        border: 2px solid #e94560;
        flex-shrink: 0;
      }
      .recommended-title {
        color: #333;
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        line-height: 1.4;
      }
      .recommended-description {
        color: #666;
        font-size: 13px;
        line-height: 1.6;
        margin: 10px 0;
      }
      .recommended-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid rgba(233, 69, 96, 0.2);
      }
      .recommended-category {
        background: #e94560;
        color: white;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: bold;
      }
      .recommended-date {
        color: #999;
        font-size: 11px;
      }
      @media (max-width: 768px) {
        .daigoroku-widget {
          padding: 15px;
        }
        .daigoroku-widget {
        margin-left: 10px;
        margin-right: 10px;
      }
      }
    </style>
  `;

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "今日";
    if (diffDays === 1) return "昨日";
    if (diffDays < 7) return `${diffDays}日前`;
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }

  function formatViews(views) {
    if (views >= 10000) return `${(views / 10000).toFixed(1)}万`;
    return views.toLocaleString();
  }

  function generatePopularSection() {
    const items = widgetData.popularArticles
      .map(
        (article, index) => `
      <div class="widget-item">
        <a href="${article.url}">
          <div class="widget-item-content">
            <span class="widget-rank">${index + 1}</span>
            <div class="widget-item-text">
              <div>${article.title}</div>
              <div class="widget-item-meta">
                <span class="widget-category">${article.category}</span>
                <span class="widget-views">👁 ${formatViews(
                  article.views,
                )}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    `,
      )
      .join("");

    return `
      <div class="daigoroku-widget">
        <h3>人気記事ランキング</h3>
        ${items}
      </div>
    `;
  }

  function generateRecentSection() {
    const items = widgetData.recentUpdates
      .map(
        (article) => `
      <div class="widget-item">
        <a href="${article.url}">
          <div>${article.title}</div>
          <div class="widget-item-meta">
            <span class="widget-tag">${article.tag}</span>
            <span>${formatDate(article.date)}</span>
          </div>
        </a>
      </div>
    `,
      )
      .join("");

    return `
      <div class="daigoroku-widget">
        <h3>最近の更新</h3>
        ${items}
      </div>
    `;
  }

  function generateRecommendedSection() {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24,
    );
    const index = dayOfYear % widgetData.recommendedArticles.length;
    const article = widgetData.recommendedArticles[index];

    return `
      <div class="daigoroku-widget">
        <h3>今日のおすすめ記事</h3>
        <a href="${article.url}" style="text-decoration: none; display: block;">
          <div class="recommended-article">
            <div class="recommended-header">
              <img src="${article.image}" alt="${
                article.title
              }" class="recommended-icon" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Crect fill=%22%23e94560%22 width=%2260%22 height=%2260%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2230%22%3E?%3C/text%3E%3C/svg%3E'">
              <h4 class="recommended-title">${article.title}</h4>
            </div>
            <p class="recommended-description">${article.description}</p>
            <div class="recommended-footer">
              <span class="recommended-category">${article.category}</span>
              <span class="recommended-date">${
                today.getMonth() + 1
              }/${today.getDate()} おすすめ</span>
            </div>
          </div>
        </a>
      </div>
    `;
  }

  function insertWidget() {
    const container = document.getElementById("sidebar-widget");
    if (!container) return;

    const widgetHTML = `
      ${styles}
      ${generatePopularSection()}
      ${generateRecentSection()}
      ${generateRecommendedSection()}
    `;

    container.innerHTML = widgetHTML;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertWidget);
  } else {
    insertWidget();
  }
})();
