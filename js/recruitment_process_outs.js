$(document).ready(function() {
	var sec5_icon_descs = ["Existing Talent Pool", "Flexible and Need based", "Value for Money", "24/7 Business Operations", "Global Expertise"];
	var sec5_icon_urls = ["Asset 2Vrinda Services.png", "Asset 6Vrinda Services.png", "Asset 1Vrinda Services.png", 
	"Asset 3Vrinda Services.png", "Asset 11Vrinda Services.png"];
	var sec5_icon_bigdes = ["A repository of profiles, that have been pre-screened and evaluated, ensuring we don’t start from scratch every time.", "Providing the flexibility, that your business demands from time to time, insourcing, temping or project based.", "Our endeavor is to ensure we deliver value for each buck that you spend, quite literally.", "A dedicated team, across locations ensures capabilities of working in almost all time zones."];
	var pathToAssets = "assets/";
	$(".banner-image").attr("src", "assets/s05.png");
	$(".bh-styling").html("Recruitment Process Outsourcing");
	$(".bd-styling").html("As a talent advisor with deep expertise, world class resources, and a focus on innovation, we can help you tackle even the most complex andchallenging talent needs. You can leverage our experience of working across geographies and industries to streamline recruitment process outsourcing solutions that contribute to improved productivity and performance.<br><br>Partner with us to experience tailor-made RPO solutions to drive your business.");
	$(".person-name").html("Siddarth Puri");
	$(".person-email").html("siddarth@vrindaglobal.com");

	for(var i = 0; i < 4; i++) {
		$(".icon-image").eq(i).attr("src", pathToAssets + sec5_icon_urls[i]);
		$(".icon-description").eq(i).html(sec5_icon_descs[i]);
		$(".big-de").eq(i).html(sec5_icon_bigdes[i]);
	}
});