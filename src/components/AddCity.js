import React from "react";
import "../styles/AddCity.css";

export default function AddCity() {
  return (
    <div className="AddCity">
      <input className="TxtInput" type="text" placeholder="Enter a City" />
      <button className="Btn">Add City</button>
    </div>
  );
}
