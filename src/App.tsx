import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import AirConditon from './Components/AirConditions/Aircondition';
import TodayForecast from './Components/TodayForecast/TodayForecast';
import WeeklyForecast from './Components/WeeklyForecast/WeeklyForecast';
import DefaulWeb from './Components/DefaulWeb/DefaulWeb';
import { fetchWeatherData } from './api';
interface WeatherData {
  weather: any;
  forecast: any;
}
function App() {
  const [cityName, setCityName] = useState('');
  const [cityCoords, setCityCoords] = useState<{ lat: number | null, lon: number | null }>({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const handleCitySelect = async (name: any, lat: any, lon: any) => {
    setCityName(name);
    setCityCoords({ lat, lon });
  };

  useEffect(() => {
    const getWeatherData = async () => {
      if (cityCoords.lat !== null && cityCoords.lon !== null) {
        const data = await fetchWeatherData(cityCoords.lat, cityCoords.lon);
        if (data) {
          const [weather, forecast] = data;
          setWeatherData({ weather, forecast });
        }
      }
    };

    getWeatherData();
  }, [cityCoords]);

  function convertToLocalDateTime(timezone: number): Date {
    const now = new Date();

    const localDate = new Date(now.getTime() + (timezone-7*3600) * 1000);

    return localDate;
  }

  function formatDateToToday(date: Date): string {
    const day = date.getDate();
    const monthIndex = date.getMonth();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const monthName = months[monthIndex];

    return `Today, ${day} ${monthName}`;
  }


  return (
    <div className='App'>
      <div className="forecast">
        <div className="container">
          <Header timezone={weatherData?.weather?.timezone}/>
          <SearchBar setCity={handleCitySelect} city={cityName} />
          <div className={`content ${cityName && "activeWeb"}`}>
            <div className="col1">
              <CurrentWeather city={cityName} date={formatDateToToday(convertToLocalDateTime(weatherData?.weather?.timezone))} tem={weatherData?.weather.main.temp + ' °C'} sky={weatherData?.weather?.weather[0]?.description || "No data available"} icon={weatherData?.weather?.weather[0]?.icon} />
              <AirConditon RealFeel={weatherData?.weather?.main.feels_like} Wind={weatherData?.weather?.wind?.speed} Clouds={weatherData?.weather?.clouds?.all} Humidity={weatherData?.weather.main.humidity} />
              <TodayForecast forecast={weatherData?.forecast.list} date={convertToLocalDateTime(weatherData?.weather?.timezone)} timezone={weatherData?.weather?.timezone}/>
            </div>
            <div className="col2">
              <WeeklyForecast forecast={weatherData?.forecast.list} date={convertToLocalDateTime(weatherData?.weather?.timezone)} timezone={weatherData?.weather?.timezone}/>
            </div>
          </div>
          <div className={`defaulWeb ${!cityName && "activeWeb"}`}>
            <DefaulWeb />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
