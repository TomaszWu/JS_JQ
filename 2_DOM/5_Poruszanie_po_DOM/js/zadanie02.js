/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    
    var allButs = document.querySelectorAll('a');
    console.log(allButs);
    for(var i = 0; i < allButs.length; i++){
        allButs[i].addEventListener('click', function(){
            var elementToChange = this.nextElementSibling;
            elementToChange.classList.toggle('hidden');
        });
    }
});