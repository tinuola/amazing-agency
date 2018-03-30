$(document).ready(function(){

  new WOW().init();

  $('.burger-nav').on('click', function(){
      $('.container nav ul').toggleClass('open');
  });
});
