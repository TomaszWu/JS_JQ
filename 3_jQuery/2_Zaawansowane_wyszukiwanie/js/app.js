$(document).ready(function () {


    var btns = $('div.cart-item').find('button');


    btns.on('click', function () {
        var clickedButton = $(this);
        clickedButton.toggleClass('added');
//        clickedButton.parent().parent().toggleClass('cart-updated');

        clickedButton.closest('.cart-item').toggleClass('cart-updated');
    });




    console.log('Zadanie2___________________________________');

    var filmClass = $('.films').find('a.expand');
    
    filmClass.on('click', function() {
        var clickedButton = $(this);
//        var divToShow = $(this).siblings('div');
        clickedButton.parent().siblings().show();
        event.preventDefault();
    });
    
    var closeTheWindow = $('a.close');
    
    closeTheWindow.on('click', function(e){
        event.preventDefault();
        closeTheWindow.parent().hide();
    });
    
    
//    closeTheWindow.on('click', function(){
//        closeTheWindow.parent('div.container').hide();
//    });
    
});