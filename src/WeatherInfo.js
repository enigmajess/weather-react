import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <h2 className="text-capitalize">{props.city}</h2>
          <ul>
            <FormattedDate date={new Date(props.data.date)} />
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          <WeatherIcon code={props.data.icon} size={60} alt={props.data.description} />
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}mp/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
