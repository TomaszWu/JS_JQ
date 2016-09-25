/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    var buttonToDelete = document.querySelector('a');
    console.log(buttonToDelete);
    
    
    buttonToDelete.parentNode.removeChild(buttonToDelete);
    
});