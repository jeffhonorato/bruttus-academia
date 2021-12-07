const btnMobile = document.querySelector(".img-menu");

function toggleMenu() {
    const nav = document.querySelector(".nav-menu")
    nav.classList.toggle("ativo");
}

btnMobile.addEventListener("click", toggleMenu);