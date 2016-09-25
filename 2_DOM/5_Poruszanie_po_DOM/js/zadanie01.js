/**
 * Created by Jacek on 2016-01-12.
 */


document.addEventListener('DOMContentLoaded', function () {
    
    
    var divs = document.querySelectorAll('div.listContainer');
    
    for(var i = 0; i < divs.length; i++){
        var singleDiv = divs[i];
        singleDiv.addEventListener('mouseover', function(){
            this.classList.add('hovered');
            var ulInDiv = this.firstElementChild; // pojedyńczy element
            var allLi = ulInDiv.children;
            for(var j = 0; j < allLi.length; j++){
                var singleLi = allLi[j];
                singleLi.style.backgroundColor = 'green';
            }
            ulInDiv.firstElementChild.style.backgroundColor = 'red';
            ulInDiv.lastElementChild.style.backgroundColor = 'blue';
        });
    }
});