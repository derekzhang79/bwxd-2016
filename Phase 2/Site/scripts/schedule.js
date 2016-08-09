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

$(".toggle").click(function () {
	arrow = $(this).children('img');
	content = $(this).next();

	//rotate arrow and color title if it's an event toggle
	if (content.is(':hidden')) {
		arrow.css('transform', 'scale(1,-1)');

//		if ($(this).hasClass('scheduleEventContentToggle')) {
//			title = $(this).closest('.scheduleEvent').find('.scheduleEventTitle');
//			console.log(title);
//			title.css('color', '#FFD400');
//		}
	} else {
		arrow.css('transform', 'scale(1,1)');

//		if ($(this).hasClass('scheduleEventContentToggle')) {
//			title = $(this).closest('.scheduleEvent').find('.scheduleEventTitle');
//			title.css('color', '#241F59');
//		}
	}

	//toggle content visibility
	content.slideToggle(500);
});