$(document).ready(function() {
	/*var bheads = ["Executive Search", "International Recruitment", "Permanent Recruitment", "Staffing Solutions", "Recruitment Process Outsourcing"];
	var bimgs = ["assets/s01.png", "assets/s02.png", "assets/s03.png", "assets/s04.png", "assets/s05.png"];
	var pnames = ["Prashant Chaudhary", "Siddarth Puri", "Dipankar Dutt", "Sarvjeet Singh Midha", "Siddarth Puri"];
	var pmails = ["prashant@vrindaglobal.com", "siddarth@vrindaglobal.com", "dipankar@vrindaglobal.com", "sarvjeet@vrindaglobal.com", "siddarth@vrindaglobal.com"];
	*/	
	var sec1_icon_descs = ["Data Driven Executive Search", "Candidate Profiling & Assessment", "Transnational Organisation", "Experience and Expertise"];
	var sec1_icon_urls = ["Asset 24Vrinda Services.png", "Asset 23Vrinda Services.png", "Asset 17Vrinda Services.png", "Asset 25Vrinda Services.png"];
	var sec1_icon_bigdes = ["Data is the new oil, and we are building advanced analytics to make it more scientific.", "We use conventional and analytical procedures for measuring people's capabilities & behavioral style.", "Independent operations in 6 countries across 4 continents, helps us think global and act local.", "We thrive on our consultants expertise across geographies and domains. Building a network on Niche!"];
	var pathToAssets = "assets/";
	$(".banner-image").attr("src", "assets/s01.png");
	$(".bh-styling").html("Executive Search");
	$(".bd-styling").html("Our executive search practice focuses on senior executive, board and C-Suite searches. The world’s leading brands seek our counsel to build best-in-class leadership teams, to manage performance, and for succession planning.<br><br>At the core of our value proposition is a bottom-up, comprehensive and research-oriented approach, using our comprehensive sectoral expertise.");
	$(".person-name").html("Prashant Chaudhary");
	$(".person-email").html("prashant@vrindaglobal.com");
	for(var i = 0; i < 4; i++) {
		$(".icon-image").eq(i).attr("src", pathToAssets + sec1_icon_urls[i]);
		$(".icon-description").eq(i).html(sec1_icon_descs[i]);
		$(".big-de").eq(i).html(sec1_icon_bigdes[i]);
	}
});