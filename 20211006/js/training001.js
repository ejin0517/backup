$(function(){

    $(".div1006").on("click",function(){
        $("h1").hide();
    });

    $("#div10062").on("click",function(){
        $("h1").show();
    });

    $(".button01").on("click", function(){
        $("figure").toggleClass("on")
    });
});