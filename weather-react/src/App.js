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
       <a href='https://github.com/enigmajess/weather-react'>Open source code</a>
       <p> by Jessica Neumann</p>
        
      </header>
    </div>
  );
}

export default App;
