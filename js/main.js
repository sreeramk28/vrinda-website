var class_navbar_custom1_black_bg = false;

$(document).ready(function() {
    var head1 = "Executive Search";
    var desc1 = "An innovative way to discover key individuals who are not visible within the marketplace and not actively looking for a career change."
    var head2 = "International Recruitment"; 
    var desc2 = "The technological revolutions & globalization provides a great opportunity for talented workforce to scout for overseas opportunities.";
    var head3 = "Permanent Recruitment"; 
    var desc3 =  "With strong database and expertise in key business verticals, we deliver the best talent in the shortest time possible.";
    var head4 = "Staffing Solutions";
    var desc4 = "With trained personnel & technology, we help your business with a cost-effective staffing solutions which strengthens efficiency, productivity across skill sets."; 
    var head5 = "Recruitment Process Outsourcing"; 
    var desc5 = "With deep expertise, world class resources, and a focus on innovation, we can help you tackle even the most complex and challenging talent needs.";
    var loc1 = "services.html#execsearch";
    var loc2 = "services.html#inter_rec";
    var loc3 = "services.html#perm_rec";
    var loc4 = "services.html#staffing";
    var loc5 = "services.html#recpo";
    $(".class_navbar_custom2").hide();

    var carousel_content;
    var jumbo = document.getElementById("id_carousel_jumbo");
    $(".class_slide_num").html("1");
    $(".slide_num").html("1");
    function show1(background_size){
      // alert("Hi");
      $('.class_tab_number5').css("color", "#666666");
      $('.class_tab_number4').css("color", "#666666");
      $('.class_tab_number3').css("color", "#666666");
      $('.class_tab_number2').css("color", "#666666");

      $('.class_tab_number1').css("color", "#165e9e");
      $(".class_slide_num").html("1"); $(".slide_num").html("1");
      document.getElementById("id_carousel_heading").innerHTML = "Executive Search";
      document.getElementById("id_carousel_description").innerHTML = 
      "An innovative way to discover key individuals<br> who are not visible within the marketplace<br> and not actively looking for a career change.";
      // $('#id_carousel_jumbo').fadeOut(1000, function() {
      //   $(this).css("background", "url('assets/01.jpg') no-repeat center bottom/cover").fadeIn(1000);
      // });
      jumbo.style.background = "url('assets/01.jpg') no-repeat center bottom/" + background_size;
      $(".carousel_mob_heading").html(head1);
      $(".carousel_mob_description").html(desc1);
      document.getElementById("chop_mob").href = loc1;
      document.getElementById("chop").href = loc1;

    }
    function show2(background_size){
      // alert("Hi");
      $('.class_tab_number5').css("color", "#666666");
      $('.class_tab_number4').css("color", "#666666");
      $('.class_tab_number3').css("color", "#666666");
      $('.class_tab_number1').css("color", "#666666");

      $('.class_tab_number2').css("color", "#165e9e");
      $(".class_slide_num").html("2"); $(".slide_num").html("2");
      document.getElementById("id_carousel_heading").innerHTML = "International Recruitment";
      document.getElementById("id_carousel_description").innerHTML = 
      "The technological revolutions & globalization provides<br> a great opportunity for talented workforce to scout for<br> overseas opportunities.";
      // $('#id_carousel_jumbo').fadeOut(1000, function() {
      //   $(this).css("background", "url('assets/02.jpg') no-repeat center bottom/cover").fadeIn(1000);
      // });
      jumbo.style.background = "url('assets/02.jpg') no-repeat center bottom/" + background_size;
      $(".carousel_mob_heading").html(head2);
      $(".carousel_mob_description").html(desc2);
      document.getElementById("chop_mob").href = loc2;
      document.getElementById("chop").href = loc2;
      
    }
     function show3(background_size){
      // alert("Hi");
      $('.class_tab_number5').css("color", "#666666");
      $('.class_tab_number4').css("color", "#666666");
      $('.class_tab_number2').css("color", "#666666");
      $('.class_tab_number1').css("color", "#666666");

      $('.class_tab_number3').css("color", "#165e9e");
      $(".class_slide_num").html("3"); $(".slide_num").html("3");
      document.getElementById("id_carousel_heading").innerHTML = "Permanent Recruitment";
      document.getElementById("id_carousel_description").innerHTML = 
      "With strong database and expertise in key<br> business verticals, we deliver the best talent<br> in the shortest time possible.";
      // $('#id_carousel_jumbo').fadeOut(1000, function() {
      //   $(this).css("background", "url('assets/03.jpg') no-repeat center bottom/cover").fadeIn(1000);
      // });
      jumbo.style.background = "url('assets/03.jpg') no-repeat center bottom/" + background_size; 
      $(".carousel_mob_heading").html(head3);
      $(".carousel_mob_description").html(desc3);
      document.getElementById("chop_mob").href = loc3;
      document.getElementById("chop").href = loc3;

    }
     function show4(background_size){
      $('.class_tab_number5').css("color", "#666666");
      $('.class_tab_number3').css("color", "#666666");
      $('.class_tab_number2').css("color", "#666666");
      $('.class_tab_number1').css("color", "#666666");

      $('.class_tab_number4').css("color", "#165e9e");
      $(".class_slide_num").html("4");$(".slide_num").html("4");
      document.getElementById("id_carousel_heading").innerHTML = "Staffing Solutions";
      document.getElementById("id_carousel_description").innerHTML = 
      "With trained personnel & technology, we help your<br> business with a cost-effective staffing solutions<br> which strengthens efficiency, productivity across<br> skill sets.";
      jumbo.style.background = "url('assets/04.jpg') no-repeat center bottom/" + background_size;
      // $('#id_carousel_jumbo').fadeOut(1000, function() {
      //   $(this).css("background", "url('assets/04.jpg') no-repeat center bottom/cover").fadeIn(1000);
      // });
      $(".carousel_mob_heading").html(head4);
      $(".carousel_mob_description").html(desc4);
      document.getElementById("chop_mob").href = loc4;
      document.getElementById("chop").href = loc4;
    }
     function show5(background_size){
      // alert("Hi");
      $('.class_tab_number4').css("color", "#666666");
      $('.class_tab_number3').css("color", "#666666");
      $('.class_tab_number2').css("color", "#666666");
      $('.class_tab_number1').css("color", "#666666");

      $('.class_tab_number5').css("color", "#165e9e");

      $(".class_slide_num").html("5"); $(".slide_num").html("5");
      document.getElementById("id_carousel_heading").innerHTML = "Recruitment Process Outsourcing";
      //alert(document.getElementById("id_carousel_heading").innerHTML);
      document.getElementById("id_carousel_description").innerHTML = 
      "With deep expertise, world class resources, and<br> a focus on innovation, we can help you tackle even<br> the most complex and challenging talent needs.";
      // $('#id_carousel_jumbo').fadeOut(1000, function() {
      //   $(this).css("background", "url('assets/05.jpg') no-repeat center bottom/cover").fadeIn(1000);
      // });
      jumbo.style.background = "url('assets/05.jpg') no-repeat center bottom/" + background_size;
      $(".carousel_mob_heading").html(head5);
      $(".carousel_mob_description").html(desc5);
      document.getElementById("chop_mob").href = loc5;
      document.getElementById("chop").href = loc5;
    }
    
    
    $("#id_carousel_tab1").click(function() {
      show1("cover");
    });

    $("#id_carousel_tab2").click(function() {
      show2("cover");
    });

    $("#id_carousel_tab3").click(function() {
      show3("cover");
    });

    $("#id_carousel_tab4").click(function() {
      show4("cover");
    });

    $("#id_carousel_tab5").click(function() {
      show5("cover");
    });
    $("#left_arrow").click(function() {
      //$('.class_carousel_general').css("height", "49vh");
      if($(".class_slide_num").html() === "1") {
        //alert($(".class_slide_num").html());
        show5("cover");
      }
      else if($(".class_slide_num").html() === "2") {
        show1("cover"); 
      }
      else if($(".class_slide_num").html() === "3") {
        show2("cover");
      }
      else if($(".class_slide_num").html() === "4") {
        show3("cover");
      }
      else if($(".class_slide_num").html() === "5") {
        show4("cover");
      }
    });
    $("#right_arrow").click(function() {
      
      if($(".class_slide_num").html() === "1") {
        //alert($(".class_slide_num").html());
        show2("cover");
      }
      else if($(".class_slide_num").html() === "2") {
        show3("cover");
        
      }
      else if($(".class_slide_num").html() === "3") {
        show4("cover");
      }
      else if($(".class_slide_num").html() === "4") {
        show5("cover");
      }
      else if($(".class_slide_num").html() === "5") {
        show1("cover");
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
    function smallScreenBoom() {
        //$(".id_industry_insights").css("background-position", "cover");
          $("#id_carousel_tabs").hide();
          $(".class_navbar_custom1").hide();
          
          if($("#id_nav_handler3").length) {
            ;
          }
          else { 
            $(".class_navbar_custom2").clone().prependTo("body");
            

            $("body").children().eq(0).removeClass("class_navbar_custom2");
            $("body").children().eq(0).addClass("class_navbar_custom3");
            $("body").children().eq(0).attr("id", "id_nav_handler3");
            $("body").children().eq(0).removeClass("fixed-top");
            $(".class_navbar_custom3").show();
          }
          $(".class_navbar_custom3").addClass("sticky-top");
          /*$(".navbar-toggler").click(function() {
            $(".class_navbar_custom1").css("opacity", "0.9");
          });*/
          $(".class_carousel_general").css({"height" : "200px"});
          //$(".class_carousel_general").css({"background-size" : "contain"});
          $(".class_carou_content").css({"top" : "50%"});
          $(".class_carou_content").hide();
          $("#mobile_content").show();
          /*icons section*/ /*don't touch*/
          $(".class_about_box").removeClass("col class_col_border");
          $(".class_about_space2").removeClass("col-md-1 class_col_border");
          $(".class_about_space1").removeClass("col-md-1");
          $(".class_about_box").addClass("class_about_box_full_width");
          $(".class_row_relative>div:nth-child(2)>br").show();
          $(".class_col_padding>br").hide();
          $(".class_col_padding").removeClass("text-center");
          $(".class_col_padding > span").css({"padding-left": "15px"});
    }
    function bigScreenBoom() {
          $(".class_navbar_custom1").show();
          $(".class_navbar_custom1").css("opacity", "0.85");
          $("#mobile_content").hide();
          $("#id_carousel_tabs").show();
          $(".class_carousel_general").css({"height" : "100vh"});
          $(".class_carou_content").show();
          //$(".class_carousel_general").css({"background-size" : "cover"});
          $(".class_carou_content").css({"top" : "35%"});
          $(".class_carou_content").show();
          /*don't touch*/
          $(".class_about_box").addClass("col class_col_border");
          $(".class_about_space2").addClass("col-md-1 class_col_border");
          $(".class_about_space1").addClass("col-md-1");
          $(".class_about_box").removeClass("class_about_box_full_width");
          $(".class_row_relative>div:nth-child(2)>br").hide();
          $(".class_col_padding>br").show();
          $(".class_col_padding").addClass("text-center");
          $(".class_col_padding > span").css({"padding-left": "0"});
    }
    var wi = $(window).width();
      if (wi <= 425) {
          
          smallScreenBoom();
          //doInsert();
          //jumbo.style.background = "#000";
          //$("#id_carousel_heading").hide();
          //$("#id_carousel_description").hide();
      }
      else if(wi > 425 && wi < 768) {
        smallScreenBoom();
        $(".class_carousel_general").css("height", "310px");
      }
      else if (wi >= 768) {
        $(".class_navbar_custom3").remove();
        $("#id_carousel_tabs").show();
        $("#mobile_content").hide();
        //$(".class_carousel_general").css({"height" : "100vh"});
        $(".class_carou_content").css({"top" : "35%"});
        $(".class_row_relative>div:nth-child(2)>br").hide();
        scrollerControl();
        //$(".class_about_box").Class("col");
        //$(".class_about_space").removeClass("col-md-1");
      }
      
      
      
    $(window).resize(function(){
        var w = $(window).width();
        if (w <= 425) {
          
          smallScreenBoom();
          //doInsert();
          //jumbo.style.background = "#000";
          //$("#id_carousel_heading").hide();
          //$("#id_carousel_description").hide();
        }
        else if(w > 425 && w < 768) {
          smallScreenBoom();
          $(".class_carousel_general").css("height", "310px");
        }
        
        else if (w >= 768) {
          $(".class_navbar_custom3").remove();
          bigScreenBoom();
          scrollerControl();
          //$("#id_carousel_heading").show();
          //$("#id_carousel_description").show();
        }
        
        
    });

      
      
    function scrollerControl() {
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
    }


      


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