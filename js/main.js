var class_navbar_custom1_black_bg = false;

$(document).ready(function() {

    $(".class_navbar_custom2").hide();


    var jumbo = document.getElementById("id_carousel_jumbo");
    $(".class_slide_num").html("1");
    function show1(){
      // alert("Hi");
      $('.class_tab_number5').css("color", "#666666");
      $('.class_tab_number4').css("color", "#666666");
      $('.class_tab_number3').css("color", "#666666");
      $('.class_tab_number2').css("color", "#666666");

      $('.class_tab_number1').css("color", "#165e9e");
      $(".class_slide_num").html("1");
      document.getElementById("id_carousel_heading").innerHTML = "Executive Search";
      document.getElementById("id_carousel_description").innerHTML = 
      "An innovative way to discover key individuals<br> who are not visible within the marketplace<br> and not actively looking for a career change.";
      jumbo.style.background = "url('assets/01.jpg') no-repeat center bottom/cover";
    }
    function show2(){
      // alert("Hi");
      $('.class_tab_number5').css("color", "#666666");
      $('.class_tab_number4').css("color", "#666666");
      $('.class_tab_number3').css("color", "#666666");
      $('.class_tab_number1').css("color", "#666666");

      $('.class_tab_number2').css("color", "#165e9e");
      $(".class_slide_num").html("2");
      document.getElementById("id_carousel_heading").innerHTML = "International Recruitment";
      document.getElementById("id_carousel_description").innerHTML = 
      "The technological revolutions & globalization provides<br> a great opportunity for talented workforce to scout for<br> overseas opportunities.";
      
      jumbo.style.background = "url('assets/02.jpg') no-repeat center bottom/cover";
      
    }
     function show3(){
      // alert("Hi");
      $('.class_tab_number5').css("color", "#666666");
      $('.class_tab_number4').css("color", "#666666");
      $('.class_tab_number2').css("color", "#666666");
      $('.class_tab_number1').css("color", "#666666");

      $('.class_tab_number3').css("color", "#165e9e");
      $(".class_slide_num").html("3");
      document.getElementById("id_carousel_heading").innerHTML = "Permanent Recruitment";
      document.getElementById("id_carousel_description").innerHTML = 
      "With strong database and expertise in key<br> business verticals, we deliver the best talent<br> in the shortest time possible.";
      jumbo.style.background = "url('assets/03.jpg') no-repeat center bottom/cover"; 
    }
     function show4(){
      $('.class_tab_number5').css("color", "#666666");
      $('.class_tab_number3').css("color", "#666666");
      $('.class_tab_number2').css("color", "#666666");
      $('.class_tab_number1').css("color", "#666666");

      $('.class_tab_number4').css("color", "#165e9e");
      $(".class_slide_num").html("4");
      document.getElementById("id_carousel_heading").innerHTML = "Staffing Solutions";
      document.getElementById("id_carousel_description").innerHTML = 
      "With trained personnel & technology, we help your<br> business with a cost-effective staffing solutions<br> which strengthens efficiency, productivity across<br> skill sets.";
      jumbo.style.background = "url('assets/04.jpg') no-repeat center bottom/cover";
      
    }
     function show5(){
      // alert("Hi");
      $('.class_tab_number4').css("color", "#666666");
      $('.class_tab_number3').css("color", "#666666");
      $('.class_tab_number2').css("color", "#666666");
      $('.class_tab_number1').css("color", "#666666");

      $('.class_tab_number5').css("color", "#165e9e");

      $(".class_slide_num").html("5");
      document.getElementById("id_carousel_heading").innerHTML = "Recruitment Process Outsourcing";
      //alert(document.getElementById("id_carousel_heading").innerHTML);
      document.getElementById("id_carousel_description").innerHTML = 
      "With deep expertise, world class resources, and<br> a focus on innovation, we can help you tackle even<br> the most complex and challenging talent needs.";
      jumbo.style.background = "url('assets/05.jpg') no-repeat center bottom/cover";
    }
    
    
    $("#id_carousel_tab1").click(show1);

    $("#id_carousel_tab2").click(show2);

    $("#id_carousel_tab3").click(show3);

    $("#id_carousel_tab4").click(show4);

    $("#id_carousel_tab5").click(show5);
    $("#id_prev_arrow").click(function() {
      
      if($(".class_slide_num").html() === "1") {
        //alert($(".class_slide_num").html());
        show5();
      }
      else if($(".class_slide_num").html() === "2") {
        show1();
      }
      else if($(".class_slide_num").html() === "3") {
        show2();
      }
      else if($(".class_slide_num").html() === "4") {
        show3();
      }
      else if($(".class_slide_num").html() === "5") {
        show4();
      }
    });
    $("#id_next_arrow").click(function() {
      
      if($(".class_slide_num").html() === "1") {
        //alert($(".class_slide_num").html());
        show2();
      }
      else if($(".class_slide_num").html() === "2") {
        show3();
      }
      else if($(".class_slide_num").html() === "3") {
        show4();
      }
      else if($(".class_slide_num").html() === "4") {
        show5();
      }
      else if($(".class_slide_num").html() === "5") {
        show1();
      }
    });
    function insertAtIndex(i) {
        if(i === 0) {
          $("#id_carousel_jumbo").prepend("<div>okay things</div>");        
          return;
        }
        $("#id_carousel_jumbo > div:nth-child(" + (i) + ")").after("<h1>great things</h1>");
    }
    function doInsert() {
      insertAtIndex(0);
    }
    var wi = $(window).width();
      if (wi > 750) {
        $("#arrows").hide();
        $("#id_carousel_tabs").show();
        
        //$(".class_carousel_general").css({"height" : "100vh"});
        $(".class_carou_content").css({"top" : "35%"});
        $(".class_row_relative>div:nth-child(2)>br").hide();

        //$(".class_about_box").Class("col");
        //$(".class_about_space").removeClass("col-md-1");
      }
      if (wi <= 750) {
        $("#id_carousel_tabs").hide();
          $("#arrows").show();
          //$(".class_carousel_general").css({"height" : "100vh"});
          $(".class_carou_content").css({"top" : "50%"});
          $(".class_about_box").removeClass("col class_col_border");
          $(".class_about_space2").removeClass("col-md-1 class_col_border");
          $(".class_about_space1").removeClass("col-md-1");
          $(".class_about_box").addClass("class_about_box_full_width");
          $(".class_row_relative>div:nth-child(2)>br").show();
          $(".class_col_padding>br").hide();
          $(".class_col_padding").removeClass("text-center");
          $(".class_col_padding > span").css({"padding-left": "15px"});

          //doInsert();
          //jumbo.style.background = "#000";
          //$("#id_carousel_heading").hide();
          //$("#id_carousel_description").hide();
      }
    $(window).resize(function(){
        var w = $(window).width();
        if (w > 750) {

          $("#arrows").hide();
          $("#id_carousel_tabs").show();
          
          $(".class_carou_content").css({"top" : "35%"});
          $(".class_about_box").addClass("col class_col_border");
          $(".class_about_space2").addClass("col-md-1 class_col_border");
          $(".class_about_space1").addClass("col-md-1");
          $(".class_about_box").removeClass("class_about_box_full_width");
          $(".class_row_relative>div:nth-child(2)>br").hide();
          $(".class_col_padding>br").show();
          $(".class_col_padding").addClass("text-center");
          $(".class_col_padding > span").css({"padding-left": "0"});
          //$("#id_carousel_heading").show();
          //$("#id_carousel_description").show();
        }
        if (w <= 750) {
          //alert(w);
          $("#id_carousel_tabs").hide();
          $("#arrows").show();
          
          $(".class_carou_content").css({"top" : "50%"});
          $(".class_about_box").removeClass("col class_col_border");
          $(".class_about_space2").removeClass("col-md-1 class_col_border");
           $(".class_about_space1").removeClass("col-md-1");
           $(".class_about_box").addClass("class_about_box_full_width");
           $(".class_row_relative>div:nth-child(2)>br").show();
           $(".class_col_padding>br").hide();
           $(".class_col_padding").removeClass("text-center");
           $(".class_col_padding > span").css({"padding-left": "15px"});
          //var contents = $(".class_carou_content");
          //doInsert();
          //jumbo.style.background = "#000";
          //$("#id_carousel_description").hide();
          //$("#id_carousel_heading").hide();
        }
    });


    // $(".class_navbar_custom1").hide();

    /*var w2 = $(window).width();
    if (w2 > 750 && w2 < 978) {
        $("#id_thewmap").removeClass("img-fluid");
        $("#id_thewmap").attr({"width": "500", "height":"200"});
        $("#id_thewmap").attr("width", 200);
        //$(".class_about_box").Class("col");
        //$(".class_about_space").removeClass("col-md-1");
    }
    else {
      $("#id_thewmap").removeAttr({"width": "500", "height":"200"});
      $("#id_thewmap").addClass("img-fluid");
    }
    
    $(window).resize(function() {
      var w3 = $(window).width();
      if (w3 > 750 && w3 < 978) {
          $("#id_thewmap").removeClass("img-fluid");
          $("#id_thewmap").attr({"width": "500", "height":"200"});
          $("#id_thewmap").attr("width", 200);
          //$(".class_about_box").Class("col");
          //$(".class_about_space").removeClass("col-md-1");
      }
      else {
        $("#id_thewmap").removeAttr({"width": "500", "height":"200"});
        $("#id_thewmap").addClass("img-fluid");
      }
    });*/
      
    var carousel_tab_control_section = $(".class_carousel_tab_control").offset().top;

      $(window).scroll(function(){

        
          // var bottom_of_object = $(".class_carousel_div").offset().top + $(".class_carousel_div").outerHeight()+440;
          // var bottom_of_window = $(window).scrollTop() + $(window).height();
          if($(this).scrollTop() > carousel_tab_control_section){
            // $(".class_navbar_custom1").addClass("class_navbar_custom2");
            // $(".class_navbar_custom2").removeClass("class_navbar_custom1");
            // $(".class_nav_link_custom1").addClass("class_nav_link_custom2");
            // $(".class_nav_link_custom1").removeClass("class_nav_link_custom1");
            // $(".class_brand_image").attr('src', 'assets/Logo BuleHome .png');
            $(".class_navbar_custom2").show();
          }
          else{
            // $("#id_nav_handler").removeAttr("background-color");
            $(".class_navbar_custom2").hide();
            // $(".class_navbar_custom2").addClass("class_navbar_custom1");
            // $(".class_navbar_custom1").removeClass("class_navbar_custom2");
            // $(".class_nav_link_custom2").addClass("class_nav_link_custom1");
            // $(".class_nav_link_custom1").removeClass("class_nav_link_custom2");
            // $(".class_brand_image").attr('src', 'assets/Logo Png WhiteHome .png');
            // $("#id_nav_handler").css("background-color", "#fff");
          }
      });



      // $(".navbar-toggler").click(function(){
      //  // alert("Hello");
      //  var array = [];

      //  var class_name = $('#id_nav_handler').attr('class').toString();
      //  console.log(class_name);
      //  array = class_name.split(" ");
      //  console.log(array);

      //  if($(window).width()<=700 && array[4]==='class_navbar_custom1'){
      //    if(!class_navbar_custom1_black_bg){
      //      alert("black");
      //      $(".class_navbar_custom1").css("background-color", "#000");
      //      class_navbar_custom1_black_bg = true;
      //    }
      //    else{
      //      $(".class_navbar_custom1").css("background-color", "transparent");
      //      class_navbar_custom1_black_bg = false;
      //    }
      //  }
        
      // });


      $("#id_anchor_cookies_modal").click(function(){
        alert("anchored");
      });





      
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});