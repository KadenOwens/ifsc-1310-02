$(document).ready(function() {
    $(window).on('scroll', function() {

        var viewportHeight = $(window).height();

        if ($(this).scrollTop() > viewportHeight/3) {
            $('h1,h3').fadeOut(1000);
        } 
        else {
            $('h1,h3').fadeIn(1000);
        }
    });
});
