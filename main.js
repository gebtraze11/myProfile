$("#hoverAni img").hover(function(){
    
    $(this).addClass("hoverAni")
    $(this).css("animation-play-state","initial")

}, function(){
     $(this).css("animation-play-state","paused")
});

$(".page-content").on( 'scroll', function(event){
    console.log('Event Fired');
    var hT = $('#skills').offset().top,
    hH = $('#skills').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
if (wS > (hT+hH-wH)){
   // console.log('on the view!');
    $('#hoverAni img').css("animation-play-state","initial")
}
    //console.log(event.target)

 });
