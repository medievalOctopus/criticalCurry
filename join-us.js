$(document).ready(function(){
  $("p").hide();
  $("div").click(function(){
    $("div").fadeOut(5);
    $("p").show();
  });
});
