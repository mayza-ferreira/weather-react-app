import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}° `;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return ` ${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="row mb-5">
      <div className=" p-0 col-6 d-flex justify-content-end">
        <WeatherIcon
          icon={props.data.weather[0].icon}
          color="#edc6b9"
          size={60}
        />
      </div>
      <div className="col-6 p-0 ">
        <span className="day">{day()}</span>
        <div className="forecastTemp ">
          <span className="maxTemp">{maxTemperature()} </span>/
          <span className="minTemp"> {minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
