$('.inpagelink').click(function(event){ 
	event.preventDefault();
	scrollToID("#"+this.name);
	slideout.close();
});

//menu-l2 cases handled on individual html pages


var navbar = $('.navbarDiv').first();
var section = $('.section').first();
function scrollToID(ID){
	var scroll = $(ID).offset().top - navbar.height() - parseInt(section.css('margin-top'));
	

	$('html, body').animate({
		scrollTop: scroll
	}, 500);
}