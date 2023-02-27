import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import "../styles/CardsView.css";

const apiKey = "942005e9e4340bc8fd8b65dc0cd69a56";
const units = "metric";

const FetchWeather = () => {
  const [cityIds, setCityIds] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Shanuka-98/35e977b00b671b4298467010bbe8b74c/raw/b411889085a920063c8760f0f8ab23c3571b3b22/cities.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const ids = data.List.map((city) => city.CityCode);
        setCityIds(ids);
      });
  }, []);

  useEffect(() => {
    if (!cityIds.length) return;
    fetch(
      `http://api.openweathermap.org/data/2.5/group?id=${cityIds}&units=${units}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setData(processData(data)));
  }, [cityIds]);

  function processData(data) {
    let cities = [];
    for (let i = 0; i < data.cnt; i++) {
      let city = data.list[i];
      const visibilityInKm = city.visibility / 1000;
      let cityInfo = {
        name: city.name,
        country: city.sys.country,
        temperature: city.main.temp,
        weather: city.weather[0].description,
        pressure: city.main.pressure,
        humidity: city.main.humidity,
        tempMin: city.main.temp_min,
        tempMax: city.main.temp_max,
        icon: city.weather[0].icon,
        visibility: visibilityInKm.toFixed(1),
      };
      cities.push(cityInfo);
    }

    return cities;
  }

  const colors = ["#388ee7", "#6249cc", "#40b681", "#de944e", "#9c3a3a"];

  var colorCount = 0;

  function getRandomColor() {
    if (colorCount < 5) {
      let color = colors[colorCount];
      colorCount++;
      return color;
    } else {
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }

  return (
    <div className="CardsView">
      {data.map((item, index) => (
        <WeatherCard key={index} data={item} color={getRandomColor()} />
      ))}
    </div>
  );
};

export default FetchWeather;
