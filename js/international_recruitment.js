$(document).ready(function() {
	var sec2_icon_descs = ["Transnational Organisation", "Dedicated Team", "Systematic, process driven approach", "Access of Global Talent", "14+ Years of Experience"];
	var sec2_icon_urls = ["Asset 17Vrinda Services.png", "Asset 10Vrinda Services.png", "Asset 14Vrinda Services.png", 
	"Asset 21Vrinda Services.png", "Asset 12Vrinda Services.png"];
	var sec2_icon_bigdes = ["Independent operations in 6 countries across 4 continents, helps us think global and act local.", "A project based approach with a dedicated team is assigned to ensure  focus and timely results.", "Matrix driven, time bound processes to ensure we deliver the best candidates on time, every time!", "Wide network, access to job boards, recruitment tools & resources, keeps us ahead in the race."];
	var pathToAssets = "assets/";
	$(".banner-image").attr("src", "assets/s02.png");
	$(".bh-styling").html("International Recruitment");
	$(".bd-styling").html("As the world is becoming a Global Village, talent too is transcending geographical boundaries. The technological revolutions, globalization coupled with ever changing macro-environment provides a great opportunity for talented workforce to scout for overseas opportunities. The clients too are looking beyond boundaries to win the war for talent.");
	$(".person-name").html("Siddarth Puri");
	$(".person-email").html("siddarth@vrindaglobal.com");
	for(var i = 0; i < 4; i++) {
		$(".icon-image").eq(i).attr("src", pathToAssets + sec2_icon_urls[i]);
		$(".icon-description").eq(i).html(sec2_icon_descs[i]);
		$(".big-de").eq(i).html(sec2_icon_bigdes[i]);
		
	}

});