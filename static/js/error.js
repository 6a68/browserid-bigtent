    // XXX keep this resize code in sync with the snippet in server/views/signin.ejs
    window.resizeTo(700, 375);
    setTimeout(function() {
      // resizeTo() will make it too short on IE8: #58, mozilla/browserid#3476.
      // so, measure how short it is, add that to 375, and resize again.
      var dy = 375 - (window.outerHeight || document.documentElement.offsetHeight);
      if (dy > 0) { window.resizeTo(700, 375 + dy); }
    }, 0);

    $('button.cancel').click(function(e) {
      e.preventDefault();
        navigator.id.raiseAuthenticationFailure(
            'user authenticated as wrong user.');
    });

    $('button.continue').click(function(e) {
      e.preventDefault();
      $('#auth_error').hide();
      $.post('/link_accounts_request', {"_csrf": $('[name=csrf_token]').val()});
      $('#link_accounts_prompt').show();
    });

    $('button.close').click(function(e) {
      e.preventDefault();
      window.close();
    });

    $(window).load(function(){
      setMinHeight();
    }).resize(function(){
      setMinHeight();
    });

    function setMinHeight(){
      var windowHeight = $(window).height();
      var headerHeight = $('header').height();
      $('#content').css('minHeight', windowHeight - headerHeight);
    }
