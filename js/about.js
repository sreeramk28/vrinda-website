$(document).ready(function(){
	var iw = $(window).width();
	if(iw < 992) {
		$(".col-rem").hide();
	}
	else {
		$(".col-rem").show();
	}
	if(iw < 768) {
		$(".profile-selector").css({"height": "480px"});
		$(".achi").addClass("text-center");
		$(".achi-2").addClass("achi-table-center");
		$(".achi-table-wrap").addClass("text-center");
		$(".class_about_headingA").css("border-left", "0");
	}
	else {
		$(".profile-selector").css({"height": "240px"});
		$(".achi").removeClass("text-center");
		$(".achi-2").removeClass("achi-table-center");
		$(".achi-table-wrap").removeClass("text-center");
		$(".class_about_headingA").css("border-left", "3px solid #fff");
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
	if(iw >= 768 && iw < 992) {
		$(".profile-description").css("height", "170px");
		$(".profile-description-2").css("height", "200px");
	}
	else if(iw < 768) {
		$(".profile-description").css("height", "85px");
		$(".profile-description-2").css("height", "120px");
	}
	else {
		$(".profile-description").css("height", "120px");
		$(".profile-description-2").css("height", "150px");
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
			$(".profile-selector").css({"height": "480px"});
			$(".achi").addClass("text-center");
			$(".achi-2").addClass("achi-table-center");
			$(".achi-table-wrap").addClass("text-center");
			$(".class_about_headingA").css("border-left", "0");
		}
		else {
			$(".profile-selector").css({"height": "240px"});
			$(".achi").removeClass("text-center");
			$(".achi-2").removeClass("achi-table-center");
			$(".achi-table-wrap").removeClass("text-center");
			$(".class_about_headingA").css("border-left", "3px solid #fff");
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
		if(iw >= 768 && iw < 992) {
			$(".profile-description").css("height", "170px");
			$(".profile-description-2").css("height", "200px");
		}
		else if(iw < 768) {
			$(".profile-description").css("height", "85px");
			$(".profile-description-2").css("height", "120px");
		}
		else {
			$(".profile-description").css("height", "120px");
			$(".profile-description-2").css("height", "150px");
		}
	});

});