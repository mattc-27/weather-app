import React, { useState, useEffect } from 'react';
import { getWeatherData, getRandomItem } from './weatherServices';

// components
import Search from './components/Search';
import Current from './components/Current';
import BackgroundUrls from './BackgroundUrls';

// stylesheet
import './style.css';

export default function App() {

    const [query, setQuery] = useState({ q: 'Denver' });
    const [weather, setWeather] = useState('');
    const [background, setBackground] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getWeatherData(query);
                // fetch,set background image 
                const currentImage = BackgroundUrls.find(({ region }) => region === response.region)
                if (currentImage.images === undefined) {
                    setBackground(`url(${currentImage.value})`)
                } else {
                    const result = getRandomItem(currentImage.images)
                    setBackground(`url(${result.value})`)
                }
                // set weather data
                setWeather(response);
                console.log(response);
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
            .catch(console.error);
    }, [query]);


    return (
        <div className='appContainer'>
            <div className='appTitle'>
                <h1>Weather App</h1>
            </div>
            <div className='appHeader' >
                <Search setQuery={setQuery} />
            </div>
            {weather && (
                <div className='weatherMain' style={{
                    background: '#212235aa',
                    backgroundImage: `${background}`,
                    backgroundSize: 'cover'
                }}>
                    <Current weather={weather} />
                </div>
            )}
        </div>
    );
}