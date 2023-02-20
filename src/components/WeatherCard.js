import React from "react";
import "../styles/WeatherCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";


export default function WeatherCard({ data }) {
  return (
    <div className="Cards">
      <Card
        className="WeatherCard"
        style={{ backgroundColor: "#388ee7", borderRadius: 8 }}
        sx={{ minWidth: 100, maxWidth: 600, minHeight: 50, maxHeight: 370 }}
      >
        <CardActionArea>
          <div className="CardTop">
            <div className="CardTopItemsContainer">
              <img
                className="CloseIcon CardTopItem TopItem-1"
                src={require("../assets/close_black.png")}
                alt="icon"
              />

              <h3 className="text-3xl font-bold text-white CardTopItem TopItem-2">
                {data.name}, {data.country}
              </h3>

              <h1 className="text-base text-white CardTopItem TopItem-3">
                9.19am, march 8
              </h1>

              <img
                className="WeatherIcon CardTopItem TopItem-5"
                src={`http://openweathermap.org/img/w/${data.icon}.png`}
                alt="icon"
              />

              <h6
                className="text-lg text-white CardTopItem TopItem-4"
                style={{ fontWeight: 380 }}
              >
                {data.weather}
              </h6>

              <h1 className="text-6xl font-medium text-white CardTopItem TopItem-6">
                <small>{data.temperature}</small>
                <sup>o</sup>c
              </h1>

              <small className="text-sm text-white CardTopItem TopItem-7">
                Temp min: <small>{data.tempMin}</small>
                <sup>o</sup>c
              </small>

              <small className="text-sm text-white CardTopItem TopItem-8">
                Temp max: <small>{data.tempMax}</small>
                <sup>o</sup>c
              </small>
            </div>
          </div>

          <CardContent
            className="CardBottom"
            style={{ backgroundColor: "#383b47", height: 150 }}
          >
            <div className="BottomLeft">
              <h1 className="text-sm font-semibold text-white">
                Pressure:{" "}
                <span className="text-sm font-normal text-white FetchText">
                  {data.pressure}hPa
                </span>
              </h1>

              <h1 className="text-sm font-semibold text-white">
                Humadity:{" "}
                <span className="text-sm font-normal text-white FetchText">
                  {data.humidity}%
                </span>
              </h1>

              <h1 className="text-sm font-semibold text-white">
                Visibiliy:{" "}
                <span className="text-sm font-normal text-white FetchText">
                  {data.visibility}km
                </span>
              </h1>
            </div>

            <div className="BottomCenter">
              <div className="vertical-line1"></div>

              <img
                className="DegreeIcon"
                src={require("../assets/degree.png")}
                alt="icon"
              />

              <h3 className="text-sm font-semibold text-white">
                4.0ms/ 120 Degree
              </h3>

              <div className="vertical-line2"></div>
            </div>

            <div className="BottomRight">
              <h1 className="text-sm font-semibold text-white">
                Sunrise:{" "}
                <span className="text-sm font-normal text-white FetchText">
                  6:05am
                </span>
              </h1>

              <h1 className="text-sm font-semibold text-white">
                Sunset:{" "}
                <span className="text-sm font-normal text-white FetchText">
                  6:05am
                </span>
              </h1>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
