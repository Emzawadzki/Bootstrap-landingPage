export function scroll() {
  $(window).on('scroll', e => {
    const $header = $('.header');
    if ($(window).scrollTop() > 80) {
      $header.addClass('header--fixed');
    } else {
      $header.removeClass('header--fixed');
    }
  })
}