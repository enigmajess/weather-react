import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function WeatherSearch(props) {

    let [displayCity, setDisplay] = useState("");
    let [weather, setWeather] = useState(null);


    function handleSubmit(event) {
        const key = `tc0acb9ba3a2906ae4oa569caf32bce8`;
        const url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=imperial`;

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
            
            date: new Date(response.data.daily[0].time * 1000),
            temperature: response.data.daily[0].temperature.day,
            description: response.data.daily[0].condition.description,
            humidity: response.data.daily[0].temperature.humidity,
            wind: response.data.daily[0].wind.speed,
            icon: response.data.daily[0].condition.icon,
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
           <WeatherForecast city={displayCity}/>
        </div>
    );

}


