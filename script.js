
var apiKey = "Use your own APIKEY here"; // RESTful API WidgetCO
var ipInfo = "User your own Token here"; // https://ipinfo.io

function manualCall(zipCode) {
  let location;
  let condition;
  let icon;
  let currentTemp;
  let minTemp;
  let maxTemp;
  let windspeed;
  let humidity;
  let pressure;

  $.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=" + apiKey + "&units=imperial", function (result) {

    location = result.name;
    $("#locationName").fadeOut(function () {
      $("#locationName").text("Location: " + location).fadeIn(2000);
    });


    condition = result.weather[0].main;
    $("#condition").fadeOut(function () {
      $("#condition").text("Condition: " + condition).fadeIn(2000);
    });


    icon = result.weather[0].icon;
    $("#weatherIcon").fadeOut(function () {
      $("#weatherIcon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png").fadeIn(2000);
    });


    currentTemp = Math.round(result.main.temp);
    $("#currentTemp").fadeOut(function () { 
      $("#currentTemp").text(currentTemp).fadeIn(2000);});


    minTemp = Math.round(result.main.temp_min);
    $("#minTemp").fadeOut(function(){
      $("#minTemp").text(minTemp).fadeIn(2000);
    });
    

    maxTemp = Math.round(result.main.temp_max);
    $("#maxTemp").fadeOut(function(){
      $("#maxTemp").text(maxTemp).fadeIn(2000);
    });
    

    windspeed = Math.round(result.wind.speed);
    $("#windSpeed").fadeOut(function(){
       $("#windSpeed").text(windspeed).fadeIn(2000);
    });
   

    humidity = Math.round(result.main.humidity);
    $("#humidity").fadeOut(function(){
      $("#humidity").text(humidity).fadeIn(2000);
    });
    

    pressure = Math.round(result.main.pressure);
    $("#pressure").fadeOut(function(){
      $("#pressure").text(pressure).fadeIn(2000);
    });
    
  })
    .fail(function (err) {
      alert('No such zip code! Try again.');
    })
    .always(function () {
      $("#zipCode").val("");
    });
}

// On load gets the geo location and calls weather function
$(document).ready(function () {
  $.getJSON("https://ipinfo.io?" + "token=" + ipInfo, function (result) {
    let geoLocation = result.postal;
    manualCall(geoLocation);
  })
});

// Gets weather info when get weather button pressed
$("#getWeatherBtn").on("click", function () {
  let zipCode = $("#zipCode").val();
  manualCall(zipCode);
});
