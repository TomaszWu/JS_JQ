/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    var firstClass = document.querySelector('.first');
    console.log(firstClass);
    var firstClassChildren = firstClass.firstElementChild;
    console.log(firstClassChildren);
    
    
    var thirdChild = firstClassChildren.children[2];
    console.log(thirdChild);
    
    
    console.log('___________________________2__________________________')
    
    var secondClass = document.querySelector('#second').parentElement.children[3];
    var secondClassParentElement = secondClass.parentElement;
    console.log(secondClassParentElement);
    var forthChild = secondClassParentElement.lastElementChild;
    var result = forthChild.previousElementSibling;
    console.log(result);
    
    console.log('___________________________3__________________________')
    
    var dataExAtribute = document.querySelector('[data-ex=third]');
    console.log(dataExAtribute);
    var  dataExAtributeParent = dataExAtribute.parentElement;
    var ex3granpa = dataExAtributeParent.parentElement;
    var ex3children = ex3granpa.firstElementChild.lastElementChild.children; //tablica
    //powyżej jest 5 dzieci.
    
    var middleChildren = Math.ceil(ex3children.length / 2);
    
    console.log(ex3children[middleChildren-1]);
    
    console.log('___________________________4__________________________')
    
    var ex4parent = document.querySelector('div.forth').parentElement;
    var ex4firstArticule = ex4parent.querySelector('article:nth-of-type(1)');
    var ex4 = ex4firstArticule.querySelector('p:nth-of-type(2');
    console.log(ex4);
    
    
});