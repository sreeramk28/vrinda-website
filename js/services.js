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
	if(w < 992) {
		$(".ctable").css("margin-left", "0");
		$(".ctable").css("margin-top", "0");
		//$(".vertical-line").hide();
	}
	else {
		$(".ctable").css("margin-left", "50px");
		$(".ctable").css("margin-top", "7px;");
		//$(".vertical-line").show();
	}
	if(w < 576) {
		$(".vertical-line").hide();
	}
	else {
		$(".vertical-line").show();
	}
	if(w < 768) {
			smallScreenBoom();
	}
	else bigScreenBoom();
	$(window).resize(function() {
		var w = $(window).width();
		if(w < 992) {
			$(".ctable").css("margin-left", "0");
			$(".ctable").css("margin-top", "0");
			
		}
		else {
			$(".ctable").css("margin-left", "50px");
			$(".ctable").css("margin-top", "7px;");	
			
		}
		if(w < 576) {
			$(".vertical-line").hide();
		}
		else {
			$(".vertical-line").show();
		}
		if(w < 768) {
			smallScreenBoom();
		}
		else bigScreenBoom();
	});
});