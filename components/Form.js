import React, { useState } from "react";

export default function Form({ location, setLocation }) {
  const [typedLocation, setTypedLocation] = useState("");

  function handleLocation(event) {
    setTypedLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLocation(typedLocation);
    setTypedLocation("");
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="city">
          City:
          <input
            type="text"
            value={typedLocation}
            onChange={handleLocation}
            required
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
