import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit,setUnit] = useState("fahrenheit");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelcius(event) {
        event.preventDefault();
        setUnit("celcius")
    }
  
    if (unit === `celcius`) {
        let celcius = (props.fahrenheit - 32) * 5/9;
        return (
            <div className="WeatherTemperature">
                <span className="displayedTemperature">
                    {Math.round(celcius)}
                </span>
                <span className="unit"> °C|<a href="/" onClick={showFahrenheit}>°F</a>
                </span>
            </div>
        )
    } else {
        let fahrenheit = (props.fahrenheit)
        return (
            <div className="WeatherTemperature">
                <span className="displayedTemperature">
                    {Math.round(fahrenheit)}
                </span>
                <span className="unit"> <a href="/" onClick={showCelcius}>°C</a>|°F
                </span>
            </div>
        )
    }
   
}
