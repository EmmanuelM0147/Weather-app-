const express = require('express');
const env = require('dotenv');
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/weather', (req, res) => {
  try{
    const city =  req.query.city;
    const units  = req.query.units;
    const fetchWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${preocess.env.WEATHER_API_KEY}&units${units}`;
    if(fetchWeather !== 0){
      return res.status(200).send({Message: `Here is what the weather is in ${city}`, Weather: fetchWeather})
    }
    
  }
  catch(err){
    return res.status(500).send({Message: `Unable to fetch data for ${city}, an error occoured`, Error: err});
  }
});

app.listen(port, (req, res) => {
  
})
