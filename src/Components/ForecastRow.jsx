import React from "react";
import SingleForecast from "./SingleForecast";
import { useWeatherContext } from "../context/WeatherContext";

const ForecastRow = () => {
  const { weather } = useWeatherContext();
  const { daily } = weather;

  return (
    <div className="forecasts">
      {daily.map((day, index) => (
        <SingleForecast key={index} id={index} forecast={day} />
      ))}
    </div>
  );
};

export default ForecastRow;
