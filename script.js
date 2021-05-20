$(document).ready(function() {

    $("#getWeatherBtn").on("click", function() {

        var apiKey = "Use your own APIKEY here";
        var zip = $("#zipCode").val();
        var url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + "&appid=" + apiKey + "&units=imperial";



        $.getJSON(url, function(result) {
                var location = result.name;
                var condition = result.weather[0].main;
                var iconCode = result.weather[0].icon;
                var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                var currentTemp = result.main.temp;
                var tempMin = result.main.temp_min;
                var tempMax = result.main.temp_max;
                var windSpeed = result.wind.speed;
                var humid = result.main.humidity;
                var press = result.main.pressure;

                $("#locationName").fadeOut(function() {
                    $("#locationName").text(location)
                    $("#locationName").fadeIn();
                });

                $("#condition").fadeOut(function() {
                    $("#condition").text(condition);
                    $("#condition").fadeIn();
                });

                $("#weatherIcon").fadeOut(function() {
                    $("#weatherIcon").attr("src", iconUrl);
                    $("#weatherIcon").fadeIn();
                });

                $("#currentTemp").fadeOut(function() {
                    $("#currentTemp").text(Math.round(currentTemp));
                    $("#currentTemp").fadeIn();
                });

                $("#minTemp").fadeOut(function() {
                    $("#minTemp").text(Math.round(tempMin));
                    $("#minTemp").fadeIn();
                });

                $("#maxTemp").fadeOut(function() {
                    $("#maxTemp").text(Math.round(tempMax));
                    $("#maxTemp").fadeIn();
                });

                $("#windSpeed").fadeOut(function() {
                    $("#windSpeed").text(Math.round(windSpeed));
                    $("#windSpeed").fadeIn();
                });

                $("#humidity").fadeOut(function() {
                    $("#humidity").text(humid);
                    $("#humidity").fadeIn();
                });

                $("#pressure").fadeOut(function() {
                    $("#pressure").text(press);
                    $("#pressure").fadeIn();
                });

            })
            .fail(function(err) {
                alert('No such zip code! Try again.');
            })
            .always(function() {
                $("#zipCode").val("");
            });


    });

});