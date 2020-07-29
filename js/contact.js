$(document).ready(function() {
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
	$(window).resize(function() {
		var w = $(window).width();
		if(w >= 768 && w < 992) {
			colBreaker();
		}
		else if(w >= 992) {
			colJoiner();
		}		
	});
});