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


    $('.best_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:3000,
        fade:true,
        dots:true,
    });


    $('.best_video01').YTPlayer({
        videoURL:'https://youtu.be/1n9dsTyK_ds',
        containment:'.mv01',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });

    $('.best_video02').YTPlayer({
        videoURL:'https://youtu.be/YLM9EMPG4kk',
        containment:'.mv02',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });


    $('.tabmenu>li').on('click', function(){

        var idx= $(this).index();
        console.log(idx);
        $(this).addClass('on').siblings().removeClass('on');
        $('.tabcontent_list').eq(idx).addClass('on').siblings().removeClass('on');
        
    });


    $('.tab_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        slidesToShow:4,
    });

    $('.type_prd .xi-angle-left').on('click',function(){
        $('.tab_slider').slick('slickPrev');
    });
    $('.type_prd .xi-angle-right').on('click',function(){
        $('.tab_slider').slick('slickNext');
    });

    $('.type_prd .filter_list>li').on('click',function(){
        $('.filter_list>li span').addClass('on').siblings().remove('on');
    });




})