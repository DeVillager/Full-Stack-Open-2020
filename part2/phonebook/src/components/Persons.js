import React, { useState, useEffect } from 'react'

const Persons = (props) => {
  const filter = props.filter
  const persons = props.persons
  const deleteName = props.deleteName
  const results = !filter
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );

  return (
    <div>
      <ul>
        {results.map(person =>
          <li key={person.name}>
            {person.name} {person.number}
            <button value={person.id} onClick={deleteName}>delete</button>
          </li>)}
      </ul>
    </div>
  )
}


export default Persons