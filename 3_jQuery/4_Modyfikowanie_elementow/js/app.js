$(document).ready(function () {
    
    
    var btn = $('input[type=submit]'); // button nawias bo to jest selektor
    var inputUser = $('#addUser');
    var inputAge = $('#age');
    var ul = $('ul.main');
    
    btn.on('click', function(){
        // nie blokujemy bo button nie jest w elemencie form.
        var valueUser = inputUser.val(); // pobieramy aktualną wartść inputUser
        var valueAge = inputAge.val();
        
        // nie jest wpięty w DOM
        var newLi = $('<li data-age="' + valueAge + '">' + valueUser + '</li>');
        
        
        if(valueAge <= 15){
            newLi.css('color', 'green');
        } else if (valueAge <= 40){
            newLi.css('color', 'blue');
        } else {
            newLi.css('color', 'brown');
        }
        ul.append(newLi);
    });
    
    
    console.log('ZADANIE 2 ____________________');
    
    
    $('.where-i-am div').append('<span>1.Jestem tutaj...</span>').prepend('<span>2.Jestem tutaj...</span>').parent().prepend('<span>3.Jestem tutaj...</span>').append('<span>4.Jestem tutaj...</span>');
    
    
});