$(function (){
//----------------------------------------

$('#visual .main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,

});


$('#content03 .collabo_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
});


$('#content03 .btn_left').on('click', function(){
    $('#content03 .collabo_slider').slick('slickPrev');
});
$('#content03 .btn_right').on('click', function(){
    $('#content03 .collabo_slider').slick('slickNext');
});


//----------------------------------------
})