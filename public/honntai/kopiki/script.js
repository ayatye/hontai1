// script.js
document.querySelectorAll(".toggle-title").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
