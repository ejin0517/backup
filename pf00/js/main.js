$(function (){
//----------------------------------------

$('#visual .main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});


$('#content01 #lookbook_list').slick({
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false,
});


$('#content01 i.xi-angle-left-thin').on('click', function(){
    $('#content01 #lookbook_list').slick('slickPrev');
});
$('#content01 i.xi-angle-right-thin').on('click', function(){
    $('#content01 #lookbook_list').slick('slickNext');
});



$('#content03 .collabo_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:true,
    pauseOnFocus:false,
});


$('#content03 .btn_left').on('click', function(){
    $('#content03 .collabo_slider').slick('slickPrev');
});
$('#content03 .btn_right').on('click', function(){
    $('#content03 .collabo_slider').slick('slickNext');
});


//----------------------------------------
})