import './App.css';
import { useState } from "react";
import WeatherSearch from './WeatherSearch';

function App() {
  let [city, setCity] = useState("");

  return (
    <div className="App">

      <div className='container'>
        <h1>Weather App</h1>
        <WeatherSearch city={city} setCity={setCity} />

        
      </div >

      <div className="open-source">
          <p> This project was created by Jessica Neumann, open-sourced on <span>
            <a href='https://github.com/enigmajess/weather-react' rel="noreferrer" target="_blank">Github </a>
          </span>
            , and hosted on
            <span>
              <a href='https://scintillating-gumption-2d9268.netlify.app/' rel="noreferrer" target="_blank"> Netlify</a>
            </span>
            .
          </p>
        </div>

    </div>


  );
}

export default App;
