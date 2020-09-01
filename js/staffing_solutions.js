$(document).ready(function() {
	var sec4_icon_descs = ["Geographical Spread", "Social Recruiting", "Speed of Hiring", "Pre-screened Candidates", "Flexible Engagement Options"];
	var sec4_icon_urls = ["Asset 17Vrinda Services.png", "Asset 4Vrinda Services.png", "Asset 16Vrinda Services.png", 
	"Asset 5Vrinda Services.png", "Asset 15Vrinda Services.png"];
	var sec4_icon_bigdes = ["Independent operations in 6 countries across 4 continents, helps us think global and act local.", "Large recruitments for entry level jobs, our social media managers are a pro at it.", "Our dedicated back-office team, with ultramodern infrastructure ensure we are agile and responsive.", "An on demand service to ensure your Talent Acquisition team gets to spend more time with candidates and not the procedures."];
	var pathToAssets = "assets/";
	$(".banner-image").attr("src", "assets/s04.png");
	$(".bh-styling").html("Staffing Solutions");
	$(".bd-styling").html("In today's dynamic markets, temporary staff can offer agility and cost savings to businesses. Our trained personnel spread across our offices along with our use of cutting edge technology will equip your business with cost-effective temp staffing solutions that maximize efficiency, improve productivity and maintain compliance across skill sets.");
	$(".person-name").html("Sarvjeet Singh Midha");
	$(".person-email").html("sarvjeet@vrindaglobal.com");
	for(var i = 0; i < 4; i++) {
		$(".icon-image").eq(i).attr("src", pathToAssets + sec4_icon_urls[i]);
		$(".icon-description").eq(i).html(sec4_icon_descs[i]);
		$(".big-de").eq(i).html(sec4_icon_bigdes[i]);	
	}
});