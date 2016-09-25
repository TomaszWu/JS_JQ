/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
//    var allButt = document.querySelectorAll('button');
//    for(var i = 0; i < allButt.length; i++){
//        var singButt = allButt[i];
//        
//        console.log(singButt);
//        
//        singButt.addEventListener('click', function(){
//            var currCounter = this.getAttribute('data-counter');
//
//            this.dataset.counter = ++currCounter;
//            
//        });
//        
//    }
//    
//    var allP = document.querySelectorAll('p');
//    
//    for(var i = 0; i < allP.length; i++){
//        
//        console.log(allP[i]);
//    }
//    
    
    
    var but1 = document.querySelector('#button1');
    var but2 = document.querySelector('#button2');
    var but3 = document.querySelector('#button3');
    
    
    var allSpans = document.querySelectorAll('span');
    
    var span1 = allSpans[0];
    var span2 = allSpans[1];
    var span3 = allSpans[2];
    
    
    but1.addEventListener('click', function(){
        var currSpanCounter = span1.innerHTML;
        span1.innerHTML = ++currSpanCounter;
    });
    but2.addEventListener('click', function(){
        var currSpanCounter = span2.innerHTML;
        span2.innerHTML = ++currSpanCounter;
    });
    but3.addEventListener('click', function(){
        var currSpanCounter = span3.innerHTML;
        span3.innerHTML = ++currSpanCounter;
    });
    
    
});