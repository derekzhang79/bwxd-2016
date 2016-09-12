$('.inpagelink').click(function(event){ 
	event.preventDefault();
	scrollToID("#"+this.name);
	slideout.close();
});

var navbar = $('.navbarDiv').first();
var section = $('.section').first();
function scrollToID(ID){
	var scroll = $(ID).offset().top - navbar.height() - parseInt($(ID).css('margin-top'));
	if (ID === '#header') {
		scroll = 0;
	}

	$('html, body').animate({
		scrollTop: scroll
	}, 500);
}