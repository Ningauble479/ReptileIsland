var stock;

if (stock >= 1) {
    stock = true }
    else {
        stock = false
    }
var inStock = false;

$(document).ready(stockChecker);

function stockChecker () {$(document).ready(function(){
if (inStock === true) {
    $('#stockCheck').text('Availability: In stock')
} else {
    $('#stockCheck').text('Availability: Out of stock')
    };
});

document.getElementById('productInfoBuyButton').onclick = function (){
    alert('you bought the item!')
}
}