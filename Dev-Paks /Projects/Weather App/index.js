const apiKey = "90ab014cfc3695ba58f5845351c2a0c5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  
const containerImg = document.querySelector(".container-img");
const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search-box");
const searchContainer = document.querySelector(".search-container");
const weatherIcon = document.querySelector(".weather-icon");
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
      weatherIcon.src = "img/clouds.png";
      containerImg.src = "img/clouds-img.jpg"

    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rain.png";
      containerImg.src = "img/rain-img.jpeg"

    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear.png";
      containerImg.src = "img/clear-img.jpg"

    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/mist.png";
      containerImg.src = "img/mist-img.jpg"

    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/drizzle.png";
      containerImg.src = "img/drizzle-img.jpeg"

    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "img/snow.png";
      containerImg.src = "img/snow-img.jpeg"
    }

    weather.style.display = 'block'
    error.style.display = 'none'
  }

}

searchContainer.addEventListener("submit", (e) => {

  e.preventDefault()
  checkWeather(searchBox.value);
  searchBox.value = "";
});
