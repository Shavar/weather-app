import React from "react";

const UnitToggle = ({ unit, setUnit }) => {
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="units">
      <input type="checkbox" id="units__checkbox" className="units__checkbox" checked={unit === "imperial" ? true : false} onChange={toggleUnit} />
      <label for="units__checkbox">
        <div className="units__toggle"></div>
        <div className="units__names">
          <p className="units__names__metric">Metric</p>
          <p className="units__names__imperial">Imperial</p>
        </div>
      </label>
    </div>
  );
};

export default UnitToggle;
