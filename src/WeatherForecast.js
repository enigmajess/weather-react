import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(forecast)
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].time}</div>
            <WeatherIcon code={forecast[0].condition.icon} size={32} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-max">{Math.round(forecast[0].temperature.maximum)}°</span>
              <span className="WeatherForecast-min">{Math.round(forecast[0].temperature.minimum)}°</span>
            </div>
          </div>
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
