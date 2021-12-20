// MENU MOBILE
const btnMobile = document.querySelector(".img-menu-mobile");

function toggleMenu() {
    const nav = document.querySelector(".nav-menu")
    nav.classList.toggle("ativo");
}

btnMobile.addEventListener("click", toggleMenu);

// SLIDER GALERIA GLIDER.JS

const slider = document.querySelector(".js-slider-galeria")

new Glider(slider, {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: 2,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });