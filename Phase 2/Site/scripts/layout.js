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
    //Put a line at the bottom of the navbar when the user scrolls down 
    //(or always on mobile)
	var navbar = $('.navbarDiv').first();
    if ($(window).width() < desktopWidth || $('body').scrollTop() > 0) {
        navbar.css('border-bottom', '2px solid #00B5AD');
    } else {
        navbar.css('border-bottom', 'none');
    }

    //bump down content and menu for navbar
    $('.contentContainer').css('margin-top', navbar.height());
    $('#menu').css('margin-top', navbar.height());
    
    //set min content height to 100vh (minus navbar height) so that right border for menu 
    //goes all the way down on shorter pages (e.g. sponsors)
    $('.contentContainer').css('min-height', $(window).height() - navbar.height());  
	
	
	// stick submenu to bottom of navbar as it scrolls down
	if ($(window).width() >= desktopWidth) {
		var submenu = $('.submenu').first();
		var header = $('#header')
		
		headerBottom = header.offset().top + header.height()
		navBottom = navbar.offset().top + navbar.height() + parseInt(navbar.css('border-bottom-width'))
		
		submenu.css('position', 'fixed')
		if (navBottom >= headerBottom) {
			submenu.css('top', navbar.height())
		} else {
			submenu.css('position', 'absolute')
			submenu.css('top', headerBottom - navbar.height())
		}
	}
	
	
	
}