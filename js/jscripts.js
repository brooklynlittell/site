$(document).ready(function() {

    // Navigation fade
    /*
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
    */

    var hideMobileNav = function() {
        $('#offcanvas-navigation').toggleClass('on', false);
        $('#body-shade').toggleClass('on', false);
        $('#nav-menu').toggleClass('on', false);
    };
    var toggleMobileNav = function() {
        $('#offcanvas-navigation').toggleClass('on');
        $('#body-shade').toggleClass('on');
        $('#nav-menu').toggleClass('on');
    };

    // Mobile Nav Show/Hide
    $('#nav-menu').click( function(e){
        e.preventDefault();
        toggleMobileNav();
    });

    // Mobile Nav Hide
    $('#body-shade').click( function(e){
        e.preventDefault();
        hideMobileNav();
    });

    $('#offcanvas-navigation a').click( function(e) {
        //console.log(e.target.hash);
        //e.preventDefault();
        //$(window).scrollTo(e.target.hash, 20);
        hideMobileNav();
    });

    var navigationScroll = function(e) {
        e.preventDefault();
        var id = $(e.currentTarget).attr('href');
        var $dest = $(id);

        $('html,body').animate({
          scrollTop: ($dest.offset().top - $('#navigation').height())
        }, 200);
    };


    $('#navigation a').on('click', function (e) {
        navigationScroll(e);
    });

    $('#offcanvas-navigation a').on('click', function (e) {
        navigationScroll(e);
    });


    // Resume Viewer
    $('#resume-button-bar li a').on('click', function(e) {
        e.preventDefault();

        var id = $(e.currentTarget).attr('href');
        var target = $(id);

        $('#resume-button-bar li a').toggleClass('on', false);
        $(e.currentTarget).toggleClass('on', true);
        $('#resume .resume .section').toggleClass('on', false);
        target.toggleClass('on', true);
    });


    $(window).scrollTop();
});

/* config dom id (optional) + config particles params */
particlesJS('particles', {
  particles: {
    color: '#4383c1',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 2.5,
    size_random: true,
    nb: 100,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#444',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: 0.5
    },
    events: {
      onclick: {
        enable: false,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});