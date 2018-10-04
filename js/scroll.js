
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});
