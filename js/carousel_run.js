/*$(document).ready(function(){	
	var idx = 0;
	var p = setInterval(timing, 6000);
	function addIndex() {
		idx = (idx + 1) % 5;
	}
	function timing() {
		addIndex();
		displayy(idx);
	}
	
	function displayy(indx) {
		var slides = document.getElementsByClassName("class_carousel_general");
		for(var i = 0; i < 5; i++) {
			slides[i].style.display = 'none';
		}
		slides[indx].style.display = 'block';
	}
	
	$("#id_carousel_tab1").click(function() {
		idx = 0; 
		clearInterval(p);
		p = setInterval(timing, 6000);
	});
	$("#id_carousel_tab2").click(function() {
		idx = 1;
		clearInterval(p);
		p = setInterval(timing, 6000);
	});
	$("#id_carousel_tab3").click(function() {
		idx = 2;
		clearInterval(p);
		p = setInterval(timing, 6000);
	});
	$("#id_carousel_tab4").click(function() {
		idx = 3;
		clearInterval(p);
		p = setInterval(timing, 6000);
	});
	$("#id_carousel_tab5").click(function() {
		idx = 4;
		clearInterval(p);
		p = setInterval(timing, 6000);
	});
	$(window).resize(function(){
    	var w = $(window).width();
    	if (w < 768) {
    		$(".class_carousel_tab_control").hide();
    	}
    	if(w >= 768) {
    		$(".class_carousel_tab_control").show();	
    	}
	}); 
});*/