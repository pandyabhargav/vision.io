// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle the mobile menu
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});

// Get current page URL path
const currentPath = window.location.pathname;

// Add active class to current page link
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

//  SERVICE SECTION SLIDER

// OUR TEAM SLIDER

// FAQ SECTION
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion").forEach((elm) => {
    const button = elm.querySelector(".toggle-button");
    const content = elm.querySelector(".content");
    const arrowIcon = elm.querySelector(".arrow");

    button.addEventListener("click", () => {
      const isHidden = content.classList.toggle("invisible");
      content.style.maxHeight = isHidden
        ? "0px"
        : `${content.scrollHeight + 100}px`;
      content.classList.toggle("pb-5", !isHidden);
      button.classList.toggle("font-semibold");
      arrowIcon.classList.toggle("-rotate-180", !isHidden);
      arrowIcon.classList.toggle("-rotate-90", isHidden);
    });
  });
});
