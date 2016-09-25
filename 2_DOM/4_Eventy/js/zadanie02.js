/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
//    var div = document.querySelector('div#bubblingButtons');
//    div.addEventListener('click', function (e){ //e to obiekt eventu
//        //sprawzamy czy event wywołał button(przez propagację)
//        var elCheck = e.target; // pojedyńczy el, który wywołał event
//        if(elCheck.tagName == 'BUTTON'){
//            // pobieramy a aktualną wartość data-counter
////            var currentCounter = elCheck.getAttribute('data-counter');
//            var currentCounter = elCheck.dataset.counter; //oba zapisy są takie same
//            console.log(currentCounter);
////            nadpisujemy data-counnter nową wartością
//            elCheck.dataset.counter = ++currentCounter;
//        }
//    });
    
        
    // drugi sposób tego samego:
    var allButtons = document.querySelectorAll('button'); //kolekcja
    
    
    for(var i = 0; i < allButtons.length; i++){
        var singleButton = allButtons[i];
        //podpoinamy event do każdego buttona
        
        singleButton.addEventListener('click', function(){
            //this reprezenntuje kliknięty utton
            //aktualna wartość datacounter z buttona
            var currCounter = this.getAttribute('data-counter');
//            vat currCounter = this.dataset.counter

            this.dataset.counter = ++currCounter;
        });
        
    };
        
        
});