import React from "react";
import { formatDates } from "../utils/formatDates";
import { useWeatherContext } from "../context/WeatherContext";
import ForecastTemperature from "./ForecastTemperature";
import ForecastIcon from "./ForecastIcon";

const Current = () => {
  const { weather } = useWeatherContext();
  const { current } = weather;

  const { dt, weather: currentWeather, clouds, pressure, temp, humidity, feels_like: feels } = current;

  const thisDate = new Date(dt * 1000);
  const code = currentWeather[0].id;
  const formmatedDates = formatDates(thisDate);

  return (
    <div className="selection">
      <div className="selection__forecast">
        <ForecastTemperature max={temp} />
        <span className="selection__description">{currentWeather[0].description}</span>
      </div>

      <div className="selection__details">
        <div>Feels Like: {feels}</div>
        <div className="single-dates">
          <span className="weekday">{formmatedDates.dayOfWeek}</span>
          <span className="thedate">
            {formmatedDates.monthOfYear} {formmatedDates.dateOfMonth}
          </span>
        </div>
        <ForecastIcon code={code} />
        <span className="cloud">Cloud: {clouds.toFixed()} %</span>
        <span className="pressure">Pressure: {pressure.toFixed()} hpa</span>
      </div>
    </div>
  );
};

export default Current;

//  "current":{
//     "dt":1684929490,
//     "sunrise":1684926645,
//     "sunset":1684977332,
//     "temp":292.55,
//     "feels_like":292.87,
//     "pressure":1014,
//     "humidity":89,
//     "dew_point":290.69,
//     "uvi":0.16,
//     "clouds":53,
//     "visibility":10000,
//     "wind_speed":3.13,
//     "wind_deg":93,
//     "wind_gust":6.71,
//     "weather":[
//        {
//           "id":803,
//           "main":"Clouds",
//           "description":"broken clouds",
//           "icon":"04d"
//        }
//     ]
//  },
