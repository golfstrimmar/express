import $ from "jquery";
// ------------------------------------------------


// --------------------------------------------------------------------------
 $(window).scroll(function () {
   var $section = $("section");

   $section.each(function (i, el) {

     var top = $(el).offset().top - 100;
     var bottom = top + $(el).height();
     var scroll = $(window).scrollTop();
     var id = $(el).attr("id");

     if (scroll > top && scroll < bottom) {
       $("a.menu__link").removeClass("menu__link--active");
       $('a[href="#' + id + '"').addClass("menu__link--active");
       $("a.art_inner-vidget-item__link").removeClass("menu__link--active");
       $('a[href="#' + id + '"').addClass("menu__link--active");

     }
   });
 });


$(".art_inner__vidget").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("a").removeClass("menu__link--active");
  $(this).addClass("menu__link--active");
  $("body,html").animate({ scrollTop: top }, 800);
});


$(".menu__link").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
 $("a").removeClass("menu__link--active");
  $(this).addClass("menu__link--active");
$('a[href="#' + id + '"').addClass("menu__link--active");
  $("body,html").animate({ scrollTop: top }, 800);

 setTimeout(function () {
   $(".menu").removeClass("menu-active")
     .find(".header__info")
     .remove();
     $(".info").removeClass("info-active");
   $("body").removeClass("lock");
 }, 1000);


});




 