$(function(){
    //-----------------------

    //메인슬라이드
$('.main_slider').slick({
    arrows:false, //버튼이 없어짐//
    autoplay:true,
    pauseOnHover:false,
});


    //제품슬라이드
$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:3, //몇개씩 보이도록 하는지//
    dots:true, //밑에 점이 나오도록//


});

$('#content01 .btn i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});

$('#content01 .btn i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
});



    //-----------------------------
})