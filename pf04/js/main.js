$(function(){

    $('.fullpg').fullpage();

    $('.video .more h2').on('click', function(){
        $('.video .more').toggleClass('on');
    });

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
         if(sct>100) {
             $('.more').css({opacity: 0.0, visibility: "hidden"});

            }
     });

    $('.movie').YTPlayer({
        videoURL:'https://youtu.be/6genllKMf4Y',
        containment:'body',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });


})