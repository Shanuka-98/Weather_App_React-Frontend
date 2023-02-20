import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="Span">
        <img className="Logo" src={require("../assets/logo.png")} alt="logo" />
        <h3 className="Title">Weather App</h3>
      </div>
    </div>
  );
}
