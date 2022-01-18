$(function(){
//-------------------------------

new fullpage('#fullpage', {
    anchors: ['main', 'project01', 'project02', 'project03', 'project04', 'project05', 'project06', 'profile'],
    keyboardScrolling: true,
    responsiveWidth:769,

    afterLoad: function(origin,destination){ 
      $(this).eq(destination.index).addClass('on').siblings().removeClass('on');

    }


  });

  $('.gnb .dot').on('click', function(){
    $(this).addClass('on');
    $(this).parent().siblings().find('.dot').removeClass('on');
  });

  //var idx= $('.section').index();
  //$('.pg').text(idx+1);

 // let type1 = new Typed ('#slogan_txt01', {
 //   strings: ['GROVE STORE'],
  //  typeSpeed: 200,
  //  backSpeed: 200,
  //  smartBackspace: true,
  //  cursorChar: '',
  //  loop: true,

//});

 // let type2 = new Typed ('#slogan_txt02', {
 //   strings: ['AUDI KOREA'],
  //  typeSpeed: 200,
 //   backSpeed: 200,
 //   smartBackspace: true,
  //  cursorChar: '',
  //  loop: true,

//});

  let type3 = new Typed ('#slogan_txt03', {
    strings: ['NARS'],
    typeSpeed: 200,
    backSpeed: 200,
    smartBackspace: true,
    cursorChar: '',
    loop: true,

});

  let type4 = new Typed ('#slogan_txt04', {
    strings: ['RECTO'],
    typeSpeed: 200,
    backSpeed: 200,
    smartBackspace: true,
    cursorChar: '',
    loop: true,

});

//-------------------------------
})