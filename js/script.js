// mobile-menu
$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .headerMenu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
