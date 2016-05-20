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
    if ($(window).width() < desktopWidth || $('body').scrollTop() > 0) {
        $('#navbarDiv').css('border-bottom', '1px solid #241F59');
    } else {
        $('#navbarDiv').css('border-bottom', 'none');
    }

    //bump down content and menu for navbar
    $('#content').css('margin-top', $('#navbarDiv').height());
    $('#menu').css('margin-top', $('#navbarDiv').height());
    
    //set min content height to 100vh (minus navbar height) so that right border for menu 
    //goes all the way down on shorter pages (e.g. sponsors)
    $('#content').css('min-height', $(window).height() - $('#navbarDiv').height()*2);    
}