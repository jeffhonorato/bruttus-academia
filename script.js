const btnMobile = document.querySelector(".img-menu-mobile");

function toggleMenu() {
    const nav = document.querySelector(".nav-menu")
    nav.classList.toggle("ativo");
}

btnMobile.addEventListener("click", toggleMenu);