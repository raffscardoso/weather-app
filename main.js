
const apiKey = 'a34deb2c3c706b4554770a1416648c5a'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric'

async function checkWeather(){    
    const searchButton = document.querySelector(".search button")
    const weatherIcon = document.querySelector(".weather-icon")

    searchButton.addEventListener("click", async () => {
        let city = document.querySelector(".search input").value;
        const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
        let data = await response.json();

        if(response.status == 404) document.querySelector(".error").style.display = "block"

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

        if (data.weather[0].main == "Clouds") weatherIcon.src = "images/clouds.png"
            else if (data.weather[0].main == "Clear") weatherIcon.src = "images/clear.png"
            else if (data.weather[0].main == "Drizzle") weatherIcon.src = "images/drizzle.png"
            else if (data.weather[0].main == "Mist") weatherIcon.src = "images/mist.png"
            else if (data.weather[0].main == "Rain") weatherIcon.src = "images/rain.png"
            else if (data.weather[0].main == "Snow") weatherIcon.src = "images/snow.png"
            
        document.querySelector(".weather").style.display = "block"
    })
}

checkWeather()

