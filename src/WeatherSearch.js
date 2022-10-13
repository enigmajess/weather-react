import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";


export default function WeatherSearch(props) {

    let [displayCity, setDisplay] = useState("");
    let [weather, setWeather] = useState(null);


    function handleSubmit(event) {
        let key = `4f8353f322c9f415161732592106f878`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=imperial`;

        event.preventDefault();
        setDisplay(`${props.city}`)
        props.setCity(props.city)
        axios.get(url).then(showTemperature);
    }



    function changeCity(event) {
        props.setCity(event.target.value);

    }

    function showTemperature(response) {
        setWeather({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
        });
    }

    let form = (


        <form onSubmit={handleSubmit} className="row searchBar d-flex justify-content-center">
            <input type="search" placeholder="Type a city..." onChange={changeCity} className="col-6"/>
            <button type="submit" className="btn btn-primary col-2" value="submit" >Search</button>
        </form>


    );

    if (weather === null) {
        return <div>
            {form}
        </div>
    }

    return (
        <div className="weather">
            {form}
            <div className="row">
                <div className="col-6">
                    <h2>{displayCity}</h2>
                    <ul>
                        <li>Date</li>
                        <li>{weather.description}</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt={`${weather.description}`}
                    />
                    <span>{Math.round(weather.temperature)}°F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weather.humidity}%</li>
                        <li>Wind: {weather.wind}mp/h</li>
                    </ul>
                </div>
            </div>


        </div>
    );

}


