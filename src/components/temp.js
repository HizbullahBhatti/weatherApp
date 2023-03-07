import React, { useEffect, useState } from 'react'
import "./style.css"
import WeatherCard from './weatherCard'

const Temp = () => {
    const[searchValue, setSearchValue] = useState('karachi')
    const[tempInfo,setTempInfo] = useState({})

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
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            };

            setTempInfo(weatherData)

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

    <WeatherCard tempInfo={tempInfo}/>

    </>
  )
}

export default Temp