$(document).ready(function() {
	function bigScreenBoom() {
		$(".class_about_box").addClass("col class_col_border");
          $(".class_about_space2").addClass("col-md-1 class_col_border");
          $(".class_about_space1").addClass("col-md-1");
          $(".class_about_box").removeClass("class_about_box_full_width");
          $(".class_row_relative>div:nth-child(2)>br").hide();
          $(".class_col_padding>br").show();
          $(".class_col_padding").addClass("text-center");
          $(".class_col_padding > span").css({"padding-left": "0"});
	}
	function smallScreenBoom() {
		$(".class_about_box").removeClass("col class_col_border");
          $(".class_about_space2").removeClass("col-md-1 class_col_border");
          $(".class_about_space1").removeClass("col-md-1");
          $(".class_about_box").addClass("class_about_box_full_width");
          $(".class_row_relative>div:nth-child(2)>br").show();
          $(".class_col_padding>br").hide();
          $(".class_col_padding").removeClass("text-center");
          $(".class_col_padding > span").css({"padding-left": "15px"});
	}
	var w = $(window).width();
	if(w < 1200) {
		$(".buttonDownload").css("margin-left", "0");	
	}
	else {
		$(".buttonDownload").css("margin-left", "50px");	
	}
	if(w < 992) {
		$(".add-center").addClass("text-center");
		$(".ctable").addClass("ctable-center");
	}
	else {
		$(".add-center").removeClass("text-center");
		$(".ctable").removeClass("ctable-center");	
	}
	if(w < 768) {
		smallScreenBoom();
	}
	else bigScreenBoom();
	if(w < 576) {
		//$("html").hide();
		$(".bh-styling").css("font-size", "18px");
		$(".banner-image").css("height", "280px");
		$(".container-for-just-a-heading").css({"padding-top": "60px", "padding-bottom": "60px"});
		$(".bd-styling").addClass("mx-2");
		$(".bh-styling").addClass("mx-2");
		$(".class_we_are_diff").css({"margin-left":"18px", "margin-right":"18px"});
	}
	else {
		$(".bh-styling").css("font-size", "20px");
		$(".banner-image").css("height", "350px");
		$(".container-for-just-a-heading").css({"padding-top": "120px", "padding-bottom": "120px"});
		$(".bd-styling").removeClass("mx-2");
		$(".bh-styling").removeClass("mx-2");
		$(".class_we_are_diff").css({"margin-left":"10px", "margin-right":"10px"});	
	}
	if(w < 496) {
		$(".class_know_more_full").addClass("col-12");
	}
	else {
		$(".class_know_more_full").removeClass("col-12");
	}
	$(window).resize(function() {
		var w = $(window).width();
		if(w < 1200) {
			$(".buttonDownload").css("margin-left", "0");	
		}
		else {
			$(".buttonDownload").css("margin-left", "50px");	
		}
		if(w < 992) {
			$(".add-center").addClass("text-center");
			$(".ctable").addClass("ctable-center");
		}
		else {
			$(".add-center").removeClass("text-center");
			$(".ctable").removeClass("ctable-center");	
		}
		if(w < 768) {
			smallScreenBoom();
		}
		else bigScreenBoom();
		if(w < 576) {
			//$("html").hide();
			$(".bh-styling").css("font-size", "18px");
			$(".banner-image").css("height", "280px");
			$(".container-for-just-a-heading").css({"padding-top": "60px", "padding-bottom": "60px"});
			$(".bd-styling").addClass("mx-2");
			$(".bh-styling").addClass("mx-2");
			$(".class_we_are_diff").css({"margin-left":"18px", "margin-right":"18px"});
		}
		else {
			$(".bh-styling").css("font-size", "20px");
			$(".banner-image").css("height", "350px");
			$(".container-for-just-a-heading").css({"padding-top": "120px", "padding-bottom": "120px"});	
			$(".bd-styling").removeClass("mx-2");
			$(".bh-styling").removeClass("mx-2");
			$(".class_we_are_diff").css({"margin-left":"10px", "margin-right":"10px"});
		}
		if(w < 496) {
			$(".class_know_more_full").addClass("col-12");
		}
		else {
			$(".class_know_more_full").removeClass("col-12");
		}
	});
});