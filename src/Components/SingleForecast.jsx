import React from "react";
import weatherIcons from "../config/icons.json";
import { daysOfWeek } from "../config/dates";
import { useWeatherContext } from "../context/WeatherContext";
import ForecastTemperature from "./ForecastTemperature";
import ForecastIcon from "./ForecastIcon";

const SingleForecast = ({ id, forecast }) => {
  const { index, setIndex } = useWeatherContext();
  const theDate = new Date(forecast.dt * 1000); // Create Current Date Variable

  const code = forecast?.weather[0]?.id;
  const weather = forecast?.weather[0]?.main;
  const dayOfWeek = id === 0 ? "Today" : daysOfWeek[theDate.getDay()].slice(0, 3);

  return (
    <div className={`forecast ${id === index && "forecast--active"}`} onClick={() => setIndex(id)}>
      <div className="forecast__day">{dayOfWeek}</div>
      <ForecastTemperature temperature={forecast.temp} />
      <ForecastIcon code={code} />
      <div className="forecast__type">{weather}</div>
    </div>
  );
};

export default SingleForecast;
