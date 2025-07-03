function filterCollabs(type) {
  const cards = document.querySelectorAll(".collab-card");

  cards.forEach((card) => {
    card.style.display = "block"; // 一旦すべて表示

    if (type === "ongoing" && !card.classList.contains("ongoing")) {
      card.style.display = "none";
    }
    if (type === "past" && !card.classList.contains("past")) {
      card.style.display = "none";
    }
  });
}

// script.js
document.querySelectorAll(".toggle-title").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// JavaScriptによる「もっと見る」機能
document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.getElementById("load-more-btn");
  const hiddenItems = document.querySelectorAll(".update-item.hidden");

  let currentIndex = 0; // 現在表示している記事のインデックス
  const itemsPerClick = 3; // 1回で表示する記事数

  loadMoreBtn.addEventListener("click", () => {
    for (let i = currentIndex; i < currentIndex + itemsPerClick; i++) {
      if (hiddenItems[i]) {
        hiddenItems[i].classList.remove("hidden");
      }
    }
    currentIndex += itemsPerClick;

    // すべて表示されたら「もっと見る」を非表示にする
    if (currentIndex >= hiddenItems.length) {
      loadMoreBtn.style.display = "none";
    }
  });
});
