import React from "react";
import "./WeatherDesc.css";
export default function WeatherDesc() {
  return (
    <div>
      <div className="icon-desc mb-3 ms-5">Moderate Rain</div>
      <div>
        <ul className="weather-description ms-3">
          <li>
            Wind:
            <span id="wind"> 7 </span>
            km/h
          </li>
          <li>
            Humidity:
            <span id="humidity"> 76</span>%
          </li>
        </ul>
      </div>
      <div className="temp-today m-3 ms-5">
        <span id="current-temp"> 17 </span>
        <span id="celsius">°C</span>
      </div>
    </div>
  );
}
