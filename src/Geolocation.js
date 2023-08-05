import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Geolocation(props) {
  return (
    <button type="button " className="btn-geo ms-4">
      <FontAwesomeIcon icon={faLocationDot} />
    </button>
  );
}
