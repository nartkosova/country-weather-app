import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [weather, setWeather] = useState (null)
    const apiKey = import.meta.env.VITE_SOME_KEY

    useEffect (() => {
        const getWeather = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${capital}&aqi=no`)           
                setWeather(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getWeather()
    }, [capital, apiKey])  

if (!weather) {
    return <div>Loading weather data</div>
  }

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>Temperature: {weather.current.temp_c} °C</p>
      <p>Condition: {weather.current.condition.text}</p>
      <p>Wind speed: {weather.current.wind_kph}</p>
      <img src={weather.current.condition.icon} alt="weather icon" />
    </div>
  );
};

export default Weather;