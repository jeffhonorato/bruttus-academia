var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 90,
      modifier: 9,
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