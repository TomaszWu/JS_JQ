$(function () {


    var btnNext = $('button#nextPicture');
    var btnPrv = $('button#prevPicture');
    var allLi = $('.slider li');
    var index = 0;
    var width = 400;
    $('ul').css('width', 2500 + 'px').css('position', 'relative');

// póki co bez sukcesów. Prosiłbym o pomoc. 


    btnNext.on('click', function () {
        index += 1;
        if (index > 5) {
            index = 0;
        }
        $(allLi[index]).animate({"left": '+=200' + 'px'});
    });
    btnPrv.on('click', function () {
        index += 1;
        if (index > 5) {
            index = 0;
        }
    });

});