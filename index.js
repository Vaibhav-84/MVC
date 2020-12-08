$('.start').click(function(){
    setTimeout(function(){
        $(".box1").addClass("animations1");
    }, 7000);
    setTimeout(function(){
        $(".box1").addClass("animations1-1");
    }, 18000);

    $('.request').addClass('request-animation')

    $('.box2').addClass('animations2')

    $('.box3').addClass('animations3')

    setTimeout(function(){
        $(".model-para").addClass("ma")
    }, 9000);


    setTimeout(function(){
        $(".view-para").addClass("va")
    }, 9000);


    setTimeout(function(){
        $(".http").addClass("http-animation")
    }, 20000);
})