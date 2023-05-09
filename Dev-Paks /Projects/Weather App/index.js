const apiKey = "90ab014cfc3695ba58f5845351c2a0c5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  
const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");
const weathericon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status == 404){
    error.style.display = 'block'
    weather.style.display = 'none'
  }
  else {
    let data = await response.json();
    cityName.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C ";
    humidity.innerHTML = Math.round(data.main.humidity) + "%";
    wind.innerHTML = Math.round(data.wind.speed) + " km/h";
  
  
    if (data.weather[0].main == "Clouds") {
      weathericon.src = "img/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "img/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "img/clear.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "img/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weathericon.src = "img/snow.png";
    }
    weather.style.display = 'block'
    error.style.display = 'none'
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  searchBox.value = "";
});
