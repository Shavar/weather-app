import React from "react";
import Forecast from "./ForecastRow";
import Selected from "./SelectedForecast";
import { useWeatherContext } from "../context/WeatherContext";
const Weather = () => {
  const { index, location, loading } = useWeatherContext();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="weather">
      {index !== undefined && <Selected />}
      <Forecast />
      {location && (
        <a href={"https://openweathermap.org/city/" + location?.id} target="_blank">
          // Data Obtained from OpenWeaterMap //{" "}
        </a>
      )}
    </div>
  );
};

export default Weather;
