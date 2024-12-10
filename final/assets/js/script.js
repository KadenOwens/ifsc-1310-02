$(document).ready(function() {
    $(window).on('scroll', function() {

        var viewportHeight = $(window).height();

        if ($(this).scrollTop() > viewportHeight/3) {
            $('header h1,header h3').fadeOut(1000);
        } 
        else {
            $('header h1,header h3').fadeIn(1000);
        }
    });
});
