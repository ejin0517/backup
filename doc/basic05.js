$(function(){
//--------------------------------

$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp();
   // $('#top_banner').hide();//
});

$('#main_visual .main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000, //기본이 3000 (3초)
    pauseOnHover:false,
    pauseOnFocus:false,
});

//-----------------------------------
});