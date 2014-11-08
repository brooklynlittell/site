$(document).ready(function() {

    // Navigation fade
    $(window).on('scroll', function() {
        var top = $(window).scrollTop();
        var scrollThreshold = $('#welcome').height() - $('#navigation').height();
        if(top >= scrollThreshold) {
            $('#navigation').toggleClass('alt-colors', true);
        }
        else {
            $('#navigation').toggleClass('alt-colors', false);
        }
    });

    $('#nav-menu').click( function(e){
        e.preventDefault();
        $('#offcanvas-navigation').toggleClass( 'on' );
        $('#body-shade').toggleClass('on');
    });

    $('#body-shade').click( function(e){
        e.preventDefault();
        $('#offcanvas-navigation').toggleClass( 'on' );
        $('#body-shade').toggleClass('on');
    });

    $(window).scrollTop();
});