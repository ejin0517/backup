$(function(){
//-------------------------------------

$('#main_visual').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    dots:true,
    fade:true,
});

$("#mv02").YTPlayer({
    videoURL:'https://youtu.be/NhOmeL1Wg1M',
    containment:'#content04 figure',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false, //control이 안보이게, 보이게하려면 true
});

$('#content04 i.xi-pause').on('click', function(){
    $("#mv01").YTPPause();
});

$('#content04 i.xi-play').on('click', function(){
    $("#mv01").YTPPlay();
});

$('#content04 i.xi-expand').on('click', function(){
    $("#mv01").YTPFullscreen();
});


$('#content05 .keyword strong').on('click', function(){
    $(this).toggleClass('on').siblings().removeClass('on');
})

//-------------------------------------
})