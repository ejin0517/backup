$(function(){
//-----------------------

$('#header .search').hide();
$('#header .search_icon').on('click', function(){
    $('#header .search').slideToggle();
});

$('.search .xi-close').on('click', function(){
    $('#header .search').slideUp();
})

$('.main_visual').slick({
        arrows:false,
        autoplay:true,
        fade:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
});

$('.arrow i.xi-angle-left-min').on('click', function(){
    $('.main_visual').slick('slickPrev');
});
$('.arrow i.xi-angle-right-min').on('click', function(){
    $('.main_visual').slick('slickNext');
});

$('.slider .news_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    slidesToShow:3,
    centerMode:true,
});

$('.news_slider figure').eq(4).addClass('on');
$('.news_slider').on('afterChange',function(e,s,c){
    $('.news_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});


$( "#datepicker" ).datepicker();

$('.family_btn').on('click', function(){
    $('.familysite').slideToggle();
    $('.family_btn i').toggleClass('on');
});


//--------------------------
})