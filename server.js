const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const port = 3000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  //convert time and date
    document.querySelector(".weather__search").addEventListener('submit', e => {
      let search = document.querySelector(".weather__searchform");
      // prevent default action
      e.preventDefault();
      
      currCity = search.value;
      // get weather forecast 
      getWeather();
      // clear form
      search.value = ""
  })

  
  document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
      if(units !== "metric"){
          // change to metric
          units = "metric"
          // get weather forecast 
          getWeather()
      }
  })

  document.querySelector(".weather_unit_farenheit").addEventListener('click', () => {
      if(units !== "imperial"){
          // change to imperial
          units = "imperial"
          // get weather forecast 
          getWeather()
      }
  })

  function convertTimeStamp(timestamp, timezone){
      const convertTimezone = timezone / 3600; // convert seconds to hours 

      const date = new Date(timestamp * 1000);
      
      const options = {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
          hour12: true,
      }
      return date.toLocaleString("en-US", options)
    
  }

  

  // convert country code to name
  function convertCountryCode(country){
      let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
      return regionNames.of(country)
  }

  try {
    const city = req.query.city;
    const units = req.query.units;
    const fetchWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=${units}`;

    const weatherData = await fetch(fetchWeather);
    const jsonData = await weatherData.json();
    if (weatherData !== 0) {
      return res.status(200).send({ Message: `Here is what the weather is in ${city}`, Weather: jsonData });
    }

    return res.send({ Message: `Something went wrong!` });
  } catch (err) {
    return res.status(500).send({ Message: `Unable to fetch data for ${city}, an error occurred`, Error: err });
  }
});

app.listen(port, async() => {
  console.log(`App running on port ${port}`)
});
