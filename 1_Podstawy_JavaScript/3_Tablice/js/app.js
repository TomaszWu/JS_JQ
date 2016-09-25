
function add(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum +=array[i];
    }
    return sum;
}



function multiply(array){
    var mul = 1;
    for(var i = 0; i < array.length; i++){
        mul *= array[i];
    }
    return mul;
}




var tab = [3,4,1,10,15]; //33 1800

console.log(add(tab));
console.log(multiply(tab));




console.log(distFromAvarage([1,2,3,4,5,6,7]));

function distFromAvarage(array){
    if(array.length > 0 ){
    var avg = add(array) / array.length;
    }
    return array.map(function (el){
        return Math.abs(el - avg); 
    });
}


console.log(distFromAvarage([1,1,1,1]));
console.log(distFromAvarage([2,8,3,7]));





// Zadanie b1

var fruits = ['mango', 'śliwka', 'pomarańcza', 'winogrono'];

console.log(fruits[0]);


function lastFruit(array) {
        var lastFruit = array.length - 1;
       return array[lastFruit];
}
console.log(lastFruit(fruits));


function factors(numberToCheck){
    var numbers = [];
    if(numberToCheck > 0){
        for(var i = 1; i < numberToCheck / 2; i++){
            if(!(numberToCheck % i)){
                numbers.push(i);
            }
        }
        return numbers.reverse();
   }
}

console.log(factors(54));




function getMissingElement(array){
    for(var i = 1; i < array.length; i++){
        if(array[i] - array[i - 1] !== 1){
            return array[i - 1];
        } 
    } 
}


console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));