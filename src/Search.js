import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Today from "./Today";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "842b36d55cb28eba74a018029d56b04c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group search w-50 mx-auto">
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                placeholder="Enter a city"
                className="form-control rounded-end-0 rounded-start-5"
                onChange={handleCityChange}
              />
            </div>
            <button type="submit" className="btn" id="btn-search">
              <i className="fa-solid fa-magnifying-glass-location location-icon"></i>
            </button>
          </div>
        </form>
        <Today data={weatherData} />
      </div>
    );
  } else {
    search();
    return <div className="m-4"> Loading...</div>;
  }
}
