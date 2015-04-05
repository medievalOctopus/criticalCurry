$(document).ready(function(){
  $("p").hide();
  $("div").click(function(){
    $("div").fadeOut(500);
    $("p").show();
  });
});
