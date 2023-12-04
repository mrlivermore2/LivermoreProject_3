//resource link: https://www.w3schools.com/jquery/default.asp
$("#paragraph1").hide();
$("#paragraph2").hide();
$("#paragraph3").hide();
$(".jump").mouseenter(function(){
  
    $(this).animate(
      
      {bottom: "+=20px"},
      400,
      "swing",
      function(){
        $(this).animate(
          
          {bottom: "0px"},
          400,
          "swing"
          
        );/* end second animate */
      } /* end finish function */
    
    );/* end animate */
    
  });
  $("#paintbrush-img").click(function(){
    $("#paragraph1").show();

});
$("#paragraph1").click(function(){
$("#paragraph2").show();
});
$("#paragraph2").click(function(){
    $("#paragraph3").show();
});