$(function(){
//--------------------------------

$('#forU').fullpage({
    //navigation: true,
    anchors: ['s01', 's02', 's03', 's04', 's05'], //index name, 내가 준 이름대로 스크롤 내릴때마다 url에 붙음
    afterLoad: function(origin, destination, direction){
         var idx=destination.index;
         console.log(idx); // 0,1,2...
         $('.section').eq(idx).addClass('on').siblings().removeClass('on');

    },
});

//--------------------------------
});