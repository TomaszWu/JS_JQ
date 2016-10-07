$(function(){


    $('button.changeBar:nth-of-type(3n+1').data('data-width', 0.5).data('data-color', 'blue');
    $('button.changeBar:nth-of-type(3n+2').data('data-width', 0.2).data('data-color', 'green');
    $('button.changeBar:nth-of-type(3n+3').data('data-width', 0.9).data('data-color', 'orange');
    $('div#bar1').prevAll().data('data-bar', 1);
    $('div#bar2').prevUntil('div').data('data-bar', 2);
    $('div#bar3').prevUntil('div').data('data-bar', 3);
    
    
    
    var buttons = $('button.changeBar');
    var divs = $('div.progress-bar');
    
    buttons.on('click', function(){
        var width = $(this).data('data-width');
        var widthToSet = width * 350 + 'px';
        
        var bar = $(this).data('data-bar');
        var color = $(this).data('data-color');
        console.log(widthToSet);
        console.log(bar);
        console.log(color);
        var span = $('#bar' + bar + ' span');
        
        span.removeClass();
        span.addClass(color);
        span.animate({
            width: widthToSet
        });
        
        
    });
    
});