import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import AddCity from "../components/AddCity";
import FetchWeather from "../components/FetchWeather";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <AddCity />
      <FetchWeather />
      <Footer />
    </div>
  );
}
