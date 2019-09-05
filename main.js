$("#hoverAni img").hover(function(){
    $(this).addClass("hoverAni")
    $(this).css("animation-play-state","running")
}, function(){
     $(this).css("animation-play-state","paused")
});

