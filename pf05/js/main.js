$(function (){
//--------------------------------

$('.header .search').on('click', function(){
    $('.search_open').addClass('on');
});

$('.header .xi-close').on('click', function(){
    $('.search_open').removeClass('on');
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween:10,
    autoplay:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });


  $('.new i.xi-apps').on('click', function(){
      $('.item_list figure').removeClass('on');
  });
  $('.new i.xi-border-all').on('click', function(){
      $('.item_list figure').addClass('on');
  });

  
AOS.init({});

//--------------------------------
})