import React, { useState, useEffect } from 'react';
import { getWeatherData, getRandomItem } from './weatherServices';

// components
import Search from './components/Search';
import Current from './components/Current';
//import BackgroundUrls from './BackgroundUrls';
import Backgrounds from './Backgrounds';

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
                // set weather data
                setWeather(response);
                console.log(response);

                // fetch,set background image 
                const currentLocation = Backgrounds.images.find(({ region }) => region === response.region)

                console.log(currentLocation)
                if (currentLocation.names === undefined) {
                    const currentImage = getRandomItem(currentLocation.images)
                    setBackground(`url(${currentImage.value})`)
                } else {
                    const currentCity = currentLocation.names.find(({ name }) => name === response.name)
                    if (currentCity === undefined) {
                        const currentImage = getRandomItem(currentLocation.images)
                        setBackground(`url(${currentImage.value})`)
                    } else {
                        const result = getRandomItem(currentCity.images)
                        setBackground(`url(${result.value})`)
                    }
                }
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
            .catch(console.error);
    }, [query]);

    const dateTime = new Date();
    const localTime = dateTime.toLocaleTimeString();
    const localDate = dateTime.toLocaleDateString();

    return (
        <div className='appContainer'>
            <div className='appHeader' >
                <div className='appTitle'>
                    <h1>Weather App</h1>
                    <p>{localDate} | {localTime}</p>
                </div>
                <div className='appSearch' >
                    <Search setQuery={setQuery} />
                </div>
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