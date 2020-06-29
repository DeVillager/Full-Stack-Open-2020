import React from 'react'

const Results = ({ results, showCountry }) => {
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

export default Results