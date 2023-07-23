import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="input-group search w-50 mx-auto">
      <div className="form-outline">
        <input
          type="search"
          id="form1"
          placeholder="Enter a city"
          className="form-control rounded-end-0 rounded-start-5"
        />
      </div>
      <button type="button" className="btn" id="btn-search">
        <i className="fa-solid fa-magnifying-glass-location location-icon"></i>
      </button>
    </div>
  );
}
