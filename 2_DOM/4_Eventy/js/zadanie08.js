document.addEventListener("DOMContentLoaded", function () {
    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");
    var element4 = document.getElementById("element4");
    var element5 = document.getElementById("element5");

    element1.addEventListener("click", function (event) {
        console.log("Click in element 1");
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });

    element2.addEventListener("click", function (event) {
        console.log("Click in element 2");
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
        event.stopPropagation();
    });

    element3.addEventListener("click", function (event) {
        console.log("Click in element 3");
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });

    element4.addEventListener("click", function (event) {
        console.log("Click in element 4");
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });

    element5.addEventListener("click", function (event) {
        console.log("Click in element 5");
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
        event.stopImmediatePropagation()
    });
    element5.addEventListener("click", function (event) {
        console.log("Click nr 2 in element 5");
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
        
    });

});
