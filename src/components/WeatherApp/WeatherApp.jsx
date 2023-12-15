import React, { useState } from 'react'
import './WeatherApp.css'
import search_icons from '../assets/search.png';
import clear_icons from '../assets/clear.png';
import cloud_icons from '../assets/cloud.png';
import drizzle_icons from '../assets/drizzle.png';
import rain_icons from '../assets/rain.png';
import snow_icons from '../assets/snow.png';
import wind_icons from '../assets/wind.png';
import humidity_icons from '../assets/humidity.png';

const WeatherApp = () => {
  let api_key = "5e04fcf37719f9bff16c7ac025e4c5a6";

  const [wicon, setWicon] = useState(cloud_icons);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value==="") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-speed")
    const temperature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/hr";
    temperature[0].innerHTML = Math.floor(data.main.temp);
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n") {
      setWicon(clear_icons);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n") {
      setWicon(cloud_icons);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n") {
      setWicon(drizzle_icons);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n") {
      setWicon(drizzle_icons);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n") {
      setWicon(rain_icons);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n") {
      setWicon(rain_icons);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n") {
      setWicon(snow_icons);
    }
    else {
      setWicon(clear_icons);
    }
  }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search'/>
        <div className="search-icon">
          <img src={search_icons} alt="Search" onClick={() => {search()}} />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icons} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icons} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icons} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp