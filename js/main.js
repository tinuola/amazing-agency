console.log("js file loaded!");

$(document).ready(function(){

  $('.burger-nav').on('click', function(){
      $('.container nav ul').toggleClass('open');
  });
});
