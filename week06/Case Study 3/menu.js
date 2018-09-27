function calculatePrice() {
    var justJavaPrice = 2.0;
    var cafeAuLaitPriceSingle = 2.0;
    var cafeAuLaitPriceDouble = 3.0;
    var icedCappuccinoPriceSingle = 4.75;
    var icedCappuccinoPriceDouble = 5.75; 

    var justJavaQuantity = document.getElementById('justJavaQuantity');
    var cafeAuLaitQuantity = document.getElementById('cafeAuLaitQuantity');
    var icedCappuccinoQuantity = document.getElementById('icedCappuccinoQuantity');

    var totalPrice = 0;

    var justJavaTotalPrice = justJavaQuantity.value * justJavaPrice;
    document.getElementById("justJavaTotalPrice").value = justJavaTotalPrice;
    console.log('justJavaTotalPrice', justJavaTotalPrice);

    if (document.getElementById('cafeAuLaitSingle').checked) {
        var cafeAuLaitTotalPrice = cafeAuLaitQuantity.value * cafeAuLaitPriceSingle;
        document.getElementById("cafeAuLaitTotalPrice").value = cafeAuLaitTotalPrice;
        console.log('cafeAuLaitTotalPrice', cafeAuLaitTotalPrice);
    }

    if (document.getElementById('cafeAuLaitDouble').checked) {
        var cafeAuLaitTotalPrice = cafeAuLaitQuantity.value * cafeAuLaitPriceDouble;
        document.getElementById("cafeAuLaitTotalPrice").value = cafeAuLaitTotalPrice;
        console.log('cafeAuLaitTotalPrice', cafeAuLaitTotalPrice);
    }

    if (document.getElementById('icedCappuccinoSingle').checked) {
        var icedCappuccinoTotalPrice = icedCappuccinoQuantity.value * icedCappuccinoPriceSingle;
        document.getElementById("icedCappuccinoTotalPrice").value = icedCappuccinoTotalPrice;
        console.log('icedCappuccinoTotalPrice', icedCappuccinoTotalPrice);
    }

    if (document.getElementById('icedCappuccinoDouble').checked) {
        var icedCappuccinoTotalPrice = icedCappuccinoQuantity.value * icedCappuccinoPriceDouble;
        document.getElementById("icedCappuccinoTotalPrice").value = icedCappuccinoTotalPrice;
        console.log('icedCappuccinoTotalPrice', icedCappuccinoTotalPrice);
    }
    

    totalPrice = justJavaTotalPrice + cafeAuLaitTotalPrice + icedCappuccinoTotalPrice;
    console.log(totalPrice);
    document.getElementById("totalPrice").value = totalPrice;
    return totalPrice;
}