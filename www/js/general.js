var Wimg = 0;
var Himg = 0;

$(document).on("pageshow", "#registro", function(){
	Wimg = 2598;
	Himg = 831;
	screen_change();
});

$(document).on("pageshow", "#inicio", function(){
	Wimg = 2598;
	Himg = 1689;
	screen_change();
});

$(window).resize(function() {
 	screen_change();
});

function screen_change(){
	$('.wave').css('height', ($(window).width() * Himg / Wimg) + 'px');
}
