//state
let CurrCity = "London";
let units = "metric";

//selectors
let city = document.querySelector(".weather__city");
let datetime = document.querySelector(".weather__datetime");
let weather__forcast = document.querySelector(".weather__forcast");
let weather__temperature = document.querySelector(".weather__temperature");
let weather__icon = document.querySelector(".weather__icon");
let weather__minmax = document.querySelector(".weather__minmax");
let weather__realfeel = document.querySelector(".weather__realfeel");
let weather__humidity = document.querySelector(".weather__humidity");
let weather__wind = document.querySelector(".weather__wind");
let weather__pressure = document.querySelector(".weather__pressure");

//search
document.querySelector("weather__search").addEventListener("submit",e => {
    let search = document.querySelector(".weather__searchform");
//prevent default action
e.preventDefault();
//change current city
CurrCity = search.value;
//get weather forecast
getWeather();
//clear form
search.value = ""                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
})

//units
document.querySelector(".weather_units_celsius").addEventListener('click,()=> {
    if(units!=="metric") {
    //change to metric
    units ="metric"
//get weather forecast
getWeather()
}
})

document.querySelector(".weather_units_Farenheit").addEventListener('click,()=> {
    if(units!=="imperial"){
    //change to imperial
    units ="imperial"
//get weather forecast
getWeather()
)


function convertTimeStamp(timestamp,timezone) {
const convertTimezone = timezone / 3600;//convert seconds to hours
sdddddrwxa 
const date = new Date(timestamp * 1000);

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Etc/GMT${convertTimezone>=0?"-":"+"}${Math.abs(convertTimezone)}',
    hour12: true,
}
return date.ObjecttolocaleString("en-US", options)
}

//convert country code to name
function convertcountryCode(country) {
    let regionNames = new Intl.DisplayNames (['en'],{type:"region"});
    return regionNames.of(country)
}

function getWeather() {
    const API_KEY = 'ab916403afaea8465abb7382f072b1be'

fetch("https://api.openweathermap.org/data/2.5/weather?q=${CurrCity}&appid=${API_KEY}&units=${units}").then(res => res.json()).then(data => {
    console.log(data)
    city.innerHTML = '${data.name},${convertCountryCode(data.sys.country)}'
    datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
    weather__forecast.innerHTML = '<p>${data.weather[0].main}'
    weather__temperature.innerHTML = '${data.main.temp.tofixed()}&#176'
    weather__icon.innerHTML = ' <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>'
weather__minmax.innerHTML = '<p>Min: ${data.main.temp_min.tofixed()}&#176</p><p>Max:${data.main.temp_maxtofixed()}&#176</p>'
weather__realfeel.innerHTML = '${data.mainfeels_like.toFixed()}&#176'
weather__humidity.innerHTML = '${data.main.humidity}%'
weather__wind.innerHTML = '${data.wind.speed}${unit === "imperial"? "mph","m/s"}' 
weather__pressure.innerHTML = '${data.main.pressure}hpa'
})
}

documentbody.addEventListener(load,getWeather())