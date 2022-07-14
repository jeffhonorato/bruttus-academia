const menuMobile = document.querySelector(".js-menu-mobile");
const navMenu = document.querySelector(".nav__menu");


menuMobile.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});