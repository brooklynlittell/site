var $cache = $('.stickyPanel');
var navHeight = $('.top-bar').height() + 20;
var distance = $cache.offset().top;
var scrollThreshold = distance - navHeight;

function fixDiv() {
    



    if ($cache.length > 0) {
        //var distance = $cache.length ? $cache.offset().top : 0,
        //$window = $(window);
        
        //alert(navHeight + "   " + distance + "  " + scrollThreshold);
        //alert(distance);
        //var offst = this.outerHeight($('.top-bar'));
       // var offst = 0;

        if ($(window).scrollTop() >= scrollThreshold ) {
            $cache.css({ 'position': 'fixed', 'top': navHeight });
            //$('body').css('padding-top', offst);
        }
        else {
            $cache.css({ 'position': 'relative', 'top': 'auto' });
            //alert('Shiiiiiiiiiit');
            //$('body').css('padding-top', '0');
        }
    }
}
$(window).scroll(fixDiv);
fixDiv();