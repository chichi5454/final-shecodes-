/** @format */

import "./weather.css";
import axios from "axios";

import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("null");

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.main.wind,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "335111aa41f73907647bc88e111fc1ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  return (
    <div className="weatherWrapper">
      <div className="weatherForm">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter City"
            onChange={updateCity}
            className="search"
          />
          <button>Search</button>
        </form>
      </div>
      <div className="weatherDescription">
        <div className="firstTier">
          <h1>{city}</h1>
          <ul>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
          </ul>
        </div>
        <div className="secondTier">
          <ul>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
