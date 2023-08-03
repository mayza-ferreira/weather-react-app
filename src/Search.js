import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Today from "./Today";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="input-group search w-50 mx-auto">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              placeholder="Enter a city"
              className="form-control rounded-end-0 rounded-start-5"
            />
          </div>
          <button type="button" className="btn" id="btn-search">
            <i className="fa-solid fa-magnifying-glass-location location-icon"></i>
          </button>
        </div>
        <Today data={weatherData} />
      </div>
    );
  } else {
    let apiKey = "842b36d55cb28eba74a018029d56b04c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <div className="m-4"> Loading...</div>;
  }
}
