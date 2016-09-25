/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    var allDivs = document.getElementsByClassName('box');
    
    for( var i = 0; i < allDivs.length; i++){
        allDivs[i].addEventListener('click', function(){
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    }
    
});