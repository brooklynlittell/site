function fixDiv() {
    var $cache = $('.stickyPanel');
    if($(window).scrollTop() > 100) {
        $cache.css({
            'position': 'fixed',
            'top': '10px'
        });
    } else {
        $cache.css({
            'position': 'relative',
            'top': 'auto'
        });
    }
}
$(window).scroll(fixDiv);
fixDiv();
//@ sourceMappingURL=scripts.js.map
