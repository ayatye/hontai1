// 第五人格情報発表番組スライダー
(function () {
  // 番組データ（新しい順）
  const programs = [
    {
      title: "第五人格情報発表番組～新バージョン～",
      image:
        "/honntai/images/programsidber/2026sinnbazyon/sinnbazyontaitoru.jpeg",
      url: "/honntai/idv-program-slider/idv-program-slider.html",
      date: "2026.3.6",
    },
    {
      title: "第五人格情報発表番組～2025年クリスマス直前SP～",
      image:
        "/honntai/images/programsidber/2025kurisumasu/kurisumasutaitoru.jpeg",
      url: "/honntai/idv-program-slider/idv-program-slider.html",
      date: "2025.12.19",
    },
    // 今後の番組はここに追加
    // {
    //   title: "第五人格情報発表番組～2025年秋SP～",
    //   image: "images/program-2025-autumn.jpg",
    //   url: "program-2025-autumn.html",
    //   date: "2025.09"
    // },
  ];

  // スライダーHTML生成
  function createSlider() {
    const container = document.createElement("div");
    container.className = "idv-program-slider";
    container.innerHTML = `
      <div class="slider-header">
        <h2>第五人格情報発表番組</h2>
      </div>
      <div class="slider-wrapper">
        <button class="slider-btn prev" aria-label="前へ">‹</button>
        <div class="slider-track">
          ${programs
            .map(
              (program, index) => `
            <div class="slider-item ${index === 0 ? "active" : ""}">
              <a href="${program.url}" class="program-link">
                <div class="program-image">
                  <img src="${program.image}" alt="${program.title}">
                  <div class="program-overlay">
                    <span class="program-date">${program.date}</span>
                  </div>
                </div>
                <div class="program-title">${program.title}</div>
              </a>
            </div>
          `
            )
            .join("")}
        </div>
        <button class="slider-btn next" aria-label="次へ">›</button>
      </div>
      <div class="slider-dots">
        ${programs
          .map(
            (_, index) => `
          <button class="dot ${
            index === 0 ? "active" : ""
          }" data-index="${index}"></button>
        `
          )
          .join("")}
      </div>
    `;

    // スタイル追加
    const style = document.createElement("style");
    style.textContent = `
      .idv-program-slider {
        text-align: center;
        max-width: 1200px;
        padding-left: 2.5cm;
      }
      .slider-header {
        margin-bottom: 30px;
        transform: translateX(-55px);
      }
      .slider-header h2 {
        font-size: 28px;
        color: #333;
        margin: 0;
      }
      .slider-wrapper {
        position: relative;
        overflow: hidden;
      }
      .slider-track {
        display: flex;
        transition: transform 0.4s ease;
      }
      .slider-item {
        min-width: 100%;
        padding: 0 10px;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      .slider-item.active {
        opacity: 1;
      }
      .program-link {
        display: block;
        text-decoration: none;
        color: inherit;
      }
      .program-image {
        position: relative;
        width: 85%;
        margin: 0 auto;
        padding-top: 56.25%;
        background: #f0f0f0;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .program-link:hover .program-image {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      }
      .program-image img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .program-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 15px;
      }
      .program-date {
        display: inline-block;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 14px;
      }
      .program-title {
        margin-top: 15px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: #333;
        transform: translateX(-55px);
      }
      .slider-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255,255,255,0.9);
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 30px;
        cursor: pointer;
        z-index: 10;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        transition: background 0.3s ease;
      }
      .slider-btn:hover {
        background: white;
      }
      .slider-btn.prev {
        left: calc(7.5% + 10px); 
      }
      .slider-btn.next {
        right: calc(7.5% + 10px);
      }
      .slider-dots {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
      }
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ddd;
        border: none;
        cursor: pointer;
        transition: background 0.3s ease;
      }
      .dot.active {
        background: #333;
      }
      .dot:hover {
        background: #666;
      }
      @media (max-width: 768px) {
        .slider-btn {
          width: 40px;
          height: 40px;
          font-size: 24px;
        }
        .program-title {
          font-size: 16px;
          transform: translateX(-45px);
        }
        .idv-program-slider {
        padding-left: 0.5cm;
        }
        .slider-header {
        transform: translateX(-45px);
        }
      }
    `;

    document.head.appendChild(style);
    return container;
  }

  // スライダー機能
  function initSlider(container) {
    let currentIndex = 0;
    const track = container.querySelector(".slider-track");
    const items = container.querySelectorAll(".slider-item");
    const dots = container.querySelectorAll(".dot");
    const prevBtn = container.querySelector(".prev");
    const nextBtn = container.querySelector(".next");

    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      items.forEach((item, i) => {
        item.classList.toggle("active", i === currentIndex);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = (index + programs.length) % programs.length;
      updateSlider();
    }

    prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goToSlide(parseInt(dot.dataset.index));
      });
    });

    // キーボード操作
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
      if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
    });

    // 1つだけの場合はボタンとドットを非表示
    if (programs.length === 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      container.querySelector(".slider-dots").style.display = "none";
    }
  }

  // 初期化
  function init() {
    const targetElement = document.getElementById("idv-program-slider");
    if (targetElement) {
      const slider = createSlider();
      targetElement.appendChild(slider);
      initSlider(slider);
    }
  }

  // DOM読み込み完了後に実行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
