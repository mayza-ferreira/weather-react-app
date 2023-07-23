import React from "react";
import "./DateToday.css";
export default function DateToday({ day, hour, minute }) {
  return (
    <div className="current-day ms-5">
      {day}{" "}
      <span className="time">
        {" "}
        {hour}:{minute}
      </span>
    </div>
  );
}
