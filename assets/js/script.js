
//var incorrectWarningEl = document.querySelector("#incorrect-warning")
//var city = data.name
//var city = document.querySelector("#city-search").value


//var lon = data.coord.lon
//var lat = data.coord.lat 


//when search button is clicked
var getCurrentConditions = function (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba2728cbdcc99be3d1d810cfd5281dc0')
    .then(function(response) {
        return response.json() }) //Converts to json
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {//catches errors
    });
    
   
}


//var searchCityButtonEl = document.querySelector("#search-btn");
//searchCityButtonEl.addEventListener("click", getCurrentConditions);


getCurrentConditions();





//Current Weather function
/*var getCurrentConditions = function(units, city) {
    //Request
    fetch("https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=ba2728cbdcc99be3d1d810cfd5281dc0")
    .then(function(response) {
    //request was successful
    if (response.ok) {
        return (response.json())
    } else {
    //request unsuccessful
        throw new error("Not succesful.")
    }

    })
    //returning data
    .then(function(data) {
    //varialbes for request data
     
    fetch("https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=ba2728cbdcc99be3d1d810cfd5281dc0")
        .then(function(response) {
            if (response.ok) {
                console.log("SUCCESS")
                //return (response.json())
            } else {
                console.log("NOT SUCCESSFUL")
            }
            response.json()
            }).then(function(data) {
                console.log(data);
            })
        })
    .catch(function(error) {
        console.log("ERROR");
      });
      }

*/

    
    
    
    
   
  
