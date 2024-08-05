$(window).on('load', function() {
  $(".preloader").fadeOut();

});
$(document).ready(function() {
  new WOW().init();

  $("#menu-id").click(function(e) {
    e.preventDefault();
    $('.menu-bars .bar').toggleClass('hide-icon');
    $('.menu-bars .times').toggleClass('hide-icon');
    $(".navgition").toggleClass("reset-left");
    $(".img-logo").toggleClass("opacity");
    $(".main-slogen").toggleClass("opacity");
    $(".search-lang-section").toggleClass("opacity");
   
    $(".scroll-down").toggleClass("opacity");
    $("body").toggleClass("overflow");
    $("html").toggleClass("overflow");

});
$(".close-btn").click(function() {
    $(".navgition").removeClass("reset-left");
    $(".menu-bars .bars").toggleClass("open-bars");
    $(".menu-bars .bars").toggleClass("close-bars");
    $("body").removeClass("overflow");
    $("html").removeClass("overflow");
});
$(".overflow").click(function() {
    $(".navgition").hide();
});

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 112) {
          $stickyNav.addClass("fixed-nav", 500);
      } else {
          $stickyNav.removeClass("fixed-nav", 500);
      }
      if (scroll == 0) {
          $stickyNav.removeClass("fixed-nav", 500);
      }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
      lastScroll = scroll;
      if (scroll == 0) {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
  });

  $(".fixed-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").show(200);
    $(".search-section").toggleClass("search-open");
     $('body').addClass('overflow');
    
  
  });
  $(".close-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").hide(200);
    $('body').removeClass('overflow');
  });
   

 

  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          },
          1500
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  })



});