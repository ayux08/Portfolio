// ================================================
// Portfolio Template - JavaScript
// ================================================

// -------- Mobile Menu --------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navOverlay = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navOverlay.classList.toggle("active");
  document.body.style.overflow = hamburger.classList.contains("active")
    ? "hidden"
    : "";
}

// Close navbar when link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Close menu when overlay is clicked
if (navOverlay) {
  navOverlay.addEventListener("click", closeMenu);
}

// -------- Dark Mode Toggle --------
const themeSwitch = document.getElementById("switch");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeSwitch.checked = true;
  }
}

themeSwitch.addEventListener("change", switchTheme);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// -------- Navbar Scroll Effect --------
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// -------- Scroll Reveal for Project Cards --------
const cards = document.querySelectorAll(".card");

const revealCards = () => {
  const triggerBottom = window.innerHeight * 0.88;
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.transitionDelay = `${index * 0.08}s`;
      card.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// -------- Dynamic Copyright Year --------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
