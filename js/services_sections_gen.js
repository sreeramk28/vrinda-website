$(document).ready(function() {
	/*
		infos:
		banner-image
		banner-head
		bd-styling
		icon-image 1-5
		icon-description 1-5
		person-name
		person-email
	*/
	var sec_ids = ["inter_rec", "perm_rec", "staffing", "recpo"];
	var bheads = ["International<br> Recruitment", "Permanent<br> Recruitment", "Staffing Solutions", "Recruitment Process<br> Outsourcing"];
	var bimgs = ["assets/s2.jpg", "assets/s3.jpg", "assets/s4.jpg", "assets/s5.jpg"];
	var pnames = ["Siddarth Puri", "Dipankar Dutt", "Sarvjeet Singh Midha", "Siddarth Puri"];
	var pmails = ["siddarth@vrindaglobal.com", "dipankar@vrindaglobal.com", "sarvjeet@vrindaglobal.com", "siddarth@vrindaglobal.com"];
	var sec2_icon_descs = ["Transnational Organisation", "Dedicated Team", "Systematic, process driven approach", "Access of Global Talent", "14+ Years of Experience"];
	var sec3_icon_descs = ["Geographical Spread", "Low Response Time", "Flexible Engagement Options", "Systematic, process driven approach", "14 + Years of Experience"];
	var sec4_icon_descs = ["Geographical Spread", "Social Recruiting", "Speed of Hiring", "Pre-screened Candidates", "Flexible Engagement Options"];
	var sec5_icon_descs = ["Existing Talent Pool", "Flexible and Need based", "Value for Money", "24/7 Business Operations", "Global Expertise"];
	
	var sec2_icon_urls = ["Asset 17Vrinda Services.png", "Asset 10Vrinda Services.png", "Asset 14Vrinda Services.png", 
	"Asset 21Vrinda Services.png", "Asset 12Vrinda Services.png"];
	var sec3_icon_urls = ["Asset 17Vrinda Services.png", "Asset 16Vrinda Services.png", "Asset 6Vrinda Services.png", 
	"Asset 14Vrinda Services.png", "Asset 12Vrinda Services.png"];
	var sec4_icon_urls = ["Asset 17Vrinda Services.png", "Asset 4Vrinda Services.png", "Asset 16Vrinda Services.png", 
	"Asset 5Vrinda Services.png", "Asset 15Vrinda Services.png"];
	var sec5_icon_urls = ["Asset 2Vrinda Services.png", "Asset 6Vrinda Services.png", "Asset 1Vrinda Services.png", 
	"Asset 3Vrinda Services.png", "Asset 11Vrinda Services.png"];
	
	var sec2_icon_bigdes = ["Independent operations in 6 countries across 4 continents, helps us think global and act local.", "A project based approach with a dedicated team is assigned to ensure  focus and timely results.", "Matrix driven, time bound processes to ensure we deliver the best candidates on time, every time!", "Wide network, access to job boards, recruitment tools & resources, keeps us ahead in the race."];
	var sec3_icon_bigdes = ["Independent operations in 6 countries across 4 continents, helps us think global and act local.", "Our dedicated back-office with ultramodern infrastructure ensures we are agile and responsive.", "Providing the flexibility, that your business demands from time to time, insourcing, temping or project based.", "Matrix driven, time bound processes to ensure we deliver the best candidates on time, every time!"];
	var sec4_icon_bigdes = ["Independent operations in 6 countries across 4 continents, helps us think global and act local.", "Large recruitments for entry level jobs, our social media managers are a pro at it.", "Our dedicated back-office team, with ultramodern infrastructure ensure we are agile and responsive.", "An on demand service to ensure your Talent Acquisition team gets to spend more time with candidates and not the procedures."];
	var sec5_icon_bigdes = ["A repository of profiles, that have been pre-screened and evaluated, ensuring we don’t start from scratch every time.", "Providing the flexibility, that your business demands from time to time, insourcing, temping or project based.", "Our endeavor is to ensure we deliver value for each buck that you spend, quite literally.", "A dedicated team, across locations ensures capabilities of working in almost all time zones."];
	
	for(var i = 0; i < 4; i++) {

		var p = $(".service-section").last().clone();
		$(".service-section").last().after(p);
		$(".service-section .section-link").last().attr("id", sec_ids[i]);
		$(".service-section .banner-image").last().css("background", "url(" + bimgs[i] + ") no-repeat center bottom/cover");
		$(".service-section .banner-head").last().html(bheads[i]);
		$(".service-section .person-name").last().html(pnames[i]);
		$(".service-section .person-email").last().html(pmails[i]);
		var cnt;
		if(i == 0) {
			$(".service-section .bd-styling").last().html("As the world is becoming a Global Village, talent too is transcending geographical boundaries. The technological revolutions, globalization coupled with ever changing macro-environment provides a great opportunity for talented workforce to scout for overseas opportunities. The clients too are looking beyond boundaries to win the war for talent.");
			var n = $(".service-section .icon-image").length;
			cnt = 0;
			for(var j = n - 4; j < n; j++) {
				$(".service-section .icon-image").eq(j).attr("src", "assets/" + sec2_icon_urls[cnt]);
				$(".service-section .icon-description").eq(j).html(sec2_icon_descs[cnt]);
				$(".service-section .big-de").eq(j).html(sec2_icon_bigdes[cnt]);
				cnt++;
			}
		}
		else if(i == 1) {
			$(".service-section .bd-styling").last().html("Our permanent recruitment division can easily partner with organisations of all sizes and deliver best-fit talent across industries. With an active database of over a million candidates and specialist knowledge of key business verticals, we will deliver the best talent in the shortest time possible.");
			var n = $(".service-section .icon-image").length;
			cnt = 0;
			for(var j = n - 4; j < n; j++) {
				$(".service-section .icon-image").eq(j).attr("src", "assets/" + sec3_icon_urls[cnt]);
				$(".service-section .icon-description").eq(j).html(sec3_icon_descs[cnt]);
				$(".service-section .big-de").eq(j).html(sec3_icon_bigdes[cnt]);
				cnt++;
			}
		}
		else if(i == 2) {
			$(".service-section .bd-styling").last().html("In today's dynamic markets, temporary staff can offer agility and cost savings to businesses. Our trained personnel spread across our offices along with our use of cutting edge technology will equip your business with cost-effective temp staffing solutions that maximize efficiency, improve productivity and maintain compliance across skill sets.");
			var n = $(".service-section .icon-image").length;
			cnt = 0;
			for(var j = n - 4; j < n; j++) {
				$(".service-section .icon-image").eq(j).attr("src", "assets/" + sec4_icon_urls[cnt]);
				$(".service-section .icon-description").eq(j).html(sec4_icon_descs[cnt]);
				$(".service-section .big-de").eq(j).html(sec4_icon_bigdes[cnt]);
				cnt++;
			}
		}
		else {
			$(".service-section .bd-styling").last().html("As a talent advisor with deep expertise, world class resources, and a focus on innovation, we can help you tackle even the most complex andchallenging talent needs. You can leverage our experience of working across geographies and industries to streamline recruitment process outsourcing solutions that contribute to improved productivity and performance.<br><br> Partner with us to experience tailor-made RPO solutions to drive your business.");
			var n = $(".service-section .icon-image").length;
			cnt = 0;
			for(var j = n - 4; j < n; j++) {
				$(".service-section .icon-image").eq(j).attr("src", "assets/" + sec5_icon_urls[cnt]);
				$(".service-section .icon-description").eq(j).html(sec5_icon_descs[cnt]);
				$(".service-section .big-de").eq(j).html(sec5_icon_bigdes[cnt]);
				cnt++;
			}
		}
	}

});