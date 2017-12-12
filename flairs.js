$(document).ready(function() {
    var folder = "icons/";

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
