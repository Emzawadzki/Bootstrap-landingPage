export function scroll() {
  $(window).on('scroll', e => {
    const $header = $('.header');
    if ($(window).scrollTop() > 80) {
      $header.addClass('header--small');
    } else {
      $header.removeClass('header--small');
    }
  })
}