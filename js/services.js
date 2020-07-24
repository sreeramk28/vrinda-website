$(document).ready(function() {
	var w = $(window).width();
	if(w < 992) {
		$(".ctable").css("margin-left", "0");
		$(".ctable").css("margin-top", "0");
		$(".vertical-line").hide();
	}
	else {
		$(".ctable").css("margin-left", "50px");
		$(".ctable").css("margin-top", "7px;");
		$(".vertical-line").show();
	}
	$(window).resize(function() {
		var w = $(window).width();
		if(w < 992) {
			$(".ctable").css("margin-left", "0");
			$(".ctable").css("margin-top", "0");
			$(".vertical-line").hide();
		}
		else {
			$(".ctable").css("margin-left", "50px");
			$(".ctable").css("margin-top", "7px;");	
			$(".vertical-line").show();
		}
	});
});