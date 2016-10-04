/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
 <img src="./images/wrong.png">
 <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function () {
    var ul = document.querySelector('ul');
    ul.classList.add('gallery');



    var allLi = document.querySelectorAll('ul.gallery li');
    var body = document.querySelector('body');

    for (var i = 0; i < allLi.length; i++) {
        allLi[i].addEventListener('click', function () {
            var test = this.querySelector('img').src;

            var newDiv = document.createElement('div');
            var newImg = document.createElement('img');
            var newButton = document.createElement('button');
            newImg.src = test;
            body.appendChild(newDiv);
            newDiv.classList.add('fullScreen');
            newDiv.appendChild(newImg);
            newDiv.appendChild(newButton);
            newButton.classList.add('close');
            newButton.innerHTML = 'Close';
            var newButton = document.querySelector('button.close');
            newButton.addEventListener('click', function () {
                newDiv.parentNode.removeChild(newDiv);

            });

        });
    }






});