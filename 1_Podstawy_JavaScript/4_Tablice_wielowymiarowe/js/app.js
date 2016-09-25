var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];


var arr2 = [];
arr2[0] = [3, 4, 56, 773, 1];
arr2[1] = [7, 12, 0, 98, 34, 381];
arr2[2] = [12, 66, 96, 54, 10];



function checkArray(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var isAllEven = array[i].every(function (el) {
            return el % 2 === 0;
        });

        result.push(isAllEven);
    }
    return result;
}

console.log(checkArray(arr2));

var arr3 = [];
arr3[0] = [3, 4, 56, 773, 1];
arr3[1] = [7, 12, 0, 98, 34, 381];
arr3[2] = [12, 66, 96, 54, 10];


function print2dArray(array) {
    for (var i = 0; i < array.length; i++) {
//        var numberToPrint = array[i].map(function(el){
//            console.log(el);
//        });
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

print2dArray(arr3);


function createTable(rows, columns){
    var i = 0;
    var array1 = [];
    for(var j = 0; j < rows; j++){
        array.push([]);
        for(var n = 0; n < columns; n++){
            array[j].push(i);
            i++;
        }
    }
    return array;
}


console.log(createTable(4,6));



        