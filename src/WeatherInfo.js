import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return( 
    <div className="weatherInfo">
        <div className="row">
        <div className="col-6">
            <h2 className="text-capitalize">{props.city}</h2>
            <ul>
            <FormattedDate date={props.data.date} />
            <li className="text-capitalize">{props.data.description}</li>
            </ul>
        </div>
        </div>
        <div className="row">
        <div className="col-6">
            <img
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt={`${props.data.description}`}
            />
            <span>{Math.round(props.data.temperature)}°F</span>
        </div>
        <div className="col-6">
            <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}mp/h</li>
            </ul>
        </div>
        </div>
    </div>);
}
