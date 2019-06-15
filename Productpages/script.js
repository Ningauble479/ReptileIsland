$(document).ready(function(){
    var head = $('<div>');
    head.attr("id","header");
    head.attr("class","sticky-top");
    $("body").prepend(head);

    var foot = $('<div>');
    foot.attr("id", "footer");
    foot.attr("class", "sticky-top");
    $("body").append(foot);


    $( "#header" ).load( '../HeadAndFoot/header.html', function() {
        var logo = $('#logo');
        logo.attr("src","../Images/LogoIdeas/lizzard.png")
    });



    $( "#footer" ).load( '../HeadAndFoot/footer.html' );

    var productname = "Repti Therm Heater"
    productnamenospace = productname.replace(/\s+/g, '');
    var infopic = "../Images/Products/" + productnamenospace + ".jpg"
    var price = "20$"
    var infop = "its some TEXT"
    var sizes = ["small", "medium", "large", "xl"]
    var instock = "false"

    function stockcheck() {
        if(instock === true) {
            $("#instock").text("In stock!")
        }
        else {
            $("#instock").text("Out of stock.")
        }
    }
    stockcheck()
    $('#name').text(productname);
    $('#price').text(price);
    $('#infoimg').attr("src", infopic)

    if (sizes.length > 0) {
        for(i = 0; i < sizes.length; i++) {
            $('#sizebuttons').append('<a class="btn" href="#" role="button">'+sizes[i]+'</a>')
        }
    }





});