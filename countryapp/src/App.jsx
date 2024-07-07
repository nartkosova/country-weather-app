import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './country/Countries'
import Filter from './country/Filter'
import './App.css'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilter] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);
  const handleFilterChange = (event)  => {
      setSearch (event.target.value)
      if (event.target.value === '') {
      setFilter([])
      return;
    }
  const filtered = countries.filter(country =>
    country.name.common.toLowerCase().includes(event.target.value.toLowerCase()) 
  );
  setFilter(filtered)
  }

  return (
    <div>
      <Filter value={search} onChange={handleFilterChange} />
      <Countries countries={filteredCountries}/>
    </div>
  );
};

export default App;
