$(function(){
//------------------------

$('.main_visual').slick({
    //arrows:false,
    autoplay:true,
    dots:true,
    prevArrow:'<div class="prev"><i class="xi-arrow-left"></i></div>',  //''작은따옴표안에 따옴표 사용하려면 ""큰따옴표 써야함
    nextArrow:'<div class="next"><i class="xi-arrow-right"></i></div>',

});

//슬라이드 텍스트 효과
$('.main_visual figure').eq(1).addClass('on');

$('.main_visual').on('afterChange', function(e,s,c){
    console.log(c);
    $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
});

//-------------------------
})