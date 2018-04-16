$(document).ready(function(){
  //initialize wow
  new WOW().init();

  //fixed navbar color change
  $(window).on('scroll', function(){
    if($(this).scrollTop() > 1){
      $('#navbar-fixed-top').addClass('fixed-nav-color');
    } else {
      $('#navbar-fixed-top').removeClass('fixed-nav-color');
    }
  });

  //hamburger menu
  $('.burger-nav').on('click', function(){
    $('#navbar-fixed-top nav ul').toggleClass('open');
  });

  //smooth scrolling
  $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        let target = this.hash;
        let $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
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
