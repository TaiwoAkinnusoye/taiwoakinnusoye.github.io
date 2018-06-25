    $(document).ready(function(){
          $('.fading').slick({
  dots: false,
  infinite: true,
  speed: 4000,
  fade: true,
  cssEase: 'linear',
autoplay: true
});
});


  $(function(){
      $('.sliding-pics').slick({
infinite: true,
slidesToShow: 4,
slidesToScroll: 3,
autoplay: true,
  autoplaySpeed: 1000
      });
    });


$(function () {
  $('[data-toggle="popover"]').popover()
});
