import React from "react";
import { daysOfWeek, monthsOfYear } from "../config/dates";
import { useWeatherContext } from "../context/WeatherContext";
import ForecastTemperature from "./ForecastTemperature";
import ForecastIcon from "./ForecastIcon";

const Selected = () => {
  const { activeIndex, weather } = useWeatherContext();
  const { daily } = weather;
  const selection = daily[activeIndex];

  const { sunsise, sunset, dt, summary } = selection;

  const thisDate = new Date(dt * 1000); // Create Current Date Variable
  const code = selection?.weather[0]?.id;
  const dayOfWeek = daysOfWeek[thisDate.getDay()];
  const monthOfYear = monthsOfYear[thisDate.getMonth()];
  const dateOfMonth = thisDate.getDate();

  return (
    selection && (
      <div className="selection">
        <div className="selection__forecast">
          <ForecastTemperature temperature={selection.temp} />
          <span className="selection__description">{selection.weather[0].description}</span>
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

// {
//     "dt": 1754240400,
//     "sunrise": 1754215675,
//     "sunset": 1754268042,
//     "moonrise": 1754253840,
//     "moonset": 1754195100,
//     "moon_phase": 0.32,
//     "summary": "Expect a day of partly cloudy with clear spells",
//     "temp": {
//         "day": 26.17,
//         "min": 15.71,
//         "max": 26.99,
//         "night": 17.46,
//         "eve": 25.36,
//         "morn": 16.49
//     },
//     "feels_like": {
//         "day": 26.17,
//         "night": 17.17,
//         "eve": 25.05,
//         "morn": 16.23
//     },
//     "pressure": 1021,
//     "humidity": 37,
//     "dew_point": 11.21,
//     "wind_speed": 6.09,
//     "wind_deg": 329,
//     "wind_gust": 7.92,
//     "weather": [
//         {
//             "id": 801,
//             "main": "Clouds",
//             "description": "few clouds",
//             "icon": "02d"
//         }
//     ],
//     "clouds": 13,
//     "pop": 0,
//     "uvi": 5.74
// }'
