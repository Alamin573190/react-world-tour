
import { useState } from 'react';
import './Country.css'
const Country = (country) => {
    const {name ,flags ,population ,area ,cca3 } = country.country;
    const [visited ,setVisited] = useState(false)
    // console.log(country)
    const handlevisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className='Country'>
            <h3>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />

            <p>population:{population}</p>
            <p>area:{area}</p>
            <p>Code:{cca3}</p>
            {/* <button onClick={handlevisited}>Visited</button> */}
            <button onClick={handlevisited}>{visited ? 'visited':'going'}</button>
            {visited?'i have visited this country ': 'I want visit'}
        </div>
    );
};

export default Country;