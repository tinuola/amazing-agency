$(document).ready(function(){

  new WOW().init();

  $('.burger-nav').on('click', function(){
      $('.container nav ul').toggleClass('open');
  });

  $('.portfolio-imgs').on('mouseenter', function(){
    $(this).children().fadeIn(400).css('display', 'inherit');

  }).on('mouseleave', function(){
    $('.hide').css('display', 'none');
  });

});
