$(function(){
//-----------------------

$('.main_visual').slick({
    arrows:false,
    autoplay:true,
    fade:true,
    speed:3000,
    pauseOnFocus:false,
    pauseOnHover:false,
});

$('.left .banner_slider').slick({
    dots:true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000.
});

$('.depart_mid').hide();
$('.depart_top .btn').on('click', function(){
    $('.depart_mid').slideToggle();
});

$('.media .tabmenu .menu>ul>li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
})

$('.menu ul>li').on('click', function(){

    var idx= $(this).index();
    //console.log(idx);
    $(this).addClass('on').siblings().removeClass('on');
    $('.content .con').eq(idx).addClass('on').siblings().removeClass('on');
    
});


$('.main_bn_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnFocus:false,
    pauseOnHover:false,
});


$(".mv01").YTPlayer({
    videoURL:'https://youtu.be/v7j2BMefsm8',
    containment:'.mv01 figure',
    autoPlay:true,
    mute:true, 
    abundance:0,
    startAt:0, 
    opacity:1,
    showControls:false, //control이 안보이게, 보이게하려면 true
});

$('.video01 i.xi-pause').on('click', function(){
    $(".mv01").YTPPause();
});

$('.video01 i.xi-play').on('click', function(){
    $(".mv01").YTPPlay();
});

$('.video01 i.xi-expand-square').on('click', function(){
    $(".mv01").YTPFullscreen();
});


$(".mv02").YTPlayer({
    videoURL:'https://youtu.be/DzVmzMf7C_U',
    containment:'.mv02 figure',
    autoPlay:true,
    mute:true, 
    startAt:0, 
    abundance:0,
    opacity:1,
    showControls:false, //control이 안보이게, 보이게하려면 true
});

$('.video02 i.xi-pause').on('click', function(){
    $(".mv02").YTPPause();
});

$('.video02 i.xi-play').on('click', function(){
    $(".mv02").YTPPlay();
});

$('.video02 i.xi-expand-square').on('click', function(){
    $(".mv02").YTPFullscreen();
});

//-------------------------
})