import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch(props) {

    let [displayCity, setDisplay] = useState("");
    let [weather, setWeather] = useState(null);


    function handleSubmit(event) {
        let key = `4f8353f322c9f415161732592106f878`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;

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

        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a city..." onChange={changeCity} />
            <button type="button" class="btn btn-primary">Search</button>
        </form>

    );

    if (weather === null) {
        return <div>
            {form}
        </div>
    }

    return (
        <div>
            {form}
            <h2>{displayCity}</h2>
            <ul>
                <li>Temperature: {weather.temperature}°C</li>
                <li>Description: {weather.description}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/h</li>
                <li>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt={`${weather.description}`}
                    />
                </li>
            </ul>
        </div>
    );

}


