$(function(){
//--------------------

$(window).on('scroll', ()=>{
    let sct=$(window).scrollTop();
    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
});

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

$('.main_slider figure').eq(0).addClass('on');
//fade 모드에서는 시작이 0, fade아닐때는 시작이 1
$('.main_slider').on('afterChange',function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});
//--------------------
})