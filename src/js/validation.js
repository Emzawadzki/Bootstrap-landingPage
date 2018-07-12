export function validation () {
  $('.form').on('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const $contactEls = $('input[id*=js-contact-], textarea[id*=js-contact-]');
    const $contactSuccess = $('#js-contact-success');
    
    $('[id*=js-contact-err]').hide();
    $contactSuccess.hide();

    const nameRe = /^[a-zA-Z0-9_ ]+$/;
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRe = /^[0-9+-]+$/;

    if(!nameRe.test($('#js-contact-name').val())) {
      $('#js-contact-err-name').show();
      isValid = false;
    }
    if(!emailRe.test($('#js-contact-email').val())) {
      $('#js-contact-err-email').show();
      isValid = false;
    }
    if(!phoneRe.test($('#js-contact-phone').val())) {
      $('#js-contact-err-phone').show();
      isValid = false;
    }
    if(!$('#js-contact-message').val()) {
      $('#js-contact-err-message').show();
      isValid = false;
    }

    if(isValid) {
      $contactEls.val('');
      $contactSuccess.show();
    }
  })
}