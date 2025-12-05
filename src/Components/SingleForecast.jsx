import React from "react";
import { formatDates } from "../utils/formatDates";
import { daysOfWeek } from "../config/dates";
import { useWeatherContext } from "../context/WeatherContext";
import ForecastTemperature from "./ForecastTemperature";
import ForecastIcon from "./ForecastIcon";

const SingleForecast = ({ id, forecast }) => {
  const { activeIndex, setActiveIndex } = useWeatherContext();

  const { weather, dt, temp } = forecast;
  const theDate = new Date(dt * 1000); // Create Current Date Variable

  const code = weather[0]?.id;
  const type = weather[0]?.main;
  const fommatedDate = formatDates(theDate);

  return (
    <div className={`forecast ${id === activeIndex && "forecast--active"}`} onClick={() => setActiveIndex(id)}>
      <div className="forecast__day">{id === 0 ? "Today" : fommatedDate.dayOfWeek.slice(0, 3)}</div>
      <ForecastTemperature max={temp.max} min={temp.min} />
      <ForecastIcon code={code} />
      <div className="forecast__type">{type}</div>
    </div>
  );
};

export default SingleForecast;
