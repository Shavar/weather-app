import React, { useRef } from "react";
import { useWeatherContext } from "../context/WeatherContext";

const Search = ({ setCordinates }) => {
  const locationRef = useRef("");
  const { location } = useWeatherContext();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    locationRef.current.value && setCordinates(locationRef.current.value.trim());
    locationRef.current.value = "";
    locationRef.current.blur();
  };

  return (
    <>
      {location && <div className="search__location">Current Location: {location}</div>}
      <div className="search">
        <form onSubmit={handleSubmit} className="search__box">
          <input type="text" ref={locationRef} placeholder="Enter location" className="search__field" />
          <button type="reset"></button>
          <button type="submit" className="search__submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
