/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function () {
    /*
     Poniżej napisz kod rozwiązujący zadania
     */


    var article = document.querySelector('article.first'); // pojedyńńczy element


    var allH1 = article.getElementsByTagName('h1'); // articule to pojedyńczy element, dlatego można wyszukiwać. Tablica.

    console.log(' W Tagu znajduje się ',  allH1.length);


    var allOffers = article.getElementsByClassName('oferts');//- tablica
    // articule.querySelectorAll('ofers'); 

    for (var i = 0; i < allOffers.length; i++) {
        var singleElement = allOffers[i]; // pojedyńczy element z tablicy
        console.log(singleElement); // konsla wyświetla hmtl, ale to jest obiekta nie string.
    }


    var allDivs = article.getElementsByTagName('div');
    // var allDivs = articule.querySelectorAll('div');

    for (var i = 0; i < allDivs.length; i++) {
        var singleDiv = allDivs[i];
        console.log('jakis tekst', singleDiv); // przecinek bardzo wazny, inaczej sie krzaczy!!!! ???
    }

    console.log('-------------zadanie2-------------------');

    var ex2 = document.querySelector('nav > ul > li:nth-of-type(5) > a');


    console.log('-------------zadanie3-------------------');

    var idHome1 = document.getElementById('home');


    console.log(idHome1);
    var idHome2 = document.querySelector('#home');
    console.log(idHome2);
    var withoutDataDirector = document.querySelector('li:not([data-direction])'); // atrybut w takim nawiasie
    console.log(withoutDataDirector);
    var firstBlock = document.querySelector('.block');
    console.log(firstBlock);


    console.log('-------------zadanie4-------------------');

   

// elements body > section > article.first > div > div:nth-child(2)
 var allLiNav = document.querySelectorAll('nav li'); // wszyscy potomkowie
 console.log(allLiNav);
    var allDivP = document.querySelectorAll('div p'); // wszyscy potomkowie
    var AllarticleDiv = document.querySelectorAll('article div'); // wszyscy potomkowie



    var allLi = document.querySelectorAll('nav li');
    console.log(allLi);
    var allP = document.querySelectorAll('div p');
    var allDiv = document.querySelectorAll('article div')
});
