/**
 * Created by Jacek on 2016-01-12.
 */
// zrobić funkcję na elementach z ceną. Po dodaniu jakiegoś elementu czyli kliknięcu funkcja od nowa sprawdza wszystko.


document.addEventListener('DOMContentLoaded', function () {

    var checkBoxIfChecked = document.querySelector('input#invoice');
    var divToHide = document.querySelector('div#invoiceData');
    var form = document.querySelector('form');
    var beforeThisPAddADiv = document.querySelector('form p');
    
    checkBoxIfChecked.addEventListener('click', function () {
        var sumOfElements = document.querySelector('form').children.length;
        if (sumOfElements == 5) {
            divToHide.parentNode.removeChild(divToHide);
        } else {
            form.insertBefore(divToHide, beforeThisPAddADiv);
        }
    });
    
    
    console.log('test');
    
    
    
//    checkBoxIfChecked.addEventListener('click', function () {
//        if (divToHide.style.visibility === 'hidden') {
//            divToHide.style.visibility = 'visible';
//        } else {
//            divToHide.style.visibility = 'hidden';
//        }
//    });



});