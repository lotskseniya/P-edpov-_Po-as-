import React, { useEffect, useState } from "react";
import "./Weather.css";
import { Input } from "../Input/Input";
import CurrentWeather from "./CurrentWeather";
import { ForecastFortheDay } from "./ForecastFortheDay";
import { CurrentWeatherDetails } from "./CurrentWeatherDetails";
import { WeeklyForecast } from "./WeeklyForecast";

export const Weather = (props) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  function searchInput(event) {
    event.preventDefault();
    if (event.target.value === 'Kyiv') {
      setInputValue('Kiev')
    }
    else {
      setInputValue(event.target.value.toLowerCase());
    }  
  }

  function GetWeatherForecast(inputValue) {
    const ApiKEY = `acdc8879e8msh60a6825abc74ff9p189ecajsn83ebfa7e841e`;
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${inputValue}&days=3`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": ApiKEY,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error, "Something went wrong"));
  }

  useEffect(() => {
    GetWeatherForecast(inputValue);
    setWeatherData(data);
    setForecastData(data.forecast);
  }, [inputValue]);

  return (
    <div>
      <div className="weather-container">
        <Input value={inputValue} onChange={searchInput} />
        {weatherData.location && weatherData.current ? (
          <div className="main-weather-container">
            <div className="daily-weather-container">
              <CurrentWeather info={weatherData} />
              <ForecastFortheDay forecast={forecastData} />
              <CurrentWeatherDetails details={weatherData} />
            </div>
            <div className="weekly-weather-container">
              <WeeklyForecast forecast={forecastData} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
