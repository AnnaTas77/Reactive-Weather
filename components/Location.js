import React from "react";

function Location({ data, location, setLocation, imagesObject }) {
  let cityObject;

  data.forEach((city) => {
    if (city.city === location) {
      cityObject = city;
    }
  });

  return (
    <div className="card">
      <h2>Your Location's Weather</h2>
      <div className="img-container">
        <img
          className="card-img-top"
          src={
            Object.hasOwn(imagesObject, cityObject.forecast.toLowerCase())
              ? imagesObject[cityObject.forecast.toLowerCase()]
              : ""
          }
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{cityObject.city}</h3>
        <h5 className="card-text">{cityObject.temperature}</h5>
        <h5 className="card-text">{cityObject.forecast}</h5>
      </div>
    </div>
  );
}

module.exports = Location;
