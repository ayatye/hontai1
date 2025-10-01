function toggleFaction(header) {
  const content = header.nextElementSibling;
  const isActive = header.classList.contains("active");

  document.querySelectorAll(".faction-header").forEach((h) => {
    h.classList.remove("active");
    h.nextElementSibling.classList.remove("active");
  });

  if (!isActive) {
    header.classList.add("active");
    content.classList.add("active");
  }
}
