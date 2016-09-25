


String.prototype.upperLower = function () {
    var result = '';

    var strParts = [];

    var parts = this.split(' ');
    console.log(parts);

    for (var n = 0; n < parts.length; n++) {
        var singleWord = parts[n];
        var result = '';
        for (var i = 0; i < singleWord.length; i++) {
            if (i % 2 == 0) {
                result += singleWord[i].toLowerCase();
            } else {
                result += singleWord[i].toUpperCase();
            }
        }
        strParts.push(result);
    }
    return strParts.join(' ');
};
var funnyText = "Javascritp jest super".upperLower();
console.log(funnyText);



console.log('zadanie nr 2:');


var Car = {
    brand: 'Volvo',
    color: 'pink',
    km: 0,
    
    
    printCarInfo: function (){
        console.log('Marka: ' +this.brand+ ' Kolor: ' +this.color+ ' Przebieg: ' +this.km);
    }, // PRZECINEK !!!!
    
    drive: function (km){
        this.km +=km;
    }
    
};

Car.printCarInfo();
Car.drive(99);
Car.printCarInfo();
Car.drive(1);
Car.printCarInfo();


// idea this w PHP. 


console.log('Zadanie 2 drugi sposób:');

var Car2 = function (brand, color){
    this.brand = brand;
    this.color = color;
    this.km = 0;
    this.printCarInfo = function () {
         console.log('Marka: ' +this.brand+ ' Kolor: ' +this.color+ ' Przebieg: ' +this.km);
    };
    
};

Car2.prototype.drive = function(km){
    this.km += km;
};



var CarBMW = new Car2('BMW', 'yellow');
var CarSAAB = new Car2('Saab', 'black');




CarBMW.printCarInfo();
CarBMW.drive(959);
CarBMW.printCarInfo();
CarBMW.drive(81);
CarBMW.printCarInfo();


CarSAAB.printCarInfo();
CarSAAB.drive(999);
CarSAAB.printCarInfo();
CarSAAB.drive(1);
CarSAAB.printCarInfo();


