$(window).resize(function(resizeEvent){
    layoutSchedule();
});

var wasDesktop = $(window).width() > 680;
function layoutSchedule() {
	isDesktop = $(window).width() > 680;
	
	if ($(window).width() > 680) {
		$('.scheduleDayContent').css('display', 'block');
	}
	
	if (wasDesktop && !isDesktop) {
		$('.scheduleDayContent').css('display', 'none');
		$('.scheduleDayToggleArrow').css('transform', 'scale(1,1)');
	}
	
	wasDesktop = isDesktop;
}

$(".scheduleDayToggle").click(function () {
	var arrow = $(this).children('img');
	var content = $(this).parent().find('.toggleContent').first();

	//rotate arrow and color title if it's an event toggle
	if (content.is(':hidden')) {
		arrow.css('transform', 'scale(1,-1)');
	} else {
		arrow.css('transform', 'scale(1,1)');
	}

	//toggle content visibility
	content.slideToggle(500);
});

$(".scheduleEventContentToggle").click(function () {
	var arrow = $(this).children('svg');
	var arrowPoly = arrow[0].getElementsByClassName('arrowPoly')[0];
	
	var title = $(this).children('h1');
	var content = $(this).parent().find('.toggleContent').first();

	//rotate arrow and color title if it's an event toggle
	if (content.is(':hidden')) {
		title.css('color', '#FFD400');
		arrow.css('transform', 'scale(1,-1)');
		arrowPoly.style.fill = 'FFD400';
		
	} else {
		title.css('color', '#241F59');
		arrow.css('transform', 'scale(1,1)');
		arrowPoly.style.fill = '#241F59';
	}

	//toggle content visibility
	content.slideToggle(500);
});