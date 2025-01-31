document.addEventListener("DOMContentLoaded", () => {
  let cityInput = document.getElementById("city-input");
  let getWeatherBtn = document.getElementById("get-weather-btn");
  let weatherInfo = document.getElementById("weather-info");
  let cityName = document.getElementById("city-name");
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let errorMessage = document.getElementById("error-message");

  const API_KEY = "a648d0a30127127f12d83aeb5cbcb6d3"; // env variable

  getWeatherBtn.addEventListener("click", async () => {
    let city = cityInput.value.trim();
    if (!city) {
      return;
    }

    try {
      let weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    // console.log(typeof response);
    // console.log("response:", response);

    if (!response.ok) {
      throw new Error("City not found!");
    }

    let data = await response.json();
    return data;
  }

  function displayWeatherData(weatherData) {
    console.log(weatherData);
    const { name, main, weather } = weatherData;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    cityName.textContent = name;
    temperature.innerHTML = `Temperature: ${(main.temp - 273.15).toFixed(
      2
    )} &deg;C`;
    description.textContent = `Description: ${weather[0].description}`;
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
