// ==========================
// ELEMENTS
// ==========================

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// ==========================
// LOAD SAVED THEME
// ==========================

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️";

}

// ==========================
// DARK / LIGHT MODE
// ==========================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});

// ==========================
// HAMBURGER MENU
// ==========================

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// ==========================
// CLOSE MENU AFTER CLICKING A LINK
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});