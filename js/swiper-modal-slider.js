var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 10,
      slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });