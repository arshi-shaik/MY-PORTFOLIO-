// Dark Mode Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Gallery Lightbox
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightbox.setAttribute("aria-hidden", "false");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
  }
});
