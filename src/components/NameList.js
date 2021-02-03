import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [{
        id: 1,
        name: 'Suril',
        skill: 'Django'
    },{
        id: 2,
        name: 'Rishi',
        skill: 'Python'
    }]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return <div>{personList}</div>
}

export default NameList
