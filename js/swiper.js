  var swiper = new Swiper('.swiper-container', {
      autoHeight: true,
      autoplay: true,
      duration: 1600,
      spaceBetween: 20,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });