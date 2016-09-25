 /**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home"); //elementy z getem widzą aktualny stan rzeczy;
    var childElements = document.querySelector(".oferts").children; // tablica elementów dzieci
    var banner = document.querySelector(".ban"); // pojedyńczy
    var blocks = document.querySelectorAll(".block"); //tablica
    var links = document.querySelector(".links").children; //tablica
    console.log(links);

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
console.log('_________________zad1--------------------');
     var homeId = homeElement.id;
     homeElement.id = homeElement.className;
     homeElement.className = homeId;
     
console.log('_________________zad2--------------------');

console.log('homeElement--------------------');

console.log(homeElement);
console.log(typeof homeElement);


console.log('childelement--------------------');


console.log(childElements);
console.log(typeof childElements);
// childElements to tablica, dlatego lierujemy, homeElement to pojedynczy obiekt.
for(var i = 0; i < childElements.length; i++){
    console.log(childElements[i]);
    console.log(typeof childElements);
}

console.log('ban--------------------');

console.log(banner);
console.log(typeof banner);


console.log('block--------------------');
console.log( blocks);
console.log(typeof blocks);

for(var i = 0; i < blocks.length; i++){
    console.log(blocks[i]);
    console.log(typeof blocks);
}
console.log('links--------------------');

console.log(links);
console.log(typeof links);

for(var i = 0; i < links.length; i++){
    console.log(links[i]);
    console.log(typeof links);
}

console.log('_________________zad3--------------------');

for(var i = 0; i < blocks.length; i++){
    console.log(blocks[i].innerHTML); // wyświetla jedynie to, co znajduje się w tym tegu
}

for(var i = 0; i < blocks.length; i++){
    console.log(blocks[i].outerHTML); // zwraca wszystkie, łącznie z treścią taga.
}

for(var i = 0; i < blocks.length; i++){
    blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
}


console.log('_________________zad4--------------------');



console.log(homeElement.id);





console.log('_________________zad5--------------------');


console.log(childElements);
console.log(typeof childElements);
// childElements to tablica, dlatego lierujemy, homeElement to pojedynczy obiekt.
  
  for(var i = 0; i < childElements.length; i++){
       
          console.log(childElements[i].tagName);
        // });
    }
console.log('_________________zad6--------------------');
console.log(links);
console.log(typeof links);


for(var i = 0; i < links.length; i++){
    console.log(links[i].dataset)
    
}


console.log('_________________zad7--------------------');



console.log( banner.classList);
console.log(typeof banner.classList);
console.log(banner.className );
console.log(typeof banner.className );


});

console.log('_________________TESTY DOMOWE--------------------');

var blocksElements = document.querySelectorAll('div.blocks div a');
//console.log(typeof blocksElements);
for(var i = 0; i < blocksElements.length; i++){
//    console.log(blocksElements[i]);
}
for(var i = 0; i < blocksElements.length; i++){
    console.log(blocksElements[i].outerHTML);
}
for(var i = 0; i < blocksElements.length; i++){
    blocksElements[i].innerHTML = 'test';
    console.log(blocksElements[i].innerHTML);
}


//console.log(homeElement.id);


var childElements = document.querySelector(".oferts").children;
for(var i = 0; i < childElements.length; i++){
    console.log( childElements[i].tagName);
}

var links = document.querySelector(".links").children;
for(var i = 0; i < links.length; i++){
    console.log(links[i].dataset);
}

 var homeElement = document.getElementById("home"); //elementy z getem widzą aktualny stan rzeczy;
    var childElements = document.querySelector(".oferts").children; // tablica elementów dzieci
    var banner = document.querySelector(".ban"); // pojedyńczy
    var blocks = document.querySelectorAll(".block"); //tablica
    var links = document.querySelector(".links").children; //tablica
console.log('_________________PIATEK--------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!');


for(var i = 0;  i < blocks.length; i++){
    // console.log(blocks[i]);
}

var navTest = document.querySelector('nav');

console.log(navTest);

var navTest2 = document.querySelectorAll(' nav > ul  ');
console.log(navTest2);

for(var i = 0; i < navTest2.length; i++){
  console.log(navTest2[i]);
}

console.log('_________________KONIEC--------------------');