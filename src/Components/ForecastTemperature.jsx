import React from "react";

const ForecastTemperature = ({ temperature }) => (
  <div className="forecast__temp">
    <span className="forecast__temp__high">{temperature["max"].toFixed()}°</span>
    <span className="forecast__temp__low">{temperature["min"].toFixed()}°</span>
  </div>
);
export default ForecastTemperature;
