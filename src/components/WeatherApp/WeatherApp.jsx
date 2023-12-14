import React from 'react'
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
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="city" placeholder='Search'/>
        <div className="search-icon">
          <img src={search_icons} alt="Search" />
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