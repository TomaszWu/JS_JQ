$(function () {

    var allH = $('h1');
    var allA = $('p');

    console.log(allH);
    console.log(allA);

    allA.hide();

    allH.on('click', function () {
        console.log('Kliknięcie w h1');
    });

    allH.on('click', function () {
        $(this).next().slideToggle();
    });
});