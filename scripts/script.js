$("#slides").slidesjs({
        width: 940,
        height: 528,
        navigation: {
      active: false,
      effect: "slide"
    },
    pagination: {
      active: false,
      effect: "slide"
    },
        play: {
      active: false,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 3000,
        // [number] Time spent on each slide in milliseconds.
      auto: true,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    }
      });

//preloader
jQuery(document).ready(function($) {
$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
  $(".headerCircle").css("visibility","visible");
  $(".headerCircle").addClass("animated bounceInDown")
  setTimeout(function(){
   $(".logo").css("visibility","visible");
    $(".logo").addClass("animated fadeIn")
  }, 1000);
  setTimeout(function(){
    $(".mainBody").css("visibility","visible");
    $(".mainBody").addClass("animated fadeIn")
  }, 2000);
  setTimeout(function(){
    swal({   title: "Sign Up to recieve our newsletters!",   text: "We don't spam.",   type: "input",   showCancelButton: true,   closeOnConfirm: true,   animation: "slide-from-top",   inputPlaceholder: "Email" });
  }, 6000);
});
});

//page navigation
$(".news").on("click",function(){
  window.location = "news.html"
})
$(".home").on("click",function(){
  window.location = "index.html"
})

//footer
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $(".footer").css('visibility',"visible");
       $(".footer").fadeIn()
       $(".footer").addClass(" animated fadeInUp")
      console.log("bottom")
   }
});
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){//downscroll
     console.log("downscroll");

     $(".header2").removeClass("animated fadeInDown");
     $(".header2").addClass("animated fadeOutUp");

   } else { //upscroll
     console.log("upscroll");
     $(".footer").fadeOut()
     $(".footer").removeClass(" animated fadeInUp")
     $(".header2").removeClass("animated fadeOutUp");
     $(".header2").addClass("animated fadeInDown");
   }
   lastScrollTop = st;
});


//header transformation
var first2 = true;
window.onscroll = function(e){
if ($(window).scrollTop() >= 350){
  if (first2){
  $(".headerCircle").fadeOut()
  $(".logo").fadeOut()
  $(".header2").css("visibility","visible");
}
}
};
$(".poster").hover(function(){
  $(this).addClass("animated flipInX");
  $(this).attr("src","img/posters/buniyaad.jpg");
})
$(".poster").mouseout(function(){
  $(this).removeClass("animated flipInX");
  $(this).attr("src","img/posters/buniyaad.jpg")
})
$(".headerCircle2").on("click",function(){
  window.location = "index.html"
})
