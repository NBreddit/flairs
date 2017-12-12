$(document).ready(function() {
  $.ajax({
    url: "/repos/:NBreddit/:repo/contents/:icons",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(res) {
      console.log(res)
    }
  });
});
