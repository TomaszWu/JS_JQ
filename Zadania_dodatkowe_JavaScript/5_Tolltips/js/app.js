/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', function(){
    
    
    var tooltips = document.getElementsByClassName('tooltip');
    
    for(var i = 0; i < tooltips.length; i++){
        tooltips[i].addEventListener('mouseover', function() {
            var newSpan = document.createElement('span');
            newSpan.innerHTML = this.dataset.text;
            newSpan.classList.add('tooltipText');
            this.appendChild(newSpan);
        });
        tooltips[i].addEventListener('mouseout', function() {
            var spanToDelete = this.firstElementChild;
            spanToDelete.parentNode.removeChild(spanToDelete);
            
        });
        
    }
});