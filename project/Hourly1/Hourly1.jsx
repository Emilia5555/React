import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hourly.css";
let city = "jacksonville";
const url = `http://api.weatherapi.com/v1/forecast.json?key=b55a046824644c14b33180550230708&q=${city}`;
const api = axios.create({
  baseURL: url,
});

const Hourly = () => {
  let [temps, setTemps] = useState([]);
  let [time, setTime] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    api.get().then((response) => {
      console.log(response.data.forecast);
      let temperatures = response.data.forecast.forecastday[0].hour.map(
        (hour) => hour.temp_f
      );
      setTemps(temperatures);
    });
    api.get().then((response) => {
      let times = response.data.forecast.forecastday[0].hour.map(
        (hour) => hour.time
      );
      setTime(times);
    });
  }

  return (
    <>
      {" "}
      <h1>Hourly forecast</h1>
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
        <div className="Temps">
          {temps.map((temp) => {
            return <h3>{temp}°F</h3>;
          })}
        </div>
      </div>
    </>
  );
};

export default Hourly;
