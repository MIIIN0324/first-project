$(document).ready(function(){

    $(".gnb > li:last-child").on("mouseover", function(){
       $(".subGnb").stop().slideDown(300); 
    });
    $(".gnb > li:last-child").on("mouseleave", function(){
       $(".subGnb").stop().slideUp(300); 
    });
    
    $(".moBtn").on("click",function(){
       var $img = $(this).find("img"),
           $imgSrc = $img.attr("src");
        
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $img.attr("src",$imgSrc.replace("toggle.svg","close.svg"));
            $(".modal").show().css({
                "display" : "block"
            });
            $("nav").css({
               "left" : 0
            });
        } else {
            $(this).removeClass("active");
            $img.attr("src",$imgSrc.replace("close.svg","toggle.svg"));
            $(".modal").hide();
            $("nav").css({
                "left" : "-70%"
            });
        }
    });
    
    //footer
   $(".logoWrap span:first-of-type").click(function(){
      $(".personal_wrap").fadeIn("fast");
       
       $(".personal_wrap").bind("mouseenter touchstart", function(e){
           var current = $(window).scrollTop();
           $(window).scroll(function(event){
              $(window).scrollTop(current); 
           });
       });
       $(".personal_wrap").bind("mouseleave touchend", function(e){
          $(window).off("scroll");
       });
   });
    
    $(".logoWrap span:last-of-type").click(function(){
        $(".agreement_wrap").fadeIn("fast");
        
       $(".agreement_wrap").bind("mouseenter touchstart", function(e){
           var current1 = $(window).scrollTop();
           $(window).scroll(function(event){
              $(window).scrollTop(current1);
           });
       });
        $(".agreement_wrap").bind("mouseleave touchend", function(e){
           $(window).off("scroll");
        });
    });
    
    
    //footer_close
    $(".footer_close").click(function(){
       $(".personal_wrap").fadeOut("fast");
        $(".agreement_wrap").fadeOut("fast");
        
        $(".personal_wrap").bind("mouseleave touchend",function(e){
            $(window).on("scroll"); 
        });
        
        $(".agreement_wrap").bind("mouseleave touchend",function(e){
           $(window).on("scroll"); 
        });
    });
    
   
    });
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1500) {
          $('#toTop').fadeIn();
      } else {
          $('#toTop').fadeOut();
      }
   });
    $('#toTop').click(function(){
       $('html,body').animate({
          scrollTop : 0 
       },400);
        return false;
    });
