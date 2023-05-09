const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudInput = document.querySelector(".cloud");
const humidityInput = document.querySelector(".humidity");
const windInput = document.querySelector(".wind");
const form = document.querySelector("#locationInput");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");
const search = document.querySelector(".search");

//default city when the page loads
let cityInput = "Germany";

//add click event to each city in the panel
cities.forEach((city) => {
  city.addEventListener("click", (e) => {
    //changes from default to the clicked city
    cityInput = e.target.innerHTML;

    /* function that fetches and displays all  the data 
    from the weather API */
    fetchWeatherData();
    app.style.opacity = "0";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (search.value.length == 0) {
    alert("Please type in a city name");
  } else {
    cityInput = search.value;
    fetchWeatherData();
    search.value = "";
    app.style.opacity = "0";
  }
  e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[new Date(`${day}/${month}/${year}`).getDay()];
}

async function fetchWeatherData() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=57f312090c6e4d2db0d143206232403&q=${cityInput}"
  );
  const data = await response.json();
  console.log(data);

  nameOutput.innerHTML = data.location.country;
  temp.innerHTML = Math.round(data.current.temp_c) + "°C";
  conditionOutput.innerHTML = data.current.condition.text;

  /* Get the date and time from the city and extract 
the day, month, year & time into individual variables */
  const date = data.location.localtime;

  const y = parseInt(date.substr(0, 4));
  const m = parseInt(date.substr(5, 2));
  const d = parseInt(date.substr(8, 2));
  const time = date.substr(11);

  dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`;
  timeOutput.innerHTML = time;

  const iconId = data.current.condition.icon.substr(
    "//cdn.weatherapi.com/weather/64x64/".length
  );
  icon.src = "img/weather icons/64x64/" + iconId;

  cloudInput.innerHTML = data.current.cloud + "%";
  humidityInput.innerHTML = data.current.humidity + "%";
  windInput.innerHTML = data.current.wind_kph + " km/h";

  let timeOfDay = "day";
  const code = data.current.condition.code;

  //Change to night if its night time in the city
  if (!data.current.is_day) {
    timeOfDay = "night";
  }
  if (code == 1000) {
    /* Set the background to clear if the weather is clear */
    app.style.backgroundImage = `url(./img/${timeOfDay}/n3.avif)`;

    // change the btn bg depending on if its day or night
    btn.style.background = "#e5ba92";

    if (timeOfDay == "night") {
      btn.style.background = "#181e27";
    }
    
    //same thing for cloudy weather
  } else if (
    code == 1003 ||
    code == 1006 ||
    code == 1009 ||
    code == 1030 ||
    code == 1069 ||
    code == 1087 ||
    code == 1135 ||
    code == 1273 ||
    code == 1276 ||
    code == 1279 ||
    code == 1282
  ) {
    app.style.backgroundImage = `url(./img/${timeOfDay}/cloudy.avif)`;
    btn.style.background = "#fa6d1b";

    if (timeOfDay == "night") {
      btn.style.background = "#181e27";
    }
    // for rainy weather
  } else if (
    code == 1063 ||
    code == 1069 ||
    code == 1072 ||
    code == 1150 ||
    code == 1153 ||
    code == 1180 ||
    code == 1183 ||
    code == 1186 ||
    code == 1189 ||
    code == 1192 ||
    code == 1195 ||
    code == 1204 ||
    code == 1207 ||
    code == 1240 ||
    code == 1243 ||
    code == 1246 ||
    code == 1249 ||
    code == 1252
  ) {
    app.style.backgroundImage = `url(./img/${timeOfDay}/d3.avif)`;
    btn.style.background = "#647d75";
    if ((timeOfDay = "night")) {
      btn.style.background = "#325c80";
    }

    // And finally... for Snow weather
  } else {
    app.style.backgroundImage = `url(./img/${timeOfDay}/d4.avif)`;
    btn.style.background = "#4d72aa";
    if(timeOfDay == 'night'){
        btn.style.background = "#1b1b1b";
    }
  }
  //fade in the page once all is done
  app.style.opacity = '1'
}
fetchWeatherData();
