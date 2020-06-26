import React, { useState, useEffect } from 'react'

const Persons = (props) => {
  const filter = props.filter
  const persons = props.persons
  const results = !filter
  ? persons
  : persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  
  return (
    <div>
      <ul>
        {results.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}


export default Persons