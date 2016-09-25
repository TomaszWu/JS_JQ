//Komentarze do kodu umieśc bezpośrednio pod linią w której znaleziono błąd

var i = 1;
while (i < 100) {
    // true chyba zawsze będzie mniejsze od 100 ? 
    console.log('Aktualna wartość zmiennej i to: ' + i);
    i = i * 2;
    // i wyjściowo jest 0 i zawsze tym zerem pozostanie, gdyż mnożenie przez 0 zawsze daje zero
}

var year = 2009;
if(year %= 4) {
    console.log('Rok przestępny');
} else {
    console.log('Rok nieprzestępny');
}


console.log('Błędy poprawione, więc ten tekst będę widzieć w konsoli po uruchomieniu skryptu' + ' HURRRA!!!');





