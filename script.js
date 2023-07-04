const menu = document.getElementById("menu-icon");
const navBar = document.querySelector(".nav-bar");

menu.addEventListener('click', () => {
menu.classList.toggle('active');
navBar.classList.toggle('active');
});
