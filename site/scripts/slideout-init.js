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
    $('#content').click(function() {
        slideout.close();
    });
    $('#content').css('border-right', '1px solid #241F59');
});
slideout.on('beforeclose', function() {
    $('#content').click(function() {});
});
slideout.on('close', function() {
    $('#content').css('border-right', 'none');
});