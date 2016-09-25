function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 101);
    //poniżej napisz rozwiązanie zadania
    console.log(randomNumber);
    if (randomNumber % 2) {
        console.log('Liczba  ' + randomNumber + '  jest nieparzysta.');
    } else {
        console.log('Liczba  ' + randomNumber + '  jest parzysta.');
    }
//    b)
    var str = ''; // żeby było w jeden linii.

    for (var i = 1; i < randomNumber / 2; i++) {
        if (randomNumber % i === 0) {
            str += ' ' + i;
        }
    }
    document.write('Dzienniki liczby ' + randomNumber + ' to ' + str); // wyświetli

//   c) 

    var mod5 = randomNumber % 5;
    var pow = Math.pow(randomNumber, mod5);
    console.log('Potęga to ' + pow);


}
//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
