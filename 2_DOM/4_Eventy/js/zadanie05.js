/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    var allBtn = document.querySelectorAll('button');
    var span = document.querySelector('span');
    
    
    for (var i = 0; i < allBtn.length; i++){
        allBtn[i].addEventListener('click', function(){
            var currentSpanCounter = span.innerHTML;
            span.innerHTML = ++currentSpanCounter;
        });
    };
});