import React from 'react'

const Filter =({ value, onChange }) => {
    return (
        <li className='main'>
          Search for country: <input value={value} onChange={onChange}/>
        </li>
    )
}
export default Filter;