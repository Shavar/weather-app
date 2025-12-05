import React, { useEffect, useState } from "react";
import { WeatherProvider } from "./context/WeatherContext";
import Main from "./components/Main";
import "./styles/main.scss";

const App = () => {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
};

export default App;
