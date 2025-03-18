function getweather() {
  let apikey = "30927dtfa44b4770359oe8258a9c5b2c";
  let city = document.getElementById("city").value;
  if (!city) {
    alert("please enter a city name");
    return;
  }
}
let currentweatherurl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}";
let forecasturl =
  "https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}";
function getweather() {
  fetch(currentweatherurl)
    .then((Response) => Response.json())
    .then((data) => {
      displayweather(data);
    })
    .catch((error) => {
      console.error("error fetching current weather data ", error);
    });
}
function getForecast() {
  fetch(forecasturl)
    .then((Response) => Response.json())
    .then((data) => {
      displayforecast(data.list);
    })
    .catch((error) => {
      console.error("error fetching forecast data ", error);
    });
}
function displayweather(data) {
  let tempdivinfo = document.getElementById("temp-div");
  let weatherinfodiv = document.getElementById("weather-info");
  let weathericon = document.getElementById("weather-icon");
  let hourlyforecastdiv = document.getElementById("hourly-forecast");

  weatherinfodiv.innerHTML = "";
  hourlyforecastdiv.innerHTML = "";
  tempdivinfo.innerHTML = "";

  if (data.cod === "404") {
    weatherinfodiv.innerHTML = "<p>${data.message}</p>";
  } else {
    let cityname = data.name;
    let temperature = Math.round(data.main.temp - 273.15);
    let description = data.weather[0].description;
    let iconcode = data.weather[0].icon;
    let iconurl = "";
  }
}

let temperaturehtml = "<p>${temperature}°C</p>";
let weatherhtml = "<p>${cityname}</p><p>${description}</p>";

tempdivinfo.innerHTML = temperaturehtml;
weatherinfodiv.innerHTML = weatherhtml;
weathericon.src = iconurl;
weathericon.alt = description;

showimage();

function displayhourlyforecast(hourlydata) {
  let hourlyforecastdiv = document.getElementById("hourly-forecast");
  let next24hours = hourlydata.slice(0, 8);

  next24hours.forEach((item) => {
    let datetime = new Date(item.dt * 1000);
    let hour = datetime.getHours();
    let temperature = Math.round(item.main.temp - 273.15);
    let iconcode = item.weather[0].icon;
    let iconurl = `http://openweathermap.org/img/wn/${iconcode}.png`;

    let hourlyitemhtml = `<div class='hourly-item'> 
    <span>${hour}:00</span>
    <img src='${iconurl}' alt='hourly weather icon'>
    <span>${temperature}°C</span>
    </div>`;
    hourlyforecastdiv.innerHTML += hourlyitemhtml;
  });
}

function showimage() {
  let weathericon = document.getElementById("weather-icon");
  weathericon.style.display = "block";
}
