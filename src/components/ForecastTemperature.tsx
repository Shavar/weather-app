import React from "react";

type ForecastTemperatureProps = {
  max: number;
  min?: number;
};

const ForecastTemperature = ({ max, min }: ForecastTemperatureProps) => (
  <div className="forecast__temp">
    <span className="forecast__temp__high">{max.toFixed()}°</span>
    {min && <span className="forecast__temp__low">{min.toFixed()}°</span>}
  </div>
);
export default ForecastTemperature;
