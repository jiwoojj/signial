jQuery(document).ready(function () {




  $(window).on("scroll", function () {

    if ($(document).scrollTop() > 0) {
      $('header').css({
        'background-color': 'rgba(0,0,0,0.6)'
      });
    } else {
      $('header').css({
        'background': 'none'
      });
    }

  });







  $(".gnb").css("display", "none");


  $(".fa-bars").on('click', function (event) {
    $(".gnb").stop().slideDown(300);

  });

  $(".fa-xmark").on('click', function (event) {
    $(".gnb").stop().slideUp(300);

  });




  // mainslide (fade in, out)
  $(function () {

    let currentIndex = 0;
    $(".slide_wrap li").hide().first().show();

    setInterval(function () {
      let nextIndex = (currentIndex + 1) % 3;
      $(".slide_wrap li").eq(currentIndex).fadeOut(1000);
      $(".slide_wrap li").eq(nextIndex).fadeIn(1000);

      currentIndex = nextIndex;

    }, 2000);
  });







  // package_wrap
  let left = 0;

  $(".left_btn").on('click', function (event) {
    if (left < 0) {
      left += 100;
      $(".package_wrap").css("margin-left", left + "%");
    }

  });

  $(".right_btn").on('click', function (event) {
    if (left > -100) {
      left -= 100;
      $(".package_wrap").css("margin-left", left + "%");
    } else if (left > -200) {
      left -= 100;
      $(".package_wrap").css("margin-left", left + "%");
    } else if (left > -300) {
      left += 200;
      $(".package_wrap").css("margin-left", left + "%");
    }

  });




  // dining slide
  $(function () {

    let currentIndex = 0;
    $(".dining_img li").hide().first().show();

    setInterval(function () {
      let nextIndex = (currentIndex + 1) % 3;
      $(".dining_img li").eq(currentIndex).fadeOut(1000);
      $(".dining_img li").eq(nextIndex).fadeIn(1000);

      currentIndex = nextIndex;

    }, 2000);
  });








  // dining
  $(window).scroll(function () {

    let winH = $(window).height();
    let winT = $(window).scrollTop();
    let sec = $('.action');
    let secTop = sec.offset().top;
    let secH = sec.height();


    if (secTop - winH / 2 <= winT && secTop + secH > winT) {
      sec.addClass('active');
    } else {
      sec.removeClass('active');
    }

  });






  // attractions
  $(window).scroll(function () {

    let winH = $(window).height();
    let winT = $(window).scrollTop();
    let sec2 = $('.action2');
    let sec2Top = sec2.offset().top;
    let sec2H = sec2.height();


    if (sec2Top - winH / 2 <= winT && sec2Top + sec2H > winT) {
      sec2.addClass('active');
    } else {
      sec2.removeClass('active');
    }

  });










});