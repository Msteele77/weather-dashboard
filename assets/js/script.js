var apiID = "ba2728cbdcc99be3d1d810cfd5281dc0";
var incorrectWarningEl = document.querySelector("#incorrect-warning")
var city = "Salt Lake City";

var searchCityButtonEl = document.querySelector("#search-btn");



//City Search
var buttonClickHandler = function (event) {
    console.log("itworked");
    
    
}

//Current Weather function
var getCityWeather = function() {
    console.log(apiID);
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=ba2728cbdcc99be3d1d810cfd5281dc0";
    //request
fetch (apiUrl).then(function(response) {
    //request was successful
    if (response.ok) {
        return (response.json())
       // displayCityWeather(); 
    //request was unsuccessful
    } else {
            displayError();
        }
    })
    .catch(function(error) {
        alert("Unable to complete search");
        
    });
    };



    var displayError = function () {
        incorrectWarningEl.textContent = "Please enter a valid city name";
     }

     //var displayCityWeather = function () {

     //}


searchCityButtonEl.addEventListener("click", buttonClickHandler);
getCityWeather();