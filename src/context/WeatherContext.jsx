import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react";
import config from "../config";

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({
    current: null,
    daily: [],
    hourly: [],
  });
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(undefined);

  const clearStates = () => {
    setWeather({ current: null, daily: [], hourly: [] });
    setActiveIndex(undefined);
    setLocation(null);
  };

  // A single, robust function to handle fetching all data
  const fetchWeatherByLocation = useCallback(
    async (reqLocation, units) => {
      setLoading(true);
      setError(null);

      console.log(`Fetching weather for: ${reqLocation} with units: ${units}`);

      const fetchLocationUrl =
        !reqLocation?.lat && !reqLocation?.lon
          ? `${config.apiLocationUrl}direct?q=${reqLocation}`
          : `${config.apiLocationUrl}reverse?lat=${reqLocation.lat}&lon=${reqLocation.lon}`;

      try {
        const geoRes = await fetch(`${fetchLocationUrl}&limit=1&appid=${config.apiKey}`);
        if (!geoRes.ok) throw new Error("Failed to fetch location data.");

        const geoData = await geoRes.json();
        const geoLocation = geoData[0];

        console.log("Geo Location Data:", geoLocation);

        if (!geoLocation?.lat || !geoLocation?.lon) {
          console.log("clear the states");
          clearStates();
          setError("Location not found. Please try another search.");
          throw new Error("Location not found. Please try another search.");
        }

        const { name, state, country } = geoLocation;
        const locationString = [name, state, country].filter(Boolean).join(", ");
        setLocation(locationString);

        const weatherRes = await fetch(
          `${config.apiWeatherUrl}&lat=${geoLocation.lat}&lon=${geoLocation.lon}&exclude=minutely&appid=${config.apiKey}&units=${units}`
        );
        if (!weatherRes.ok) throw new Error("Failed to fetch weather data.");

        const weatherData = await weatherRes.json();
        if (!weatherData?.current || !weatherData?.daily || !weatherData?.hourly) {
          throw new Error("Invalid weather data format received.");
        }

        console.log("Weather Data:", weatherData);

        setWeather({
          current: weatherData.current,
          daily: weatherData.daily,
          hourly: weatherData.hourly,
        });
        setActiveIndex(0); // Reset to the first day's forecast
      } catch (err) {
        setError(err.message);
        clearStates();
      } finally {
        setLoading(false);
      }
    },
    [location] // Recreate this function only if `units` changes
  );

  // Memoize the context value to prevent unnecessary re-renders of consumers
  const contextValue = useMemo(
    () => ({
      weather,
      location,
      loading,
      error,
      activeIndex,
      setActiveIndex,
      fetchWeatherByLocation,
    }),
    [weather, location, loading, error, activeIndex, fetchWeatherByLocation]
  );

  return <WeatherContext.Provider value={contextValue}>{children}</WeatherContext.Provider>;
};
