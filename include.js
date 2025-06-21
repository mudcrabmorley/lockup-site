// LOAD HEADER AND FOOTER
function loadHTML(id, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) setTimeout(callback, 0);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header", "header.html", setupMobileMenu);
  loadHTML("footer", "footer.html");
});

// MOBILE MENU
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-mobile-menu");
  const servicesBtn = document.getElementById("mobile-services-btn");
  const servicesDropdown = document.getElementById("mobile-services-dropdown");

  if (menuBtn && mobileMenu && closeBtn) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }

  // Mobile Services Dropdown
  if (servicesBtn && servicesDropdown) {
    servicesBtn.addEventListener("click", () => {
      servicesDropdown.classList.toggle("hidden");
    });
  }
}

// INDEX HERO IMAGE SLIDER
const heroImages = [
  "../images/cropped/IMG_3327.webp",
  "../images/cropped/IMG_3307.webp",
  "../images/cropped/IMG_3315.webp",
  "../images/cropped/IMG_3318.webp",
  "../images/cropped/IMG_3320.webp",
  "../images/cropped/IMG_3322.webp",
  "../images/cropped/IMG_3324.webp",
  "../images/cropped/IMG_0008.webp",
  "../images/cropped/IMG_0009.webp",
  "../images/cropped/IMG_0010.webp",
  "../images/cropped/IMG_3307.webp",
  "../images/cropped/IMG_3308.webp",
  "../images/cropped/IMG_3310.webp",
  "../images/cropped/IMG_3311.webp",
  "../images/cropped/IMG_3313.webp",
  "../images/cropped/IMG_3314.webp",
  "../images/cropped/IMG_3315.webp",
];

const heroImg = document.getElementById("hero-slider-img");
let heroIndex = 0;

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  heroImg.src = heroImages[heroIndex];
}, 3000);
