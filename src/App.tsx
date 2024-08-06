import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import AirConditon from './Components/AirConditions/Aircondition';
import TodayForecast from './Components/TodayForecast/TodayForecast';
import WeeklyForecast from './Components/WeeklyForecast/WeeklyForecast';
import DefaulWeb from './Components/DefaulWeb/DefaulWeb';
function App() {
  const [city, setCity] = useState(false);
  const hendleChaneCity = () =>{
    setCity(true)
  }
  return (
    <div className='App'>
      <div className="forecast">
        <div className="container">
          <Header />
          <SearchBar setCity={hendleChaneCity} city={city}/>
          <div className={`content ${city && "activeWeb"}`}>
            <div className="col1">
              <CurrentWeather city="HANOI, VN" date="Today 6 May" tem="12 °C" sky="overcast clouds" icon={faCloud} />
              <AirConditon />
              <TodayForecast />
            </div>
            <div className="col2">
              <WeeklyForecast />
            </div>
          </div>
          <div className= {`defaulWeb ${!city && "activeWeb"}`}>
            <DefaulWeb/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
