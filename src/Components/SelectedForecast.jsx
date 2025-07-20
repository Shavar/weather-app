import React from "react";
import { daysOfWeek, monthsOfYear } from "../config/dates";
import { useWeatherContext } from "../context/WeatherContext";
import ForecastTemperature from "./ForecastTemperature";
import ForecastIcon from "./ForecastIcon";

const Selected = () => {
  const { index, forecast } = useWeatherContext();
  const selection = forecast[index];

  const thisDate = new Date(selection?.dt * 1000); // Create Current Date Variable
  const code = selection?.weather[0]?.id;
  const dayOfWeek = daysOfWeek[thisDate.getDay()];
  const monthOfYear = monthsOfYear[thisDate.getMonth()];
  const dateOfMonth = thisDate.getDate();

  return (
    selection && (
      <div className="selection">
        <div className="selection__forecast">
          <ForecastTemperature temperature={selection.temp} />

          <span className="overview">{selection.weather[0].description}</span>
        </div>

        <div className="selection__details">
          <div className="single-dates">
            <span className="weekday">{dayOfWeek}</span>
            <span className="thedate">
              {monthOfYear} {dateOfMonth}
            </span>
          </div>
          <ForecastIcon code={code} />
          <span className="cloud">Cloud: {selection.clouds.toFixed()} %</span>
          <span className="pressure">Pressure: {selection.pressure.toFixed()} hpa</span>
        </div>
      </div>
    )
  );
};

export default Selected;
