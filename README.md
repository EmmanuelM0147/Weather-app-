# Weather App

This is a scalable weather application that allows users to search for weather conditions in any city worldwide. The app provides current temperature, weather conditions, real feel, humidity, wind speed, and atmospheric pressure. Users can view the temperature in Celsius or Fahrenheit, depending on their preference.

## Features
- Search weather by city name
- Toggle between Celsius and Fahrenheit units
- Displays key weather information such as temperature, humidity, wind speed, and pressure
- Displays weather icons for better visual experience
- Responsive design for various screen sizes

## Technologies Used
- HTML, CSS, and JavaScript
- [OpenWeather API](https://openweathermap.org/api) for weather data
- [Font Awesome](https://fontawesome.com/) for icons

## Getting Started

### Prerequisites
To run this application locally, you need a modern web browser and an internet connection. Make sure you have a text editor (such as VS Code) and Node.js installed if you plan to modify the source code.

### Installation
1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-app
   ```
3. Open `index.html` in your web browser to run the application.

### Configuration
To access weather data, you need an API key from [OpenWeather](https://openweathermap.org/api). Replace the `API_KEY` variable in `app.js` with your own API key:
```javascript
const API_KEY = 'YOUR_API_KEY';
```

## Usage
- Type the name of the city you want to know the weather for in the search bar and click the search button or press Enter.
- Toggle between Celsius (°C) and Fahrenheit (°F) by clicking on the respective unit.

## Folder Structure
```
weather-app/
│
├── index.html          # Main HTML file
├── style.css           # CSS styles for the app
├── app.js              # JavaScript code to handle logic and API calls
└── README.md           # This README file
```

## API Integration
This project uses the OpenWeather API to fetch current weather data for cities around the globe. The data returned includes temperature, humidity, wind speed, and more.

## Improvements
- Add hourly and weekly weather forecasts.
- Add user location detection for quick weather data.
- Provide more detailed weather parameters like UV index, visibility, etc.
- Implement caching for improved performance.

## Contributing
Contributions are welcome! If you would like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements
- [OpenWeather](https://openweathermap.org/api) for providing weather data.
- [Font Awesome](https://fontawesome.com/) for the icons.

## Contact
For any questions or suggestions, please reach out to me at okeowoemmanuelm@gmail.com.

