/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    var div = document.getElementById('box');
    console.log(div);
    var span1 = document.querySelector('span:nth-of-type(1)');
    console.log(span1);
    div.addEventListener('click', function(){
        console.log('test1', event.clientX);
        
        
    });
    
    
    var span = document.querySelector('span:nth-of-type(1)');
//     console.log(span);
    
});