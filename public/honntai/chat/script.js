// Scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Collapsible functionality
document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible-header");

  collapsibles.forEach((header) => {
    header.addEventListener("click", function () {
      const collapsible = this.parentElement;
      collapsible.classList.toggle("active");
    });
  });

  // Animate skill bars
  const skillBars = document.querySelectorAll(".skill-progress");
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = "0%";
        setTimeout(() => {
          entry.target.style.width = width;
        }, 200);
      }
    });
  }, observerOptions);

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });

  // Add fade-in animation on scroll
  const fadeElements = document.querySelectorAll(".section-card");
  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => {
    fadeObserver.observe(element);
  });
});
