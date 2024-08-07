import React from "react";
import "../src/App.css";
import { Pages } from "./components/Pages/Pages";
import { Weather } from "./components/WeatherForecast/Weather";

export const App = (item) => {
  return (
    <div className="main-container">     
       <Pages/>
       <Weather/> 
    </div>
  )
}


