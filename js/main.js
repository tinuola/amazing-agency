$(document).ready(function(){
  //
  new WOW().init();

  //hamburger menu
  $('.burger-nav').on('click', function(){
      $('.container nav ul').toggleClass('open');
  });

  //smooth scrolling
  $('a[href*="#"]').on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

  //hover effect on portfolio section images
  $('.portfolio-imgs').on('mouseenter', function(){
    $(this).children().fadeIn(400).css('display', 'inherit');
  }).on('mouseleave', function(){
    $('.hide').css('display', 'none');
  });

  //animate stats section counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
    offset: 100,
    beginAt: 0
  });

});
