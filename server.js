const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const port = 3000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  try {
    const city = req.query.city;
    const units = req.query.units;
    const API_KEY = '40a8904c86de719133c8841b56287066';
    const fetchWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

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
