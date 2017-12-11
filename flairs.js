$(document).ready(function() {
  var folder = "flairs/";

  $.ajax({
              url: "getimage.php",
              dataType: "json",
              success: function (data) {

                  $.each(data, function(i,filename) {
                      $('#content').append('<img src="'+ filename +'"><br>');
                  });
              }
          });
});
