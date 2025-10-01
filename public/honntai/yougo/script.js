// 検索機能
const searchInput = document.getElementById("searchInput");
const termCards = document.querySelectorAll(".term-card");
const filterTabs = document.querySelectorAll(".filter-tab");
const categorySections = document.querySelectorAll(".category-section");

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  termCards.forEach((card) => {
    const termName = card.querySelector(".term-name").textContent.toLowerCase();
    const termDescription = card
      .querySelector(".term-description")
      .textContent.toLowerCase();

    if (termName.includes(searchTerm) || termDescription.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// フィルター機能
filterTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const category = this.dataset.category;

    // アクティブタブの切り替え
    filterTabs.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    // カテゴリー表示の切り替え
    if (category === "all") {
      categorySections.forEach((section) => {
        section.style.display = "block";
      });
    } else {
      categorySections.forEach((section) => {
        if (section.dataset.category === category) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    }
  });
});

// トップに戻るボタン
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
