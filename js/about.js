

    // Replace with your API key and location
    const apiKey = "z2Hpe9VgwAlAeRSTkaeLh1QWkEeS6PmN";
    const location = "Lexington,KY";

    // Function to fetch weather data
    async function getWeather() {
      const apiUrl = "https://api.www.accuweather.com/data/2.5/weather?q=${lexington,KY}&appid=${z2Hpe9VgwAlAeRSTkaeLh1QWkEeS6PmN}&units=metric";
      const response = await fetch(apiUrl);
      const data = await response.json();
    

      // Update the HTML elements
      document.getElementById("location").textContent = data.name;
      document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById("conditions").textContent = `Conditions: ${data.weather[0].description}`;
    

    // Call the function to fetch and display weather data
    getWeather();

    }
