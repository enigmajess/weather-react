import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

 useEffect(() => {
    setLoaded(false);
 }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(forecast);
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key = {index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          
          })}
        </div>
      </div>
    );
  } else {
    const key = `tc0acb9ba3a2906ae4oa569caf32bce8`;
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=imperial`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
