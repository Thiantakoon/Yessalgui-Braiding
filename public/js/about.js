"use strict";

    const apiKey = "z2Hpe9VgwAlAeRSTkaeLh1QWkEeS6PmN";
    const userLocation = "Lexington_KY";

    // https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY

    async function getWeather() {
      const apiUrl = "https://www.accuweather.com/data/2.5/weather?q=$Lexington_KY&appid=$z2Hpe9VgwAlAeRSTkaeLh1QWkEeS6PmN&units=metric";

      const response = await fetch(Url);
      const data = await response.json()
      const getWeather = data
    
    getWeather();

    }
