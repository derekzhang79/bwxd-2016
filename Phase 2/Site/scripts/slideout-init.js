var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'right',
    'touch': false
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
});

//add a click listener to close the slideout and add right border to content
slideout.on('beforeopen', function() {
    $('.contentContainer').click(function() {
        slideout.close();
    });
    $('.contentContainer').css('border-right', '2px solid #00B5AD');
});
slideout.on('beforeclose', function() {
    $('.contentContainer').click(function() {});
});
slideout.on('close', function() {
    $('.contentContainer').css('border-right', 'none');
	layout();
});