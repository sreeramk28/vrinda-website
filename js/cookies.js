$(document).ready(function(){
	$('#id_cookie_popup').click(function(event) {
		// alert("hey")
		/* Act on the event */
		$(".cookie-banner").fadeIn();

		$('.close').click(function(e) {
  			$('.cookie-banner').fadeOut(); 
		});
	});
});





