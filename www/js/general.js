$(document).on("pageshow", "#registro", function(){
	var Wimg = 2598;
	var Himg = 831;
	$('.wave').css('height', ($(window).width() * Himg / Wimg) + 'px');
});

$(document).on("pageshow", "#inicio", function(){
	var Wimg = 2598;
	var Himg = 1689;
	$('.wave').css('height', ($(window).width() * Himg / Wimg) + 'px');
});
