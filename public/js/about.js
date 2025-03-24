"use strict";

    const apiKey = "77e03a535c4d1e6016426e2f94009848";
    const location = "Lexington,KY";

    // https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY

    async function getWeather() {
      const apiUrl = "https://api.www.accuweather.com/data/2.5/weather?q=${lexington,KY}&appid=${77e03a535c4d1e6016426e2f94009848}&units=metrics";

      const response = await fetch(Url);
      const data = await response.json()
      const getWeather = data
    
    getWeather();

    }
