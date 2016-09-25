

function sum(a,b,c){
    return a + b + c;
}
var result = sum(1,2,3);

// dwa sposoby jak się do tego dostać w konsoli: 

console.log(result);
console.log (sum(1,2,3));

function areaCirc(r){
    if(typeof r === 'number' && r > 0){
        Math.PI
        var area = Math.PI * Math.pow(r,2);
        var circ = 2 * Math.PI * r;
        return ('Obwód o promieniu ' + r + ' to: ' + area + ' a pole to: ' + circ);
    } else {
        return false;
    }
}

console.log(areaCirc(333));


var tenTimesTepeate = function () {
    for(var i = 0; i < 10; i++){
        console.log('Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych');
    }
}

function calculateTip(amount, rating){
    
    switch(rating){
        case('Bardzo dobra obsluga'):
            return amount * 0.25;
            break;
        case('Dobra obsluga'):
            return amount * 0.2;
            break;
        case ('Srednia obsluga'):
            return amount * 0.15;
            break;
        case ('Zla obsluga'):
            return 0;
            break;
        default:
            return 'Opis nieczytelny';
    }
};


var result = calculateTip(100, 'Dobra obsluga');

console.log(result);