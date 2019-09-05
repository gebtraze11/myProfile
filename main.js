$("#hoverAni img").hover(function () {

    $(this).addClass("hoverAni")
    $(this).css("animation-play-state", "initial")

}, function () {
    $(this).removeClass("hoverAni")


    if ($(this).hasClass('fadeInRight')) {
        $(this).removeClass('fadeInRight')
    } else {
        $(this).removeClass('fadeInLeft')
    };

});

$(".page-content").on('scroll', function (event) {
    console.log('Event Fired');
    var hT = $('#skills').offset().top,
        hH = $('#skills').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
        // console.log('on the view!');


        $('#hoverAni img').css("animation-play-state", "running")
    }
    //console.log(event.target)

});


$('#portfolio img').hover(function(){

}, function(){

}); 
