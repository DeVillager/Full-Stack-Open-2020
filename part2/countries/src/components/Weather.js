import React from 'react'

const Weather = ({ weatherData }) => {
    // console.log(weatherData)
    if (weatherData) {
        const current = weatherData.current
        const temperature = `${current.temperature} Celsius`
        const wind = `${current.wind_speed} mph direction ${current.wind_dir}`
        return (
            <div>
                <h2>Weather in {weatherData.location.name}</h2>
                <p><strong>temperature: </strong>{temperature}</p>
                <img src={current.weather_icons[0]} alt="icon" width={50} />
                <p><strong>wind: </strong>{wind}</p>
            </div>
        )
    }
    return null
}

export default Weather