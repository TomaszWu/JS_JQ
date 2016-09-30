$(function () {

    var nav = $(document).find('nav');

    var ul = $(document).find('ul.menu');
    var ulPositionTop = ul.position().top;
    console.log(ulPositionTop);
    $(window).scroll(function () {
        var scroll = $(document).scrollTop();
        if (scroll > ulPositionTop) {
            ul.addClass('sticky');
        } else {
            ul.removeClass('sticky');
        }
    });
    $(window).resize(function () {
        if (ul.hasClass('sticky')) {
            var ulPositionTop = ul.position().top;
        } else {
            ulPositionTop = nav.position().top;

            $(window).scroll(function () {
                var scroll = $(document).scrollTop();
                if (scroll > ulPositionTop) {
                    ul.addClass('sticky');
                } else {
                    ul.removeClass('sticky');
                }
            });


        }
    });
});

