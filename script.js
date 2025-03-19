function searchCity(city) {
  let apiKey = "30927dtfa44b4770359oe8258a9c5b2c";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric";
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
