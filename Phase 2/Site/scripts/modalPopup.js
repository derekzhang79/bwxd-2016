var offsetTop = $(window).height() * 0.1;

$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });
console.log("A");

a = 'a';

function populateModal(elt) {
	console.log(elt);
	var name = elt.parent('.personProfile').attr('id');
	console.log(name);
	
	var modal = $("#modalPopup");
	
	modal.find('.name-modal').html(name);
	modal.find('.bio-modal').html('ayyyyyy');
}