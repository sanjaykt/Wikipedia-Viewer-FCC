/**
 * Created by sanjay on 2017-01-19.
 */

$(document).ready(function () {

    var searchTerm = '';

    function getWikipages() {

        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=10&namespace=0&format=json",
            dataType: 'jsonp',
            data: {
                format: 'json'
            },
            success: function (data) {

                for (var i = 0; i < 10; i++) {
                    $(".search-result ul").append("<li style='font-size: 40px'>" + data[1][i] + "</li><br>");
                    $(".search-result ul").append("<li style='font-size: 20px'>" + data[2][i] + "</li<br>");
                    $(".search-result ul").append("<li style='font-size: 30px'><a href='" + data[3][i] + "' target='_blank'> Read more at Wikipedia </a></li><br><hr>");
                }
                console.log(searchTerm);
            }
        });
    }

    $("#search-input").on("keypress", function (e) {

        if (event.which == 13) {
            searchTerm = $(this).val();
            $(this).val("");
            $(".search-result ul").empty();
            getWikipages();
        }
    });
});