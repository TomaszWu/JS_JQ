/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var tr = document.querySelector('td');
    var allBtns = document.querySelectorAll('a.deleteBtn');
    console.log(allBtns);

    for (var i = 0; i < allBtns.length; i++) {
        allBtns[i].addEventListener('click', function () {
            var elementTodelete = this.parentElement.parentElement;
            elementTodelete.parentNode.removeChild(elementTodelete);
        });
    }
});