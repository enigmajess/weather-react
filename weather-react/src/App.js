import './App.css';
import { useState } from "react";
import WeatherSearch from './WeatherSearch';

function App() {
  let [city, setCity] = useState("");
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
       <WeatherSearch city={city} setCity={setCity}/>
       
       <p> This project was created by Jessica Neumann and open-sourced on <span>
       <a href='https://github.com/enigmajess/weather-react'>Github</a>
       </span>
       and hosted on
       <span>
       <a href='https://scintillating-gumption-2d9268.netlify.app/'>Netlify</a>
       </span>
       .
       </p>
        
      </header>
    </div>
  );
}

export default App;
