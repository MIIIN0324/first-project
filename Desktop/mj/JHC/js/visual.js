$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
       loop:true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        autoplay: {
            delay: 4000,
        },
      });
});