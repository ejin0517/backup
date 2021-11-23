$(function (){


    $('#main_visual').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:3000,
        fade:true,
        dots:true,
    });


    $('.bestmenu_slider').slick({
        arrows:false,
        autoplay:true,
        dots:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:3000,
    });


$('.tabmenu ul>li').on('click', function(){

    var idx= $(this).index();
    //console.log(idx);
    $(this).addClass('on').siblings().removeClass('on');
    $('.tab_content_menu').eq(idx).addClass('on').siblings().removeClass('on');
    
});


$('.news_slider').slick({
    arrows:false,
    autoplay:true,
    speed:2000,
    slidesToShow:3,
});


$('#content06 .xi-angle-left-min').on('click',function(){
    $('.news_slider').slick('slickPrev');
});
$('#content06 .xi-angle-right-min').on('click',function(){
    $('.news_slider').slick('slickNext');
});


})