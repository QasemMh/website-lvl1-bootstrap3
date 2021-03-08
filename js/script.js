$(function () {
  /*hide/show navbar on scroll*/

  let currentScroll = 0;
  const navbar = $(".navbar,.contact-link");
  $(window).on("scroll", function () {
    $(this).scrollTop() > currentScroll
      ? navbar.addClass("hide-show-navbar")
      : navbar.removeClass("hide-show-navbar");
    currentScroll = $(this).scrollTop();
  });

  /* hide/show navbar on scroll*/

  /*tabs*/

  $(".tabs ul li").on("click", function () {
    $(this).addClass("selected-li").siblings().removeClass("selected-li");
    $("." + $(this).data("class"))
      .slideDown()
      .siblings()
      .slideUp();
  });

  /*tabs */

  /* */
  $(".contact-questions .box p").on("click", function () {

    $(this).children("i").toggleClass("fa-plus").toggleClass("fa-minus");

    $(this).parent().toggleClass("slide");
   });
  /* */
  
  AOS.init();
});
