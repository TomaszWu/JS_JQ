/**
 * Created by Jacek on 2016-01-12.
 */


document.addEventListener('DOMContentLoaded', function () {

    // pobieramy inputa skąd pobieramy nr karty (?) oraz diva, gdzie ona ma być wpisany. 
    var inputCard = document.querySelector('input#card');
    var divType = document.querySelector('div#type');
    // event, ktry będzie walidował każdorazowo po wpisaniu czegoś. 
    inputCard.addEventListener('keyup', function () {
        var currValue = this.value; // aktualna wartość nr karty.
        if ((isVisa(currValue))) {
            divType.innerHTML = 'VISA';
        } else if ((isMC(currValue))) {
            divType.innerHTML = 'MC';
        } else if ((isAE(currValue))) {
            divType.innerHTML = 'AE';
        } else {
            divType.innerHTML = '--';
        }
    });

    // funckje sprawdzające rodzaj karty;

    function isVisa(nr) {
        // nr - numer karty
        if (nr[0] == 4 && nr.length >= 13 && nr.length <= 16) {
            return true;
        }
        return false;
    }

    function isMC(nr) {
        if (nr[0] == 5 && nr.length === 16) {
            return true;
        }
        return false;
    }

    function isAE(nr) {
        if (nr[0] && nr.length === 15 && (nr[1] === 4 || nr[1] === 7)) {
            return true;
        }
        return false;
    }

});


