/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */
// sort sortuje stringi, da druga sprwdza czy a jest większe od b. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//Twój komentarz ...
function sortArray() {

    //Twój komentarz ...
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twój komentarz ...
    points.sort(function(a, b) {
        //Twój komentarz ...
        return a-b;
    });

    //Twój komentarz ...
    return points;
}

//Twój komentarz ...
sortArray();
