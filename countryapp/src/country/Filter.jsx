import React from 'react'

const Filter =({ value, onChange }) => {
    return (
        <li>
          find country <input value={value} onChange={onChange}/>
        </li>
    )
}
export default Filter;