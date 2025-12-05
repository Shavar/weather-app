import React, { useEffect, useState } from "react";
import ForecastRow from "./ForecastRow";
import Current from "./Current";
import { useWeatherContext } from "../context/WeatherContext";
const Main = () => {
  const { activeIndex, error, loading, fetchWeatherByLocation } = useWeatherContext();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="weather">
      {error && <h1 className="error">{error}</h1>}
      {activeIndex !== undefined && (
        <>
          <Current />
          <ForecastRow />
        </>
      )}

      {location && (
        <a className="copyright" href={"https://openweathermap.org/city/" + location?.id} target="_blank">
          Data Obtained from OpenWeaterMap
        </a>
      )}
    </div>
  );
};

export default Main;
