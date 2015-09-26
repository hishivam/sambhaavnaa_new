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
function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(32.6279269, 76.3431782), //32 6' 26.89'' N 76 34' 25.30'' E
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

$(".hrtc").on("click",function(){
  window.location = "http://www.hrtc.gov.in"
})
$(".irctc").on("click",function(){
  window.location = "http://www.irctc.co.in"
})
$(".redbus").on("click",function(){
  window.location = "http://www.redbus.in"
})
$(".vln").on("click",function(){
  window.location = "volunteer.html"
})
$(".fls").on("click",function(){
  window.location = "fellow.html"
})
$(".dnt").on("click",function(){
  window.location = "campusp.html"
})
$(".mpp").on("click",function(){
  window.location = "events.html"
})
$(".colab").on("click",function(){
  window.location = "collaborate.html"
})
$(".bhillagers").on("click",function(){
  window.location = "volunteer.html"
})
$(".dirtyfellows").on("click",function(){
  window.location = "fellow.html"
})
$(".campus").on("click",function(){
  window.location = "campusp.html"
})
$(".ov").on("click",function(){
  window.location = "ourvision.html"
})
$(".ulc").on("click",function(){
  window.location = "http://" /*URL of UDAAN BLOG */
})
$(".cp").on("click",function(){
  window.location = "campusp.html"
})
$(".r").on("click",function(){
  window.location = "resources.html"
})
$(".vu").on("click",function(){
  window.location = "visitus.html"
})
