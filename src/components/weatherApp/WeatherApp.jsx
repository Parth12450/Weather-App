import React, { useState }  from "react";
import "./WeatherApp.css";

import search_icon from '../asssests/search.png';
import clear_icon from '../asssests/clear.png';
import cloud_icon from '../asssests/cloud.png';
import drizzle_icon from '../asssests/drizzle.png';
import rain_icon from '../asssests/rain.png';
import snow_icon from '../asssests/snow.png';
import wind_icon from '../asssests/wind.png';
import humidity_icon from '../asssests/humidity.png';

const WeatherApp = ()=>{


    let api_key = "782b7e879f0ed1079fa768f770e197fe";
    const[wicon, setwicon] = useState(cloud_icon);

    const search =async ()=>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percentage");
        const wind = document.getElementsByClassName("wind-rate");
        const temperture = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/hr";
        temperture[0].innerHTML = Math.floor(data.main.temp) + " °c";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setwicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setwicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setwicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setwicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setwicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setwicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setwicon(snow_icon);
        }
else{
    setwicon(clear_icon);
}

    }


    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search"/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24 °c</div>
            <div className="weather-location">london</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" />
                    <div className="data">
                        <div className="wind-rate">18km/hr</div>
                        <div className="text">wind speed</div>
                    </div>
                </div>
            </div>

        </div>
    )


}

export default WeatherApp; 