import React, { useState, useEffect } from 'react';
import { GoLocation } from "react-icons/go";
import '../style.css';


export default function Search({ setQuery }) {


    const [city, setCity] = useState('');

    

    const handleClick = (e) => {
        e.preventDefault();
        setQuery({ q: city });
        setCity('');
    };

    const handleChange = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    };



    return (

        <>
            <div className='appTitle'>
                <h1>Weather App</h1>
         
            </div>
            <div className='searchContainer'>
                <GoLocation size={35} style={{ color: "#394867" }} />
                <input
                    type="text"
                    className="searchInput"
                    placeholder='Enter city...'
                    value={city}
                    onChange={handleChange}

                />
                <button onClick={handleClick}
                    className="searchButton"
                    id="searchTest"
                >
                    Search
                </button>
            </div>
        </>

    );
}