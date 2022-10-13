import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import WeatherInfo from "./WeatherInfo";



export default function WeatherSearch(props) {

    let [displayCity, setDisplay] = useState("");
    let [weather, setWeather] = useState(null);


    function handleSubmit(event) {
        const key = `4f8353f322c9f415161732592106f878`;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=imperial`;

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
            date: new Date(response.data.dt * 1000),
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
           <WeatherInfo data={weather} city={displayCity} />
        </div>
    );

}


