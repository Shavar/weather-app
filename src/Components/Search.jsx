import React, { useRef, useEffect } from "react";
import { useWeatherContext } from "../context/WeatherContext";

const Search = () => {
  const locationRef = useRef("");
  const { fetchWeather } = useWeatherContext();

  useEffect(() => {
    locationRef.current?.focus();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    locationRef.current.value && fetchWeather(locationRef.current.value.trim());
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" ref={locationRef} placeholder="Enter location" className="search__field" />
        <button type="submit" className="btn btn-primary hidden">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
