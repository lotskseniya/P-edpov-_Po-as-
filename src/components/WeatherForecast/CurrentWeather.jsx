import React from "react";
import "./Weather.css";

export default function CurrentWeather({ info }) {
  return (
    <div className="today-weather-forecast">
      <div className="current-weather-data">
        <div key={info.location.lat}>
          <h1 className="forecast-name-header"> {info.location.name} </h1>
          <h6 className="rain-forecast-text">
            {" "}
            Chance of rain: {info.current.humidity} %{" "}
          </h6>
          <p className="temperature-forecast-text">
            {" "}
            {info.current.temp_c}&deg;{" "}
          </p>
        </div>
        <div>
          <img
            src={info.current.condition.icon}
            alt="weather-icon"
            className="weather-icon"
          />
        </div>
      </div>
    </div>
  );
}
