$(document).ready(function () {
    var header = $(".head");
    var text = $(".text")
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 30) {
        header.addClass("scrolled");
        text.addClass("text_style");
      } else {
        header.removeClass("scrolled");
        text.removeClass("text_style");
      }
    });
  });