import React from "react";
import DateToday from "./DateToday";
import City from "./City.js";

import CurrentIcon from "./CurrentIcon";
import WeatherDesc from "./WeatherDesc";
import "./Today.css";
export default function Today() {
  return (
    <div className="today">
      <div className="row">
        <div className="data " id="date-today">
          <DateToday day="Sunday" hour={10} minute={17} />
        </div>
      </div>
      <div className="city ms-5" id="city">
        {" "}
        <City />
      </div>
      <CurrentIcon />
      <div className="description" id="description">
        <WeatherDesc />
      </div>
    </div>
  );
}
