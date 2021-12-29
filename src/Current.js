import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="d-flex bd-highlight mt-3">
      <div className="col-3">
        <span>
          <h1 id="currentCity">
            <cityElement>Berlin</cityElement>
          </h1>
        </span>
      </div>

      <div className="col-3">
        <h2 className="timeNow">11:00</h2>
      </div>

      <div className="col-3">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/sun-with-face_1f31e.png"
          alt="Clear"
          id="icon"
          width="50"
          height="50"
        ></img>
        <span className="temperatureElement">
          <temperatureElement></temperatureElement>
        </span>
        <span className="units">
          <a href="#" className="link">
            °C
          </a>{" "}
          |
          <a href="#" className="link">
            °F
          </a>
        </span>
      </div>

      <div className="col-3">
        <ul>
          <li>
            <strong>
              <descriptionElement>Clear</descriptionElement>
            </strong>
          </li>
          <li>
            <strong>Humidity:</strong>
            <humidityElement>81</humidityElement>
            <strong>%</strong>
          </li>
          <li>
            <strong>Wind:</strong>
            <windElement>3.58</windElement>
            <strong>
              {" "}
              <lowercase>km/h</lowercase>
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
