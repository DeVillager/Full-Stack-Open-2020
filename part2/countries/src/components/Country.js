import React from 'react'
import Weather from './Weather'

const Country = ({ country, weatherData }) => {
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
                <Weather weatherData={weatherData} />
            </div>
        )
    }
    return <></>
}

export default Country