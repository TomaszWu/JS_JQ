/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    
    var ex1 = document.querySelector('div.exercise.ex1'); //pojedynczy 
    
    var liWithout = ex1.querySelectorAll('li:not([data-direction])'); // tablica
    
    for(var i = 0; i < liWithout.length; i++){
         liWithout[i].setAttribute('data-direction', 'up');
        // liWithout[i].dataset.direction = 'up';
    };
    
    
    
    var li2 = ex1.querySelectorAll('li:nth-of-type(even)');
    
    for(var j = 0; j < li2.length; j++){
        li2[j].style.backgroundColor = 'green';
    };
    
    var lis5th = ex1.querySelector('li:nth-of-type(5)');
    
    lis5th.classList.add('big');
    
    
    var lieach3 = ex1.querySelectorAll('li:nth-of-type(3n)');
    
    for(var k = 0; k < lieach3.length; k++){
        lieach3[k].style.textDecoration = 'underline';
        
    }
    
    console.log('zadanie2 ________________________________________');
    var ex2 = document.querySelector('div.exercise.ex2');

    var options = ex2.querySelectorAll('option');

    for (var i = 0; i < options.length; i++) {
        var singleOption = options[i];
        singleOption.innerHTML = singleOption.getAttribute('value');
       //  singleOption.dataset.year = singleOption.getAttribute('value') + 20; połączy znaki, bo to pierwszy będzie string
       singleOption.dataset.year = parseInt(singleOption.getAttribute('value'), 10) + 20;
       console.log(singleOption);
    }
    
    console.log('zadanie3 ________________________________________');
     
    var ex3 = document.querySelector('div.exercise.ex3');
    
    
    var chromeImage = ex3.querySelector('div.chrome');
    chromeImage.style.width = '100px';
    var chromeHref = ex3.querySelector('a');
    chromeHref.innerHTML = 'Chrome';
    console.log(chromeHref.innerHTML);
    
    var edgeImage = ex3.querySelector('div.edge');
    edgeImage.style.backgroundImage = "url(assets/img/edge.png)";
    var edgeHrefDescription = ex3.querySelector('div.edge + a');
    edgeHrefDescription.href = 'https://www.microsoft.com/pl-pl/windows/microsoft-edge';
     
     var fireFoxImage = ex3.querySelector('div.firefox');
     fireFoxImage.style.backgroundImage = "url(assets/img/firefox.png)";
     var OperaHrefDescription = ex3.querySelector('div.firefox + a');
    OperaHrefDescription.href = 'http://www.opera.com/';
    
    
    console.log('zadanie4 ________________________________________');
    
    var ex4 = document.querySelector('div.exercise.ex4');
    console.log(ex4);
    var firstLi = ex4.querySelector('#name');
    firstLi.innerHTML = 'tadeusz drozda';
    var secoundLi = ex4.querySelector('#fav_color');
    secoundLi.innerHTML = 'blue';
    var lastLi = ex4.querySelector('#fav_meal');
    lastLi.innerHTML = 'raw ham';
    
    var test = ex4.querySelector('li:nth-of-type(2) span');
    
    console.log(test.outerHTML);
    
    console.log('zadanie5 ________________________________________');
   var ex5 = document.querySelector('div.exercise.ex5');
   console.log(ex5);
    
    var ulMenu = ex5.querySelector('div ul');
    ulMenu.classList.add('menu');
    var allLi = ex5.querySelectorAll('li');
    for(var i = 0; i < allLi.length; i++){
        allLi[i].classList.add('menuElement');
    }
//    var firstLi = ex5.querySelector('li:first-of-type');
//    firstLi.classList.remove('error');
    
    var allError = document.querySelectorAll('.error');
    for(var i = 0; i < allError.length; i++){
        allError[i].classList.remove('error');
    }
    
    
    console.log('zadanie6 ________________________________________');
    
    
    var ex6 = document.querySelector('div.exercise.ex6');
    console.log(ex6);
    
    var li = ex6.querySelectorAll('li');
    console.log(li);
//    1)
//    for(var i = 0; i < li.length; i++){
//        li[i].dataset.id = i;
//        console.log(li[i]);
//    }
//    2)
    for (var i = 0; i < li.length; i++){
        li[i].setAttribute('data-id', i);
        console.log(li[i]);
    }
});

