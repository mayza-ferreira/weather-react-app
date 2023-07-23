import React from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="row forecast m-5">
      <ForecastDay
        icon="fa-solid fa-cloud"
        day="Monday"
        minTemp={15}
        maxTemp={25}
      />
      <ForecastDay
        icon="fa-solid fa-sun"
        day="Tuesday"
        minTemp={7}
        maxTemp={18}
      />
      <ForecastDay
        icon="fa-solid fa-sun"
        day="Wednesday"
        minTemp={10}
        maxTemp={12}
      />
      <ForecastDay
        icon="fa-solid fa-cloud-showers-heavy"
        day="Thursday"
        minTemp={14}
        maxTemp={20}
      />
      <ForecastDay
        icon="fa-solid fa-bolt"
        day="Friday"
        minTemp={15}
        maxTemp={20}
      />
    </div>
  );
}
