import React, { useState } from "react";
// Import data and WeatherCard here
const cities = require("./data");
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import sunny from "./assets/Sunny.svg";
import cloudy from "./assets/Cloudy.svg";
import partlyCloudy from "./assets/PartlyCloudy.svg";
import rainy from "./assets/Rainy.svg";

function App() {
  const [location, setLocation] = useState("London");

  const imagesObject = {
    sunny: sunny,
    cloudy: cloudy,
    "partly cloudy": partlyCloudy,
    rainy: rainy,
  };

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {cities.map((city, index) => (
          <WeatherCard key={index} data={city} imagesObject={imagesObject} />
        ))}
        <Location
          data={cities}
          location={location}
          setLocation={setLocation}
          imagesObject={imagesObject}
        />
      </div>
    </>
  );
}

export default App;
