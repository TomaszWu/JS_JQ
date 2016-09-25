$(document).ready(function () {


    var textArea = $('textarea');
    var counter = $('#charCount');

    textArea.on('keyup', function () {
        var currVal = $(this).val(); // aktualne wartosc pola przypisnaa do zmiennej 
        counter.text(currVal.length);
        
        if(currVal.length>100){
            currVal = currVal.substring(0,100);
            counter.text(100);
            textArea.val(currVal);
        }
        
        if (currVal.length <= 33) {
            counter.css('color', 'green');
        } else if ( currVal.length <= 66){
             counter.css('color', 'yellow');   
        } else { 
            counter.css('color', 'red'); 
        }
    });
    
    
});