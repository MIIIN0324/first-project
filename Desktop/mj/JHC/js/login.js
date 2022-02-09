$(document).ready(function(){
    var a = 0 
   setInterval(function(){
        var next = (a + 1)%3
       $(".eventImg > div").eq(a).fadeOut();
       $(".eventImg > div").eq(next).fadeIn();
       a = next
   },3000);       
});
