import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I'm {person.name} with skill as {person.skill}</h2>
        </div>
    )
}

export default Person
