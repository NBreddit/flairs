$(document).ready(function() {
  var folder = "flairs/";
$("div").css("border", "3px solid red");
  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) {
                  $("#content").append( "<img src='" + val +"'>" );
              }
          });
      }
  });
});
