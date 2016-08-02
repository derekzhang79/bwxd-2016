var desktopWidth = 1025;
$(window).load(function(loadEvent){
    layout();
});
$(window).scroll(function(scrollEvent){
    layout();
});
$(window).resize(function(resizeEvent){
    layout();
});

function layout() {
	var navbar = $('.navbarDiv').first();
    if ($(window).width() < desktopWidth) {
        navbar.css('border-bottom', '2px solid #00B5AD');
    } else {
        navbar.css('border-bottom', 'none');
    }
	
    $('#menu').css('margin-top', navbar.height());
}