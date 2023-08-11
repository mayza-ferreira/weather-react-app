import React from "react";
import "./CurrentTemp.css";
export default function CurrentTemp(props) {
  return (
    <div className="temp-today m-3 ms-5">
      <span className="current-temp"> {props.celsius} </span>
      <span>°C</span>
    </div>
  );
}
