import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Results from './components/Results'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')
  const [shownCountry, setShownCountry] = useState()
  const [weatherData, setWeatherData] = useState(null)

  const results = !countryName
    ? countries
    : countries.filter(person =>
      person.name.toLowerCase().includes(countryName.toLocaleLowerCase())
    );

  const handleFilter = (event) => {
    setCountryName(event.target.value)
  }
  const showCountry = (country) => {
    getWeather(country)
    setShownCountry(country)
  }

  const getWeather = (country) => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name}`)
      .then(result => {
        setWeatherData(result.data)
      })
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(result => {
        // console.log(result.data)
        setCountries(result.data)
      })
  }, [])

  return (
    <div>
      <div>
        Find countries <input value={countryName} onChange={handleFilter} />
      </div>
      <Results results={results} showCountry={showCountry} />
      <Country country={shownCountry} weatherData={weatherData} />
    </div>
  )
}

export default App