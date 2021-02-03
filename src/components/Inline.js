import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'red'
}

export default function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline Stylesheet</h1>
            <h1 className='error'>Inline Normal CSS</h1>
        </div>
    )
}
