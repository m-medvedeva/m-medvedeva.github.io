$(document).ready(function () {
   $('.menu-burger__header').click(function () {
      $(this).toggleClass('open-menu');
      $('html').toggleClass('fixed-body');
      $('.header__inner').slideToggle('slow');
   });
})