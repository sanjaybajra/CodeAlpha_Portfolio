const menubar = document.getElementById("menubar");
const navLinks = document.getElementById("navLinks");
const menuIcon = menubar.querySelector("i");

function openMenu() {
  navLinks.classList.add("active");
  menubar.setAttribute("aria-expanded", "true");
  menubar.setAttribute("aria-label", "Close navigation menu");
  menuIcon.classList.replace("fa-bars", "fa-xmark");
}

function closeMenu() {
  navLinks.classList.remove("active");
  menubar.setAttribute("aria-expanded", "false");
  menubar.setAttribute("aria-label", "Open navigation menu");
  menuIcon.classList.replace("fa-xmark", "fa-bars");
}

// Toggle on button click
menubar.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.contains("active") ? closeMenu() : openMenu();
});

// Close when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menubar.contains(e.target)) {
    closeMenu();
  }
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Reset if the screen is resized to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMenu();
});