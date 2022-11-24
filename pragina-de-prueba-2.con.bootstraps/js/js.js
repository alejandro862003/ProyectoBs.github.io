//el sroll del menu NAV
$(document).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});