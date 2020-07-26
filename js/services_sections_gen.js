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
	var bheads = ["International<br> Recruitment", "Permanent<br> Recruitment", "Staffing Solutions", "Recruitment<br> Process<br> Outsourcing"];
	var bimgs = ["assets/s2.jpeg", "assets/s3.jpeg", "assets/s4.jpeg", "assets/s5.jpeg"];
	var pnames = ["Siddarth Puri", "Dipankar Dutt", "Sarvjeet Singh Midha", "Siddarth Puri"];
	var pmails = ["siddarth@vrindaglobal.com", "dipankar@vrindaglobal.com", "sarvjeet@vrindaglobal.com", "siddarth@vrindaglobal.com"];
	var sec2_icon_descs = ["Transnational Organisation", "Dedicated Team", "Systematic, process driven approach", "Access of Global Talent", "14+ Years of Experience"];
	var sec3_icon_descs = ["Geographical Spread", "Low Response Time", "Flexible Engagement Options", "Systematic, process driven approach", "14 + Years of Experience"];
	var sec4_icon_descs = ["Geographical Spread", "Social Recruiting", "Speed of Hiring", "Pre-screened Candidates", "Flexible Engagement Options"];
	var sec5_icon_descs = ["Existing Talent Pool", "Flexible and Need based", "Value for Money", "24/7 Business Operations", "Global Expertise"];
	
	var sec2_icon_urls = ["Asset 17Vrinda Services.jpg", "Asset 10Vrinda Services.jpg", "Asset 14Vrinda Services.jpg", 
	"Asset 21Vrinda Services.jpg", "Asset 12Vrinda Services.jpg"];
	var sec3_icon_urls = ["Asset 17Vrinda Services.jpg", "Asset 16Vrinda Services.jpg", "Asset 6Vrinda Services.jpg", 
	"Asset 14Vrinda Services.jpg", "Asset 12Vrinda Services.jpg"];
	var sec4_icon_urls = ["Asset 17Vrinda Services.jpg", "Asset 4Vrinda Services.jpg", "Asset 16Vrinda Services.jpg", 
	"Asset 5Vrinda Services.jpg", "Asset 15Vrinda Services.jpg"];
	var sec5_icon_urls = ["Asset 2Vrinda Services.jpg", "Asset 6Vrinda Services.jpg", "Asset 1Vrinda Services.jpg", 
	"Asset 3Vrinda Services.jpg", "Asset 11Vrinda Services.jpg"];
	
	for(var i = 0; i < 4; i++) {

		var p = $(".service-section").last().clone();
		$(".service-section").last().after(p);
		$(".service-section .section-link").last().attr("id", sec_ids[i]);
		$(".service-section .banner-image").last().attr("src", bimgs[i]);
		$(".service-section .banner-head").last().html(bheads[i]);
		$(".service-section .person-name").last().html(pnames[i]);
		$(".service-section .person-email").last().html(pmails[i]);
		var cnt;
		if(i == 0) {
			$(".service-section .bd-styling").last().html("As the world is becoming a Global Village, talent too is transcending geographical boundaries. The technological revolutions, globalization coupled with ever changing macro-environment provides a great opportunity for talented workforce to scout for overseas opportunities. The clients too are looking beyond boundaries to win the war for talent.");
			var n = $(".service-section .icon-image").length;
			cnt = 0;
			for(var j = n - 5; j < n; j++) {
				$(".service-section .icon-image").eq(j).attr("src", "assets/" + sec2_icon_urls[cnt]);
				$(".service-section .icon-description").eq(j).html(sec2_icon_descs[cnt]);
				cnt++;
			}
		}
		else if(i == 1) {
			$(".service-section .bd-styling").last().html("Our permanent recruitment division can easily partner with organisations of all sizes and deliver best-fit talent across industries. With an active database of over a million candidates and specialist knowledge of key business verticals, we will deliver the best talent in the shortest time possible.");
			var n = $(".service-section .icon-image").length;
			cnt = 0;
			for(var j = n - 5; j < n; j++) {
				$(".service-section .icon-image").eq(j).attr("src", "assets/" + sec3_icon_urls[cnt]);
				$(".service-section .icon-description").eq(j).html(sec3_icon_descs[cnt]);
				cnt++;
			}
		}
		else if(i == 2) {
			$(".service-section .bd-styling").last().html("In today's dynamic markets, temporary staff can offer agility and cost savings to businesses. Our trained personnel spread across our offices along with our use of cutting edge technology will equip your business with cost-effective temp staffing solutions that maximize efficiency, improve productivity and maintain compliance across skill sets.");
			var n = $(".service-section .icon-image").length;
			cnt = 0;
			for(var j = n - 5; j < n; j++) {
				$(".service-section .icon-image").eq(j).attr("src", "assets/" + sec4_icon_urls[cnt]);
				$(".service-section .icon-description").eq(j).html(sec4_icon_descs[cnt]);
				cnt++;
			}
		}
		else {
			$(".service-section .bd-styling").last().html("As a talent advisor with deep expertise, world class resources, and a focus on innovation, we can help you tackle even the most complex andchallenging talent needs. You can leverage our experience of working across geographies and industries to streamline recruitment process outsourcing solutions that contribute to improved productivity and performance. Partner with us to experience tailor-made RPO solutions to drive your business.");
			var n = $(".service-section .icon-image").length;
			cnt = 0;
			for(var j = n - 5; j < n; j++) {
				$(".service-section .icon-image").eq(j).attr("src", "assets/" + sec5_icon_urls[cnt]);
				$(".service-section .icon-description").eq(j).html(sec5_icon_descs[cnt]);
				cnt++;
			}
		}
	}

});