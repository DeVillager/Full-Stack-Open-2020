import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState([null, false])
  const results = !filter
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const found = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (!found) {
      const personObj = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage([`Added ${returnedPerson.name}`, false])
          setTimeout(() => { setMessage([null, false]) }, 5000)
        })
    }
    else {
      if (window.confirm(`${found.name} is already added to phonebook, replace the old number with a new one?`)) {
        const personObj = { ...found, number: newNumber }
        const id = found.id
        personService
          .update(id, personObj)
          .then(response => {
            // console.log('response', response)
            setPersons(persons.map(person => person.id !== id ? person : response))
            setMessage([`${response.name} updated`, false])
            setTimeout(() => { setMessage([null, false]) }, 5000)
          })
          .catch(error => {
            setMessage([`Information of ${found.name} has already been removed from server`, true])
            setTimeout(() => { setMessage([null, false]) }, 5000)
          })
      }
    }
  }

  const deleteName = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      const id = person.id
      personService
        .deleteName(id)
        .then(returnedPerson => {
          // console.log(returnedPerson)
          setPersons(persons.filter(item => item.id !== id))
        })
        .catch(error => {
          setMessage([`Information of ${person.name} has already been removed from server`, true])
          setTimeout(() => { setMessage([null, false]) }, 5000)
        })
    }
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />

      <h3>Numbers</h3>
      <ul>
        {results.map((person, i) =>
          <Person
            key={i}
            person={person}
            deleteName={() => deleteName(person)}
          />
        )}
      </ul>
    </div>
  )
}

export default App
