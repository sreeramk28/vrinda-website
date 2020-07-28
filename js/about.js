$(document).ready(function(){
	var iw = $(window).width();
	if(iw < 992) {
		$(".col-rem").hide();
	}
	else {
		$(".col-rem").show();
	}
	if(iw < 768) {
		$(".gray-toggle").css({"height": "480px"});
	}
	else {
		$(".gray-toggle").css({"height": "240px"});
	}
	if(iw < 576) {
		//$("html").hide();
		$(".bh-styling").css("font-size", "22px");
		$(".banner-image").css("height", "180px");
		$(".container-for-just-a-heading").css({"padding-top": "60px", "padding-bottom": "60px"});
	}
	else {
		$(".bh-styling").css("font-size", "30px");
		$(".banner-image").css("height", "300px");
		$(".container-for-just-a-heading").css({"padding-top": "120px", "padding-bottom": "120px"});	
	}
	$(window).resize(function() {
		var iw = $(window).width();
		if(iw < 992) {
			$(".col-rem").hide();
		}
		else {
			$(".col-rem").show();
		}
		if(iw < 768) {
			$(".gray-toggle").css({"height": "480px"});
		}
		else {
			$(".gray-toggle").css({"height": "240px"});
		}
		if(iw < 576) {
		//$("html").hide();
			$(".bh-styling").css("font-size", "22px");
			$(".banner-image").css("height", "180px");
			$(".container-for-just-a-heading").css({"padding-top": "60px", "padding-bottom": "60px"});
		}
		else {
			$(".bh-styling").css("font-size", "30px");
			$(".banner-image").css("height", "300px");
			$(".container-for-just-a-heading").css({"padding-top": "120px", "padding-bottom": "120px"});	
		}
	});

});