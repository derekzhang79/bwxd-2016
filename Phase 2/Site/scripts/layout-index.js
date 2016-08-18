var desktopWidth = 1200;
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
	var navbarLogo = $('#navbarLogo');

	console.log($(window).scrollTop())
    if ($(window).width() < desktopWidth || ($(window).scrollTop() > 0 && $(window).height() <= 650)) {
        navbar.css('border-bottom', '2px solid #00B5AD');
		navbar.css('background-color', 'white');
    }else {
        navbar.css('border-bottom', 'none');
		
		if ($(window).width() > desktopWidth) {
			navbar.css('background-color', 'transparent');
		}
    }
	
    $('#menu').css('margin-top', navbar.height());
}