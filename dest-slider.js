$(document).ready(function(){
  
  $(".slick-list").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:false,
    pauseOnDotsHover:true,
    cssEase:'linear',
    fade:true,
    draggable:false,
    arrows:false,
    mobileFirst:true,
    swipe:true,
    swipeToSlide:true,
    nextArrow:'<button type="button" class="slick-next">Next</button>',
    prevArrow:'<button type="button" class="slick-next">Prev</button>'
  });
  
});
