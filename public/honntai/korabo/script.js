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
