import React, { useState } from "react";
import "./UnitConversion.css";
export default function UnitConversion(props) {
  const [unit, setUnit] = useState(`celsius`);
  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === `celsius`) {
    return (
      <div className="temp-today m-3 ms-5">
        <span id="current-temp"> {props.celsius} </span>
        <span>
          °C |{" "}
          <a href="/" onClick={toFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temp-today m-3 ms-5">
        <span id="current-temp"> {Math.round(fahrenheit())} </span>
        <span>
          <a href="/" onClick={toCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
