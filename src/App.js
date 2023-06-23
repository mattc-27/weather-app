import React, { useState, useEffect } from 'react';
import { getWeatherData } from './weatherServices';
import Search from './components/Search';
import Current from './components/Current';
import './style.css';


export default function App() {

    const [query, setQuery] = useState({ q: 'Denver' });
    const [weather, setWeather] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getWeatherData(query);
                setWeather(response);
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
            .catch(console.error);
    }, [query]);


    return (
        <div className='appContainer'>
            <div className='appHeader'>
                <Search setQuery={setQuery} />
            </div>
            <div className='weatherMain'>
                {weather && (
                    <Current weather={weather} />
                )}
            </div>
        </div>
    );
};