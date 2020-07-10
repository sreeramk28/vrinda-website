$(document).ready(function(){
	var iw = $(window).width();
	if(iw < 750) {
		$(".class_breaker").removeClass("col");
	}
	$(window).resize(function() {
		var w = $(window).width();
		if(w > 750) {
			$(".class_breaker").addClass("col");
		}
		else if(w < 750) {
			$(".class_breaker").removeClass("col");

		}
	});

});