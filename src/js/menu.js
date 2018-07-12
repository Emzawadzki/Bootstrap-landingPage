export function menu() {
  $('#js-menu-toggle').on('click', function() {
    const $menu = $('#js-nav');
    $menu.slideToggle(400);
    $(this).toggleClass('menu--btn-arrow-up');
  })

  $(window).on('resize', function() {
    if($(this).width() >= 960) {
      $('#js-nav').show();
    } else if ($(this).width() < 960) {
      $('#js-nav').hide();
      $('#js-menu-toggle').removeClass('menu--btn-arrow-up');
    }

  })
}