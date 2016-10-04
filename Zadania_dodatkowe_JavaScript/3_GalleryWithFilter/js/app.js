/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    var imgs = document.querySelectorAll('#gallery img');
    console.log(imgs);


    var btnShow = document.getElementById('showButton');
    var btnHide = document.getElementById('hideButton');
    var input = document.getElementById('tagInput');

    btnShow.addEventListener('click', function () {
        var tag = input.value.trim();

        for (var i = 0; i < imgs.length; i++) {
            var tags = imgs[i].dataset.tag;
            substringToCheck = tag.trim();
            var ifContains = tags.indexOf(substringToCheck);
            if (ifContains !== 0) {
                imgs[i].classList.add('invisible');
            }
            ;
        }


    });

    btnHide.addEventListener('click', function () {
        var tag = input.value.trim();

        for (var i = 0; i < imgs.length; i++) {
            var tags = imgs[i].dataset.tag;
            substringToCheck = tag;
            var ifContains = tags.indexOf(substringToCheck);
            if (ifContains !== 0) {
                imgs[i].classList.remove('invisible');
            }
            ;
        }

        input.value = null;
    });


});