import React, { useEffect, useState } from 'react'
import "./style.css"

const Temp = () => {
    const[searchValue, setSearchValue] = useState('karachi')

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0fcfcc5cf5682e7555b9d533e48365bd`

            const res = await fetch(url)
            const data = await res.json()

            const{temp,humidity,pressure} = data.main;
            const{main : weatherMood} = data.weather[0];
            const{name} = data;
            const{speed} = data.wind; 
            const{country,sunset} = data.sys;

            const weatherData = {
                temp,humidity,pressure,
                weatherMood,
                name,speed,
                country,sunset
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo()
    },[])

  return (
    <>
    <div className="wrap">
        <div className="search">
            <input type="search" 
            placeholder='search ...'
            autoFocus
            id='search'
            value={searchValue}
            onChange={(e)=>{setSearchValue(e.target.value)}}
            className='searchTerm'/>

            <button className='searchButton' type='button' onClick={getWeatherInfo}>Searh</button>    
        </div>
    </div>

    <article className="widget">
        <div className="weatherIcon">
            <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
            <div className="temperature">
                <span>25.5&deg;</span>
            </div>
            <div className="description">
                <div className="weatherCondition">Sunny</div>
                <div className="place">London, UK</div>
            </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        
        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-sunset"></i>
                    </p>
                    <p className="extra-info-leftside">
                        18:00 PM<br/>
                        Sunset
                    </p>
                </div>

                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-humidity"></i>
                    </p>
                    <p className="extra-info-leftside">
                        18:00 PM<br/>
                        Humidity
                    </p>
                </div>

            </div>
            <div className="weather-extra-info">
            <div className="two-sided-section">
                    <p>
                        <i className="wi wi-rain"></i>
                    </p>
                    <p className="extra-info-leftside">
                        18:00 PM<br/>
                        Pressure
                    </p>
                </div>
                <div className="two-sided-section">
                    <p>
                        <i className="wi wi-strong-wind"></i>
                    </p>
                    <p className="extra-info-leftside">
                        18:00 PM<br/>
                        Humidity
                    </p>
                </div>
            </div>
        </div>
    </article>
    
    
    </>
  )
}

export default Temp