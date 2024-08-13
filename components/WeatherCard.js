import React from "react";

function WeatherCard({ data, imagesObject }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={
            Object.hasOwn(imagesObject, data.forecast.toLowerCase())
              ? imagesObject[data.forecast.toLowerCase()]
              : ""
          }
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{data.city}</h3>
        <h5 className="card-text">{data.temperature}</h5>
        <h5 className="card-text">{data.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard

module.exports = WeatherCard;
