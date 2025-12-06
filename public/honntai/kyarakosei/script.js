function switchTab(tab) {
  // タブボタンの更新
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active", "red-active");
  });

  // クリックされたボタン
  const clicked = event.target;

  // サバイバー＝青紫、ハンター＝赤
  if (tab === "talents") {
    clicked.classList.add("red-active");
  } else {
    clicked.classList.add("active");
  }

  const introBox = document.querySelector(".intro");

  if (tab === "talents") {
    introBox.style.background = "#fff5f5";
    introBox.style.borderLeft = "5px solid #f44336";
  } else {
    introBox.style.background = "#f8f9ff";
    introBox.style.borderLeft = "5px solid #667eea";
  }

  const title = document.querySelector("h1");
  if (title) {
    if (tab === "talents") {
      title.style.color = "#f44336"; // 赤
    } else {
      title.style.color = "#667eea"; // 青紫
    }
  }

  // タブコンテンツ切替
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const allButtons = document.querySelectorAll(".show-more-btn");

  allButtons.forEach((button) => {
    const list = button
      .closest(".ability-group")
      .querySelector(".character-list");
    const items = list.querySelectorAll(".character-item");
    const visibleCount = 3;

    // 最初は3つ目以降を非表示
    for (let i = visibleCount; i < items.length; i++) {
      items[i].classList.add("hidden");
    }

    // ボタンのクリックイベント
    button.addEventListener("click", () => {
      const hiddenItems = list.querySelectorAll(".character-item.hidden");
      const isHidden = hiddenItems.length > 0;

      if (isHidden) {
        // 全部表示
        items.forEach((item) => item.classList.remove("hidden"));
        button.textContent = "閉じる";
      } else {
        // 3つ目以降を再び非表示
        for (let i = visibleCount; i < items.length; i++) {
          items[i].classList.add("hidden");
        }
        button.textContent = "もっと見る";
      }
    });
  });
});
