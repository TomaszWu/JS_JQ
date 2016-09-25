$(document).ready(function () {
    
    var btns = $('div.hero-buttons').find('button');
    
    var btnIronMan = btns.eq(0);
    var btnThor = btns.eq(1);
    var btnWolverin = btns.eq(2);
    console.log(btns);
    
//    btnIronMan.on('click', function(){
//        console.log('Kliknięto mnie');
//    });
//    btnThor.one('click', function(){
//        console.log('Kliknięto mnie');
//    });
//    
//    btnWolverin.on('click', function(){
//        btns.off('click');
//    });
//    
    console.log('zadanie2______________________________________-');
    
    var dd = $('section.superhero-description').find('dd').hide();
    
   
    var dt = $('section.superhero-description').find('dt');
    
    dt.on('click', function(){
        
        $(this).next().slideToggle();
        
    });
    
    
    
    console.log('zadanie4______________________________________-');
    
    
    $('.show-hide-btn').on('click', function(event){
        event.preventDefault();
        var input = $('.user-pass');
        if(input.attr('type') == 'password'){
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }
    });
    
//    http://wklej.to/oqPiw
    
    
    console.log('zadanie5______________________________________-');
    
    
    $('.menu').on('mouseenter', function() {
        console.log('Hurra!!!');
        
    });
    
});