import React from "react";
import weatherIcons from "../config/icons.json";

const ForecastIcon = ({ code }) => {
  const icon = !(code > 699 && code < 800) && !(code > 899 && code < 1000) ? "day-" + weatherIcons[code].icon : weatherIcons[code].icon;

  return (
    <div className="forecast__icon">
      <i className={`wi wi-${icon}`}></i>
    </div>
  );
};

export default ForecastIcon;
