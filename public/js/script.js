(function(){
  $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
})();

