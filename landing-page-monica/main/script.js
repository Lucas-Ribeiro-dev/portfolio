
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

// Open WeChat Modal
// This script opens a modal when the user clicks on the WeChat button in the contact section.
document.querySelector('.wechat-trigger').addEventListener('click', function (event) {
    event.preventDefault(); // impede que o link execute sua ação padrão
    document.getElementById('wechatModal').style.display = 'flex';
});

// Close WeChat Modal
// This script closes the modal when the user clicks on the close button inside the modal.
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('wechatModal').style.display = 'none';
});

// Close WeChat Modal when clicking outside of it
// This script closes the modal when the user clicks outside of it.
window.addEventListener('click', function (event) {
    const modal = document.getElementById('wechatModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
