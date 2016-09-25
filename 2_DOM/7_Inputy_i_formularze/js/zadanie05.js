/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var formButton = document.querySelector('form button');

    var inputEmail = document.querySelector('input#email');
    var inputName = document.querySelector('input#name');
    var inputSurname = document.querySelector('input#surname');
    var inputPass1 = document.querySelector('input#pass1');
    var inputPass2 = document.querySelector('input#pass2');
    var ckbx = document.querySelector('input#agree');




    formButton.addEventListener('click', function (event) { // event potrzebny, żeby wstrzymać w przypadku złej walidacji formularza. 
        var valueEmail = inputEmail.value;
        if (valueEmail.indexOf('@') == -1) { // sprawdzamy, czy nie zawiera
            console.log('Email nie zawiera @');
            event.preventDefault(); // blokujemy wysłanie tylko w przypadku braku walidacji maila. 
        }



        var valueName = inputName.value;
        if (valueName.length <= 5) {
            console.log('Imię ma mniej niż 6 znaków');
            event.preventDefault();
        }

        var valueSurname = inputSurname.value;
        if (valueSurname.length <= 5) {
            console.log('Nazwisko ma mniej niż 6 znaków');
            event.preventDefault();
        }

        var valuePass1 = inputPass1.value;
        var valuePass2 = inputPass2.value;


        if (valuePass1 != valuePass2 || valuePass1.length == 0) {
            console.log('Hasła nie są takie same');
            event.preventDefault();
        }

        if (!ckbx.checked) {
            console.log('Checkbox nieznaznaczony.');
            event.preventDefault();
        }

    });
});

