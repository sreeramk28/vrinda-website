$(document).ready(function() {
	function addBorders1245() {
		$(".adr-1").addClass("col-bord");
		$(".adr-2").addClass("col-bord");
		$(".adr-4").addClass("col-bord");
		$(".adr-5").addClass("col-bord");
	}
	function addBorders135() {
		$(".adr-1").addClass("col-bord");
		//$(".adr-2").addClass("col-bord");
		$(".adr-3").addClass("col-bord");
		$(".adr-5").addClass("col-bord");
	}
	function colBreaker() {
		if($(".row-3").length > 0) return;
		$(".col-bg").removeClass("col-lg");
		$(".col-bg").addClass("col-md");
		$(".address-container").append("<div class = 'row row-3'></div>");
		var five = $(".adr-5");
		var six = $(".adr-6");
		$(".row-3").append(five);
		$(".row-3").append(six);
		var three = $(".adr-3");
		$(".row-2").children().first().after(three);
		
	}
	function colJoiner() {
		if($(".row-3").length == 0) return;
		$(".col-bg").removeClass("col-md");
		$(".col-bg").addClass("col-lg");
		var three = $(".adr-3");
		$(".row-1").children().last().before(three);
		var five = $(".adr-5"); var six = $(".adr-6");
		$(".row-2").children().last().before(five); $(".row-2").children().last().before(six);
		$(".row-3").remove();
		
	}
	var w = $(window).width();
	if(w >= 768 && w < 992) {
		colBreaker();
	}
	else if(w >= 992) {
		colJoiner();
	}
	if(w < 576) {
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
	if(w >= 992) {
		$(".col-mgn").removeClass("col-bord");
		addBorders1245();
	}
	else if(w >= 768) {
		$(".col-mgn").removeClass("col-bord");
		addBorders135();
	}
	else {
		$(".col-mgn").removeClass("col-bord");
	}
	$(window).resize(function() {
		var w = $(window).width();
		if(w >= 768 && w < 992) {
			colBreaker();
		}
		else if(w >= 992) {
			colJoiner();
		}		
		if(w < 576) {
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
		if(w >= 992) {
			$(".col-mgn").removeClass("col-bord");
			addBorders1245();
		}
		else if(w >= 768) {
			$(".col-mgn").removeClass("col-bord");
			addBorders135();
		}
		else {
			$(".col-mgn").removeClass("col-bord");
		}
	});
});