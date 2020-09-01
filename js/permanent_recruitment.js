$(document).ready(function() {
	var sec3_icon_descs = ["Geographical Spread", "Low Response Time", "Flexible Engagement Options", "Systematic, process driven approach", "14 + Years of Experience"];
	var sec3_icon_urls = ["Asset 17Vrinda Services.png", "Asset 16Vrinda Services.png", "Asset 6Vrinda Services.png", 
	"Asset 14Vrinda Services.png", "Asset 12Vrinda Services.png"];
	var sec3_icon_bigdes = ["Independent operations in 6 countries across 4 continents, helps us think global and act local.", "Our dedicated back-office with ultramodern infrastructure ensures we are agile and responsive.", "Providing the flexibility, that your business demands from time to time, insourcing, temping or project based.", "Matrix driven, time bound processes to ensure we deliver the best candidates on time, every time!"];
	var pathToAssets = "assets/";
	$(".banner-image").attr("src", "assets/s03.png");
	$(".bh-styling").html("Permanent Recruitment");
	$(".bd-styling").html("Our permanent recruitment division can easily partner with organisations of all sizes and deliver best-fit talent across industries. With an active database of over a million candidates and specialist knowledge of key business verticals, we will deliver the best talent in the shortest time possible.");
	$(".person-name").html("Dipankar Dutt");
	$(".person-email").html("dipankar@vrindaglobal.com");
	for(var i = 0; i < 4; i++) {
		$(".icon-image").eq(i).attr("src", pathToAssets + sec3_icon_urls[i]);
		$(".icon-description").eq(i).html(sec3_icon_descs[i]);
		$(".big-de").eq(i).html(sec3_icon_bigdes[i]);
		
	}
});