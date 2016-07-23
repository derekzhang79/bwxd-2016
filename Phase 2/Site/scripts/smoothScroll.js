$('.inpagelink').click(function(event){ 
	event.preventDefault();
	scrollToID("#"+this.name);
	slideout.close();
});

var navbar = $('.navbarDiv').first();
var section = $('.section').first();
function scrollToID(ID){
	var scroll = $(ID).offset().top - navbar.height() - parseInt(section.css('margin-top'));
	

	$('html, body').animate({
		scrollTop: scroll
	}, 500);
}