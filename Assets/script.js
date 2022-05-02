//Assigned API key from OpenWeather website//
const APIkey = "8073216e969eb2182637ac26dd40e701"

const searchBtn = document.querySelector("#search-button")
searchBtn.addEventListener("click", function() {
    var cityName = document.querySelector("#enter-city").value
    console.log(cityName)
    const geoLink = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIkey
    fetch(geoLink)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data)
            const APIlink = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid=" + APIkey + "&units=imperial"
            fetch(APIlink)
                .then(function(res) {
                    return res.json()
                })
                .then(function(data) {
                    console.log(data)
                        //All dom manipulation goes here//
                })
        })
})