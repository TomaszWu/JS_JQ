/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var test = document.querySelector('ul#list2');

    var btnsList = document.getElementsByClassName('moveBtn');
    for (var i = 0; i < btnsList.length; i++) {
        btnsList[i].addEventListener('click', function () {
            var idToCheck = this.parentElement.parentElement.id;
            switch (idToCheck) {
                case 'list1':
                    var toClone = this.parentElement;
                    var clonedLi = toClone.cloneNode(true);
                    var listToCopy = document.querySelector('#list2');
                    listToCopy.appendChild(clonedLi);
                    toClone.parentNode.removeChild(toClone);
                    break;
                case 'list2':
                    var toClone = this.parentElement;
                    var clonedLi = toClone.cloneNode(true);
                    var listToCopy = document.querySelector('#list1');
                    listToCopy.appendChild(clonedLi);
                    toClone.parentNode.removeChild(toClone);
                    break;
            }
        });
    }
});