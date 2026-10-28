
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Mobile navigation
menuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a link
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Typing animation
const typingElement = document.getElementById("typing");

const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentRole.substring(0, charIndex);

    let delay = deleting ? 45 : 90;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        delay = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

// Automatic footer year
document.getElementById("year").textContent =
    new Date().getFullYear();
