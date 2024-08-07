import "./Weather.css";
import { useContext } from "react";
import { IconContext } from "../IconContext";

export const CurrentWeatherDetails = ({ details }) => {
  const iconsVariantions = useContext(IconContext);

  return (
    <div className="today-weather-details">
      <p className="today-weather-airdetails-header">AIR CONDITIONS</p>
      {details.current && (
        <div className="details-temp">
          <div
            className="weather-details-container weather-details-feels-like"
          >
            <div className="weather-details-icons">
              {iconsVariantions["temperature"]}
              </div>
            <div>
              <p className="today-weather-details-headers"> Real Feel </p>
              <p className="today-weather-details-data"> {details.current.feelslike_c} &deg; </p>
            </div>
          </div>

          <div
            className="weather-details-container weather-details-wind"
          >
            <div className="weather-details-icons">
              {iconsVariantions["wind"]}
              </div>
            <div>
              <p className="today-weather-details-headers"> Wind </p>
              <p className="today-weather-details-data"> {details.current.wind_kph} km/h </p>
            </div>
          </div>

          <div
            className="weather-details-container weather-details-chance-of-rain"
          >
            <div className="weather-details-icons">
              {iconsVariantions["temperature"]}
              </div>
            <div>
              <p className="today-weather-details-headers"> Chance of rain </p>
              <p className="today-weather-details-data"> {details.current.humidity} % </p>
            </div>
          </div>

          <div
            className="weather-details-container weather-details-uv-index"
          >
            <div className="weather-details-icons">
              {iconsVariantions["sunny"]}
              </div>
            <div>
              <p className="today-weather-details-headers"> UV Index </p>
              <p className="today-weather-details-data"> {details.current.uv} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
