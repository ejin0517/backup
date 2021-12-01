$(function(){

    $('.fullpg').fullpage();

    $('header .open i.xi-bars').on('click', function(){
        $('header .menu').addClass('on');
    });
    $('header .menu .xi-close').on('click', function(){
        $('header .menu').removeClass('on');
    });

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
        //console.log(idx);
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



    //section04 - product type

    $('.type_prd .xi-angle-left').on('click',function(){
        $('.tab_slider').slick('slickPrev');
    });
    $('.type_prd .xi-angle-right').on('click',function(){
        $('.tab_slider').slick('slickNext');
    });


    $('.type_prd .search i.xi-filter').on('click', function(){
        $('.type_prd .filter').addClass('on');
    });

    $('.type_prd .filter .filter_list .sub>li').on('click',function(){
        var idx= $(this).index();
        console.log(idx);
        $(this).toggleClass('on').siblings().removeClass('on');
       $(this).parent().siblings().removeClass('on');
    });

    $('.type_prd .filter .btn').on('click', function(){
        $('.type_prd .filter').removeClass('on');
    })


    $('.collection .content .col').on('click', function(){
        $(this).next('.col_des').addClass('on').siblings().removeClass('on');
    });



})