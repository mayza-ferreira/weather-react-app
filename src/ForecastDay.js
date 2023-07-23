import "./ForecastDay.css";
import React from "react";

export default function ForecastDay({ day, maxTemp, minTemp, icon }) {
  return (
    <div className="forecastDay mb-5">
      <i className={icon} id="icon-forecast"></i>
      <span className="day">{day}</span>
      <div className="forecastTemp ms-5">
        {maxTemp}° / {minTemp}°
      </div>
    </div>
  );
}
