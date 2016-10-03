/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function () {



    var divToHide = document.querySelectorAll('.page-header img');

    function displayNoneAll() {
        for (var i = 0; i < divToHide.length; i++) {
            divToHide[i].style.visibility = 'hidden';

        }
    } 

    displayNoneAll();

// przy wybrani Windows nic się nie pojawia, dopiero po wyborze którejś opcji z kolei działa. 

    var options = document.querySelector('.form-control');
    options.addEventListener('change', function () {
        event.preventDefault();
        console.log(options.value);
        switch (options.value) {
            case('Windows'):
                displayNoneAll();
                divToHide[2].style.visibility = 'visible';
                break;
            case('Os X'):
                displayNoneAll();
                divToHide[0].style.visibility = 'visible';
                break;
            case('Ubuntu'):
                displayNoneAll();
                divToHide[1].style.visibility = 'visible';
                break;
        }
        ;
    });


});





