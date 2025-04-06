
// NavBar Scroll Effect
// This script adds a class to the navbar when the page is scrolled down 50 pixels or more to hide header logo on mobile devices.
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
