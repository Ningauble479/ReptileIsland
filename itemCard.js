$(document).ready(function () {
    var i = 0
    for(j = 0; j < 9; j++) {
        productname='Repti Therm Heater'
        productnamenospace = productname.replace(/\s+/g, '');
        productimg="Images/Products/" +productnamenospace + ".jpg"
        cardinfotxt="Repti Therm Under Tank Heater for keeping your loved reptiles nice and cozy"
        productlink="/Productpages/" + productnamenospace + ".html"
        i++
        
        var container = $("<div>");
        container.attr("class", "card shadow-lg");
        container.attr("style", "width:18rem;")
        container.attr("id",("cardinner" + i))
        $('#cardcontainer').append(container);

        var img = $("<img/>")
        img.attr("src", productimg)
        img.attr("class","card-img-top")
        $(('#cardinner' + i)).append(img);

        var cardbody = $("<div>");
        cardbody.attr("class", "card-body")
        cardbody.attr("id",("cardb" + i))
        cardbody.attr("style", "text-align:center")
        $(('#cardinner' + i)).append(cardbody)

        var cardtitle = $("<h5>")
        cardtitle.attr("class", "card-title")
        cardtitle.attr("style", "border-bottom: 1px solid darkgray; padding-bottom: 10px;")
        cardtitle.text(productname)
        $('#cardb' + i).append(cardtitle)

        var cardinfo = $("<p>")
        cardinfo.attr("class","card-text")
        cardinfo.text(cardinfotxt)
        $("#cardb" + i).append(cardinfo)

        var buybutton = $("<a>")
        buybutton.attr("href", productlink)
        buybutton.attr("class", "btn btn-primary oswald shadow")
        buybutton.attr("id", "shopcardbuybutton")
        buybutton.text("Buy")
        $("#cardb" + i).append(buybutton)

    }
});
