/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('ul').classList.add('slider');
    
    var firstBut = document.getElementById('nextPicture');
    var secondBut = document.getElementById('prevPicture');
    var ulAll = document.querySelectorAll('ul li');
    var index = 0;
    console.log(ulAll.length - 1);
    for(var i = 0; i < ulAll.length; i++){
        ulAll[index].classList.add('visible');
    }
    
    firstBut.addEventListener('click', function() {
        ulAll[index].classList.remove('visible');
        index += 1;
        if(index >= ulAll.length){
            index = ulAll.length - 1;
        }
        ulAll[index].classList.add('visible');
    });
    secondBut.addEventListener('click', function() {
        ulAll[index].classList.remove('visible');
        index -= 1;
        if(index < 0){
            index = 0;
        }
        ulAll[index].classList.add('visible');
    });
    
    
    
});