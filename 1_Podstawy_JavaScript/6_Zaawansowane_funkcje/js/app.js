/**
 * Created by Agata on 21.01.2016.
 */

function boilEgg(timeInSeconds) {

    var intId = setInterval(function () {
        console.log('jajko się gotuje');
    }, 3000);


    setTimeout(function () {
        console.log('jajko ugotowwane');
        clearInterval(intId);
    }, timeInSeconds * 1000);


}

boilEgg(15);


var id = setInterval(function() {
    console.log('jestem wywoływana co dwie sekundy');
}, 2000
)


clearInterval(id)

