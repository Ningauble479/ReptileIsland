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
});