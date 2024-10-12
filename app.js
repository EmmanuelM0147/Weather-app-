// State
let currCity = "Lagos"; // Default city
let units = "metric";

// Selectors
const city = document.querySelector(".weather__city");
const datetime = document.querySelector(".weather__datetime");
const weather__forecast = document.querySelector(".weather__forecast");
const weather__temperature = document.querySelector(".weather__temperature");
const weather__icon = document.querySelector(".weather__icon");
const weather__minmax = document.querySelector(".weather__minmax");
const weather__realfeel = document.querySelector(".weather__realfeel");
const weather__humidity = document.querySelector(".weather__humidity");
const weather__wind = document.querySelector(".weather__wind");
const weather__pressure = document.querySelector(".weather__pressure");
const searchForm = document.querySelector(".weather__search");
const searchInput = document.querySelector(".weather__searchform");
const unitCelsius = document.querySelector(".weather_unit_celsius");
const unitFahrenheit = document.querySelector(".weather_unit_fahrenheit");

// Search
searchForm.addEventListener("submit", (e) => {
  // Prevent default action
  e.preventDefault();
  // Change current city
  currCity = searchInput.value.trim();
  if (currCity) {
    // Get weather forecast
    getWeather();
    // Clear form
    searchInput.value = "";
  }
});

// Units - Celsius
unitCelsius.addEventListener("click", () => {
  if (units !== "metric") {
    // Change to metric
    units = "metric";
    // Get weather forecast
    getWeather();
    unitCelsius.classList.add("active");
    unitFahrenheit.classList.remove("active");
  }
});

// Units - Fahrenheit
unitFahrenheit.addEventListener("click", () => {
  if (units !== "imperial") {
    // Change to imperial
    units = "imperial";
    // Get weather forecast
    getWeather();
    unitFahrenheit.classList.add("active");
    unitCelsius.classList.remove("active");
  }
});

// Convert timestamp to readable date function
function convertTimeStamp(timestamp, timezone) {
  const convertTimezone = timezone / 3600; // Convert seconds to hours
  const date = new Date(timestamp * 1000);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`,
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

// Convert country code to name function
function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNames.of(country);
}

// Fetch weather data function
function getWeather() {
  const API_KEY = "64f60853740a1ee3ba20d0fb595c97d5";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        // Check if the response is successful
        city.innerHTML = `${data.name}, ${convertCountryCode(
          data.sys.country
        )}`;
        datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
        weather__forecast.innerHTML = `<p>${data.weather[0].main}</p>`;
        weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
        weather__icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="${data.weather[0].description}" />`;
        weather__minmax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`;
        weather__realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
        weather__humidity.innerHTML = `${data.main.humidity}%`;
        weather__wind.innerHTML = `${data.wind.speed} ${
          units === "imperial" ? "mph" : "m/s"
        }`;
        weather__pressure.innerHTML = `${data.main.pressure} hPa`;
      } else {
        alert("City not found. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
      alert(
        "Unable to retrieve weather data at the moment. Please try again later."
      );
    });
}

// Initial load
window.addEventListener("DOMContentLoaded", getWeather);

// Add search icon and styling
searchInput.style.paddingLeft = "2.5rem";
const searchIcon = document.createElement("i");
searchIcon.className = "fa fa-search";
searchIcon.style.position = "absolute";
searchIcon.style.left = "10px";
searchIcon.style.top = "50%";
searchIcon.style.transform = "translateY(-50%)";
searchIcon.style.color = "#fff";
searchForm.appendChild(searchIcon);

// Add active class styling for unit buttons
unitCelsius.classList.add("active");
