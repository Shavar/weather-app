import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import "./styles/main.scss";

const App = () => (
  <WeatherProvider>
    <Search />
    <Weather />
  </WeatherProvider>
);

export default App;
