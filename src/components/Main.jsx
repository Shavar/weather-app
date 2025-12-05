import React, { useEffect, useState } from "react";
import Search from "./Search";
import Forecast from "./Forecast";
import { useWeatherContext } from "../context/WeatherContext";
import UnitToggle from "./UnitToggle";
import ThemeToggle from "./ThemeToggle";
const Main = () => {
  const { fetchWeatherByLocation } = useWeatherContext();
  const [units, setUnits] = useState("metric");
  const [cordinates, setCordinates] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setCordinates(userLocation);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  useEffect(() => {
    cordinates && fetchWeatherByLocation(cordinates, units);
  }, [cordinates, units]);

  return (
    <div className="weather">
      <Search setCordinates={setCordinates} />
      <ThemeToggle />
      <UnitToggle unit={units} setUnit={setUnits} />
      <Forecast />
    </div>
  );
};

export default Main;
