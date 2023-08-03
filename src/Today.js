import React from "react";

import "./Today.css";
export default function Today(props) {
  return (
    <div className="today">
      <div className="row">
        <div className="data current-day ms-4" id="date-today">
          Monday / 10:17
        </div>
      </div>
      <div className="city ms-5  mt-3 mb-3" id="city">
        {props.data.city}
      </div>
      <div className="ms-5 mb-3 ">{props.data.icon}</div>
      <div className="description" id="description"></div>
      <div className="icon-desc text-capitalize mb-3 ms-5">
        {props.data.description}
      </div>
      <div>
        <ul className="weather-description ms-3">
          <li>
            Wind: <span id="wind">{props.data.wind}</span>
            km/h
          </li>
          <li>
            Humidity:
            <span id="humidity"> {props.data.humidity}</span>%
          </li>
        </ul>
      </div>
      <div className="temp-today m-3 ms-5">
        <span id="current-temp"> {props.data.temperature}</span>
        <span id="celsius">°C</span>
      </div>
    </div>
  );
}
