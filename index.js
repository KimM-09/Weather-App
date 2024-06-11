

const apiKey = "1af0216bb07194723f1508813638e3b6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather (city) {
    //await the response from the API call using the specified parameters
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    // if the response is 404 (not found) display the error and hide the weather information
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        //otherwise store the response in the data variable
    } else {
        let data = await response.json();

    //display the info returning from the API to the corresponding class names in the HTML
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    //Change the weather icon image according to the weather condition
    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if ( data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"; 
    } else if (data.weather[0].main = "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main = "Snow") {
        weatherIcon.src = "images/snow.png";
    }
    //display the weather condition and hide the error
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}
//call the checkWeather function when clicking the search icon using the info put into the input field
searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
