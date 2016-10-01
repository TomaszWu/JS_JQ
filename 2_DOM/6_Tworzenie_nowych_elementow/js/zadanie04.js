/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    
    var button = document.querySelector('.button');
    var allLi = document.querySelectorAll('ul.list li');
    
    button.addEventListener('click', function(){
        for( var i =0; i < allLi.length; i++ ){
            var liToDelete = allLi[i];
            liToDelete.parentNode.removeChild(liToDelete);
            
        }
    });
});