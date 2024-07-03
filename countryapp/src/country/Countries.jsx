import React, { useState } from 'react';
import Country from './Country'

const Countries = ({ countries }) => {
    const [selectedCountry, setSelectedCountry] = useState (null); 
    const handleShow = (country) => {
        if (selectedCountry && selectedCountry.cca3 === country.cca3){
            setSelectedCountry(null)
        } else {
            setSelectedCountry(country)
        }
    }
    if (countries.length>10) {
        return <p>Too many matches, specify another filter</p>
    }
    if (countries.length === 1) {
        return <Country country={countries[0]}/>
    }
    return (
        <ul>
            {countries.map(country => (
                <li key={country.cca3}>{country.name.common}
                <button onClick={() => handleShow(country)}>
                    {selectedCountry && selectedCountry.cca3 === country.cca3 ? 'hide' : 'show'}
                    </button>
                 {selectedCountry && selectedCountry.cca3 === country.cca3 && (
            <Country country={country} /> 
            )}
            </li>
    ))}
        </ul>
    )
}
export default Countries