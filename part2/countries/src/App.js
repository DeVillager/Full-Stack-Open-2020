import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')
  const [shownCountry, setShownCountry] = useState()

  const results = !countryName
    ? countries
    : countries.filter(person =>
      person.name.toLowerCase().includes(countryName.toLocaleLowerCase())
    );

  const handleFilter = (event) => {
    setCountryName(event.target.value)
  }
  const showCountry = (country) => {
    // console.log('showcountry ', event.target.value)
    setShownCountry(country)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(result => {
        // console.log(result.data)
        setCountries(result.data)
        // setShownCountry({countries[0]})
      })
  }, [])


  const Results = () => {
    if (results.length > 10) {
      return <p>Too many matches, specify another filter</p>
    } else if (results.length > 0) {
      return (
        <ul>
          {results.map(country =>
            <li key={country.name}>
              {country.name}
              <button value={country} onClick={() => showCountry(country)}>show</button>
            </li>
          )}
        </ul>
      )
    } else {
      return <p>Search for country</p>
    }
  }

  const Country = ({ country }) => {
    console.log(country)
    if (country) {
      return (
        <div>
          <h2>{country.name}</h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h3>languages</h3>
          <ul>
            {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
          </ul>
          <img src={country.flag} alt="flag" width={200} />
        </div>
      )
    }
    return <></>
  }

  return (
    <div>
      <div>
        Find countries <input value={countryName} onChange={handleFilter} />
      </div>
      <Results />
      <Country country={shownCountry} />
    </div>
  )
}

export default App