/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    $(document).find('div:nth-of-type(1):not(div div)').addClass('tabs');
    var allTabs = $(document).find('.tabs');
    var allDivs = $(document).find('div:not(.tabs)');
    var allLi = $(document).find('li');



    console.log(allDivs);

    $(allTabs).on('click', function () {
        console.log('Działa');
    });




    // czy o to chodziło w poleceniu:  Punkt 5
//Zmodyfikuj event tak, żeby po kliknięciu w element li przypisany do niego tekst div 
//pokazał się na stronie (dla ładnego efektu możesz zastosować animację). 
//        Wykorzystaj zmienną wskazującą na kliknięty tab, aby odnaleźć przypisany do 
//niej div z tekstem. Pamiętaj, że niekliknięte taby nie powinny się wyświetlać.

    $(allLi).on('click', function () {
        var index = ($(this).index());
        allDivs.eq(index).show();
    });
//???
});


