import React from 'react'

const Person = (props) => {
    const person = props.person
    const deleteName = props.deleteName
    return (
        <li className='person' key={person.name}>
            {person.name} {person.number}
            <button value={person.id} onClick={deleteName}>delete</button>
        </li>
    )
}


export default Person