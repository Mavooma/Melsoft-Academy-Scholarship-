// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("header nav ul");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("mobile-visible");
    });
});
