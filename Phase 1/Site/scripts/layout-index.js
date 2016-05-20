$(window).load(function(loadEvent){
    layout();
});
$(window).resize(function(resizeEvent){
    layout();
});

function layout() {
    var navbar = $('.navbarDiv').first();
    $('#menu').css('margin-top', navbar.height());
}