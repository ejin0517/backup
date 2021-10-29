
$(function(){
   //----------------------------------
   
   $('#top_banner .container i.xi-close').on('click', function(){
       $('#top_banner').slideUp();
   })
   
   
   $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        dots:true,
    });

    $('#main_visual .btn .xi-angle-left-thin').on('click', function(){
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual .btn .xi-angle-right-thin').on('click', function(){
        $('.main_slider').slick('slickNext');
    });



    $('#content02 .title i').on('click', function(){
        $('#content02 .more_ex').toggleClass('on')
    });


    $( "#datepicker" ).datepicker();

    $('#content03 .title i').on('click', function(){
        $('#content03 .calendar').toggleClass('on');
    });


    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:2,
    })


    $('#content03 .btn .xi-angle-left-min').on('click',function(){
        $('.pr_slider').slick('slickPrev');
    })
    $('#content03 .btn .xi-angle-right-min').on('click',function(){
        $('.pr_slider').slick('slickNext');
    })


    

    $('#right_banner i.xi-angle-left-min').on('click', function(){
        $('#right_banner').toggleClass('on');
        $('#right_banner i.xi-angle-left-min').toggleClass('on');

    })

   //----------------------------------
})