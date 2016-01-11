jQuery(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });

  $("#clickable-1").click(function() {
    $("#initially-hidden-1").fadeToggle();
  });

  $("#clickable-2").click(function() {
    $("#initially-hidden-2").fadeToggle();
  });

  $("#clickable-3").click(function() {
    $("#initially-hidden-3").fadeToggle();
  });
});
