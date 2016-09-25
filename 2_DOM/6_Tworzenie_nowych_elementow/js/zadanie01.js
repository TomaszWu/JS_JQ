/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var btn = document.querySelector('#addBtn');

    // pobieramy inputy do zmiennych:
    var orderId = document.querySelector('#orderId');
    var item = document.querySelector('#item');
    var quantity = document.querySelector('#quantity');


    var table = document.querySelector('#orders');


    btn.addEventListener('click', function () {
        //blokujemy domyslna akcje o to jest link
        event.preventDefault();

        var orderIdValue = orderId.value;
        var itemValue = item.value;
        var quantityValue = quantity.value;


        console.log(orderIdValue, itemValue, quantityValue);

        //tworzymy nowy wiersz tabeli
        var newTr = document.createElement('tr');
        // tworzymy nową komórkę (kolcek obok domu
        var newTdOrderId = document.createElement('td');
        // wstawiamy do środka nowego td wartosc pobrana z inputa
        newTdOrderId.innerHTML = orderIdValue;

        var newTdItem = document.createElement('td');

        newTdItem.innerHTML = itemValue;

        var newTdQuantity = document.createElement('td');
        newTdQuantity.innerHTML = quantityValue;

// wstawiamy do klocka tr 3x nowo utworzone td
        newTr.appendChild(newTdOrderId);
        newTr.appendChild(newTdItem);
        newTr.appendChild(newTdQuantity);

        console.log(newTr);

        // wstawiamy nowy wiersz

        table.appendChild(newTr);
    });


});