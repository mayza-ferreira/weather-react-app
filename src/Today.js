import React from "react";
import FormattedDate from "./FormattedDate";
import "./Today.css";
import WeatherIcon from "./WeatherIcon";
import Geolocation from "./Geolocation";
import UnitConversion from "./UnitConversion";
export default function Today(props) {
  return (
    <div className="today">
      <div className="row">
        <div className="data current-day ms-4" id="date-today">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="city ms-5  mt-3 mb-3" id="city">
        {props.data.city}
      </div>
      <div className="ms-5 mb-3 float-left">
        <WeatherIcon icon={props.data.icon} />
      </div>

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

      <UnitConversion celsius={props.data.temperature} />

      <div className="geolocation">
        <Geolocation />
      </div>
    </div>
  );
}
