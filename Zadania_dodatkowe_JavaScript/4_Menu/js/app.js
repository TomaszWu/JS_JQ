/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('div').classList.add('nav');
    var firstLis = document.querySelectorAll('.nav>ul>li');

    for (var i = 0; i < firstLis.length; i++) {

        // z tego co widzę, to w odróżnieniu od jquery tutaj trzeba wpisywać eventy pojedyńczo?
        firstLis[i].addEventListener('mouseover', function () {
            var innerLu = this.querySelector('ul');
            if (innerLu) {
                innerLu.style.display = 'block';
            }
        });
        firstLis[i].addEventListener('mouseout', function () {
            var innerLu = this.querySelector('ul');
            if (innerLu) {
                innerLu.style.display = 'none';
            }
        });
    }




});