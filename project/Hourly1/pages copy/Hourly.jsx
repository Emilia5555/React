import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { apiContext } from "../App";
import "./Hourly.css";
const url = `http://api.weatherapi.com/v1`;
const api = axios.create({
  baseURL: url,
});

const Hourly = () => {
  let [location, setLocation] = useState(null);
  let [region, setRegion] = useState(null);

  let [date, setDate] = useState();

  let [temps, setTemps] = useState([]);
  let [time, setTime] = useState([]);
  let [text, setText] = useState([]);
  let [icon, setIcon] = useState([]);
  let [uv, setUv] = useState([]);
  let [feelsLike, setFeelsLike] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const contextValue = useContext(apiContext);

  function getData() {
    api
      .get(
        `/forecast.json?key=b55a046824644c14b33180550230708&q=${contextValue.locationInput}`
      )

      .then((response) => {
        setDate(response.data.forecast.forecastday[0].date);
        setLocation(response.data.location.name);
        setRegion(response.data.location.region);

        let temperatures = response.data.forecast.forecastday[0].hour.map(
          (hour) => hour.temp_f
        );
        setTemps(temperatures);
        let times = response.data.forecast.forecastday[0].hour.map(
          (hour) => hour.time
        );
        setTime(times);
        let condition = response.data.forecast.forecastday[0].hour.map(
          (hour) => hour.condition.text
        );
        setText(condition);
        let pic = response.data.forecast.forecastday[0].hour.map(
          (hour) => hour.condition.icon
        );
        setIcon(pic);
        let index = response.data.forecast.forecastday[0].hour.map(
          (hour) => hour.uv
        );
        setUv(index);
        let FL = response.data.forecast.forecastday[0].hour.map(
          (hour) => hour.feelslike_f
        );
        setFeelsLike(FL);
      });
  }

  return (
    <>
      <div className="body">
        <div className="header">
          <h1>Hourly forecast</h1>
          <h3>{date}</h3>
          <h4 className="location">
            {location}, {region}
          </h4>
        </div>
        <div className="container">
          <div className="info">
            <div className="Time">
              {time.map((hour) => {
                if (hour.substring(11, 16) === "00:00") {
                  return <h3>12:00 am</h3>;
                }
                for (let i = 13; i <= 24; i++) {
                  if (hour.substring(11, 13) == i) {
                    return <h3>{i - 12}:00 pm</h3>;
                  } else {
                  }
                }
                return <h3>{hour.substring(11, 16)} am</h3>;
              })}
            </div>

            <div className="Icon">
              {icon.map((icons) => {
                return (
                  <div className="img">
                    <img src={icons} />
                  </div>
                );
              })}
            </div>
            <div className="Text">
              {text.map((text) => {
                return <h3>{text}</h3>;
              })}
            </div>
            <div className="Temps">
              {temps.map((temp) => {
                return <h3>{temp}°F</h3>;
              })}
            </div>
            <div className="FL">
              {feelsLike.map((feelsLike) => {
                return <h3> feels like {feelsLike}°F</h3>;
              })}
            </div>
            <div className="UV">
              {uv.map((uv) => {
                return <h3>UV {uv}</h3>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hourly;
