/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {


    var btn = document.querySelector('.button');
    var ul = document.querySelector('ul.menu');

    var counter = 0;

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var newLi = document.createElement('li');

        //dodajemy tekts

        newLi.innerHTML = 'Element ' + (counter + 1) + ' - w chwili dodania było ' + counter + ' elementów';

        ul.appendChild(newLi);
        counter++;

    });

});