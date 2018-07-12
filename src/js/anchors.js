export function anchors() {
  $('a[href*="#"]').not('[href="#"]').on('click', function(e) {
    const $header = $('.header');
    let headerHeight = $header.height();
    
    let scrollTarget;
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      scrollTarget = $(this.hash);
      scrollTarget = scrollTarget.length ? scrollTarget : $('#' + this.hash.slice(1));
    }
    
    if(!$header.hasClass('header--small') && scrollTarget.attr('id') !== 'Main') {
      headerHeight = 80;
    }
    

    if (scrollTarget.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: scrollTarget.offset().top - headerHeight + 1
      }, 500, function() {
        //focus change
        let $target = $(scrollTarget);
        $target.focus();
      });
    }
  });
}