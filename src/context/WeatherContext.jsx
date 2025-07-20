import React, { createContext, useContext, useState } from "react";
import config from "../config";

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [index, setIndex] = useState(undefined);
  const [location, setLocation] = useState({});
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("WeatherProvider initialized with config:", config);
  const fetchWeather = async (location) => {
    setLoading(true);
    try {
      const res = await fetch(`${config.apiBaseUrl}${location}&units=metric&cnt=7&appid=${config.apiKey}`);
      const data = await res.json();
      const { city, list } = data;
      setLocation(city);
      setForecast(list);
      setIndex(0);
    } catch (error) {
      console.error("Error fetching Weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return <WeatherContext.Provider value={{ index, location, forecast, loading, setIndex, fetchWeather }}>{children}</WeatherContext.Provider>;
};
