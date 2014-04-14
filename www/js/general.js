var server = "http://bottleme.net84.net/"

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
	if ((Wimg>0)&&(Himg>0)){
 		screen_change();
 	}
});

function screen_change(){
	$('.wave').css('height', ($(window).width() * Himg / Wimg) + 'px');
}

function login(){
	var vuser = $('#ur').val();
	var vpass = $('#pw').val();

	if (vuser.length<5){
		$('#error_msj').html("El usuario no es válido");
		return false;
	}else if(vpass.length<5){
		$('#error_msj').html("La contraseña no es válida");
		return false;
	}

	$.ajax({
		url: server+"login.php",
		cache: false,
		dataType: "json",
		timeout: 70000,
		method: "POST",
		data: {user: vuser, pass: vpass, login: true }, 
	}).done(function(data) {
		alert(data);
	});
}

function page(url){
	$.mobile.changePage(url);
}