$(function (){
//--------------------------------

$('.header .search').on('click', function(){
    $('.search_open').toggleClass('on');
});

$('.header .xi-close').on('click', function(){
    $('.search_open').removeClass('on');
});


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });


  $('.new i.xi-apps').on('click', function(){
      $('.item_list figure').removeClass('on');
  });
  $('.new i.xi-border-all').on('click', function(){
      $('.item_list figure').addClass('on');
  });

  $('.best .best_menu li').on('click', function(){
      $(this).addClass('on').siblings().removeClass('on');
      let idx=$(this).index();
      //console.log(idx);
      $('.best_slider').slick('slickGoTo', idx)
  })

  $('.best_slider').slick({
      arrows:false,
      autoplay:false,
      speed:3000,
  });

  $('.arrow_left').on('click', function(){
      $('.best_slider').slick('slickPrev');
  });
  $('.arrow_right').on('click', function(){
      $('.best_slider').slick('slickNext');
  });

  $('.st_slider').slick({
      arrows:false,
      autoplay:true,
      asNavFor:'.st_slider',
  });

  $('.xi-angle-left-thin').on('click', function(){
    $('.st_slider').slick('slickPrev');
});
$('.xi-angle-right-thin').on('click', function(){
    $('.st_slider').slick('slickNext');
});


//----shop.php
$('.sh_best_slider').slick({
    arrows:false,
    autoplay:true,
    speed:3000,
    slidesToShow:4,
});

$('.arrow_btn .xi-angle-left').on('click', function(){
    $('.sh_best_slider').slick('slickPrev');
});
$('.arrow_btn .xi-angle-right').on('click', function(){
    $('.sh_best_slider').slick('slickNext');
});

$('.category li').on('click', function(){
    $(this).toggleClass('on').siblings().removeClass();
});

$('.page_number ol li').on('click', function(){
    $(this).toggleClass('on').siblings().removeClass();
});


AOS.init({
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });

//-----------------------------

$('.header nav>ul>li>a').on('click', function(){
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.submenu').slideUp();
});

$('.menubar').on('click', function(){
    $(this).toggleClass('on');
    $('.header h1').toggleClass('on');
    $('.header nav').toggleClass('on');

});

$(window).on('load resize', function() { 		
    if($(window).width() < 768) { 			
        $('.st_slider').slick('unslick'); 		
    }else{ 			
        slider.not('.slick-initialized').slick(slickOptions); 		
    } 
});

$(window).on('resize', function(){
    if($(window).width()>768)
        $('.menu').removeAttr("style");
        $('.st_slider').removeAttr('unslick');
    
   });

    

//--------------------------------
})