/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    var ul = document.querySelector('#taskList');

    var inputTask = document.getElementById('#taskInput');
    var input = document.getElementById('taskInput');
    var addTaskButton = document.getElementById('addTaskButton');
    var removeButton = document.getElementById('removeFinishedTasksButton');




    document.addEventListener('click', function (event) {

        if (event.target.innerHTML == 'Complete') {
            event.target.parentElement.classList.toggle('red');
            event.target.classList.toggle('done');
            checkTheLenght();
        } else if (event.target.innerHTML == 'Delete') {
            var toDelete = event.target.parentElement;
            toDelete.parentNode.removeChild(toDelete);
            checkTheLenght();
        } else if (event.target.id == 'removeFinishedTasksButton') {
            var allLisToDelete = document.querySelectorAll('.done');
            for (var y = 0; y < allLisToDelete.length; y++) {

                var liToDelete = allLisToDelete[y].parentElement;
                liToDelete.parentNode.removeChild(liToDelete);
                checkTheLenght();
            }
        } else if (event.target.id == 'addTaskButton') {
            if (ifTrue(input.value)) {
                var test = ifTrue(input.value);
                var beforeThisLiANewElementShouldBeAdded = document.querySelector('#taskList li');
                var newLi = document.createElement('li');
                var newH = document.createElement('h1');
                var newBtnDlt = document.createElement('button');
                var newBtnCnsl = document.createElement('button');
                var toThisLiHAndTwoButtonsWillBeAdded = ul.insertBefore(newLi, beforeThisLiANewElementShouldBeAdded);
                toThisLiHAndTwoButtonsWillBeAdded.appendChild(newH).innerHTML = input.value;
                var newButtonAdded1 = toThisLiHAndTwoButtonsWillBeAdded.appendChild(newBtnDlt).innerHTML = 'Delete';
                newButtonAdded1.innerHTML = 'Delete';
                newButtonAdded1.innerHTML = 'Delete';
                var newButtonAdded2 = toThisLiHAndTwoButtonsWillBeAdded.appendChild(newBtnCnsl).innerHTML = 'Complete';
                newButtonAdded2.innerHTML = 'Complete';
                checkTheLenght();
        } else {
            alert('Notatka musi miec minimu 5 a maksimum 100 slow!');
            event.preventDefault();
        }
    }
    input.value = '';
    });
    
    
    function checkTheLenght() {
        var spanToFillIn = document.getElementById('counter');
        var allLi = document.querySelectorAll('#taskList li ');
        spanToFillIn.innerHTML = allLi.length;

    }
    function ifTrue(inputValue) {
        var inputToCheck = inputValue.trim();
        if (inputToCheck.length < 5 || inputToCheck.length > 100) {
            return false;
        } else {
            return true;
        }
    }
    

});
