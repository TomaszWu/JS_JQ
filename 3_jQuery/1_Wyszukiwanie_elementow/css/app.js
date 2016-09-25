
//$(function(){
//    
//});

$(document).ready(function(){
    
    
    console.log('___________________ZADANIE 2_____________');
    $('section.main').find('li').addClass('borderClass');
    
    $('.showMore');
    // robią to samo:
//    $('.showMore:nth-of-type(1)');
//    $('.showMore').first();
//    $('.showMore').eq(1);
    
    $('.showMore').first().css('color', 'red');
    


    console.log('___________________ZADANIE 3_____________');


   $('section.main').find('li').addClass('colorText backgroundElement');
   $('section.main').find('li').fadeOut('slow');
   $('section.main').find('li').fadeIn('fast');
   
   
    console.log('___________________ZADANIE 4_____________');
    
    
    $('.menu').find('a').css('color', 'red');
 
    $('.menu').find('li').addClass('redLinks');
    
    $('.menu').find('li').first().addClass('biggerFont');
    
    
    
});









