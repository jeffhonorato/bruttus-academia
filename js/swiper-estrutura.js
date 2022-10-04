var swiper = new Swiper(".estrutura-box", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 150,
      modifier: 8,
      slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });