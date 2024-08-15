import React, { useState, useEffect } from "react";

function Location({ data, location, setLocation, imagesObject }) {
  const [cityObjectFromApi, setCityObjectFromApi] = useState(null);

  const weatherApi = {
    key: "5898d1f46544d841eac1352fba609ade",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };

  let myUrl = `${weatherApi.baseUrl}weather?q=${location}&units=metric&appid=${weatherApi.key}`;

  // console.log(myUrl);

  useEffect(() => {
    async function fetchDataFromApi(url) {
      const response = await fetch(url);
      const data = await response.json();
      setCityObjectFromApi(data);
    }

    fetchDataFromApi(myUrl);
  }, [location, myUrl]);

  // console.log(cityObjectFromApi);

  if (!cityObjectFromApi) {
    return <div>Loading...</div>; // Render loading state if data is not yet available
  }

  return (
    <div className="current-location-card">
      <h2>Your Location's Weather</h2>
      <div className="img-container">
        <img
          className="card-img-top"
          src={`https://openweathermap.org/img/wn/${cityObjectFromApi.weather[0].icon}@2x.png`}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{cityObjectFromApi.name}</h3>
        <h5 className="card-text">{cityObjectFromApi.main.temp}</h5>
        <h5 className="card-text">
          {cityObjectFromApi.weather[0].description}
        </h5>
      </div>
    </div>
  );
}

module.exports = Location;
