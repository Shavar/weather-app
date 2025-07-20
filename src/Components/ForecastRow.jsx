import React from "react";
import SingleForecast from "./SingleForecast";
import { useWeatherContext } from "../context/WeatherContext";

const Forecast = () => {
  const { forecast } = useWeatherContext();

  return (
    <div className="forecasts">
      {forecast.map((day, index) => (
        <SingleForecast key={index} id={index} forecast={day} />
      ))}
    </div>
  );
};

export default Forecast;
