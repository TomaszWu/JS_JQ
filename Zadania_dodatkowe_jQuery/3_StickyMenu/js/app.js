$(function () {

    var nav = $(document).find('nav');
    var ul = $(document).find('ul.menu');
    var offset = ul.offset();
    $(window).scroll(function () {
        var scroll = $(document).scrollTop();
        if (scroll > 195) {
            ul.addClass('sticky');
        } else {
            ul.removeClass('sticky');
        }
    });
    $(window).resize(function () {
        var ifHasAClass = ul.hasClass('sticky');
        console.log(ifHasAClass);
        if (ifHasAClass == true) {
            var scroll = $(document).scrollTop();
            if (scroll > 195) {

                ul.scrollTop(195);
                console.log('tak');
            } else {

                console.log('nie');
            }
        }
    });
});

