$(document).ready(function () {
    
    
    var btn = $('input[type=submit]'); // button
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
});