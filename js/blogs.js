$(document).ready(function() {

	function showDesc() {
		$(this).find(".only-heading").slideUp(50, function(){});
		$(this).find(".bdescr").slideDown(300, function(){});
		
	}
	function hideDesc() {
		$(this).find(".bdescr").slideUp(50, function(){});
		$(this).find(".only-heading").slideDown(300, function(){});
	}
	$("#row-2").hide();
	$("#load-more").click(function() {
		$(this).fadeOut(200);
		$("#row-2").fadeIn(1500);
	});
	$(".bdescr").hide();
	$(".only-heading").show();

	$("#opener-1").hover(showDesc, hideDesc);
	$("#opener-2").hover(showDesc, hideDesc);
	$("#opener-3").hover(showDesc, hideDesc);
	$("#opener-4").hover(showDesc, hideDesc);
	$("#opener-5").hover(showDesc, hideDesc);
});