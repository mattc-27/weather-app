import React, { useState, useEffect } from 'react';
import { getWeatherData, getRandomItem } from './weatherServices';

// components
import Search from './components/Search';
import Conditions from './components/Current';
import HourlyForecast from './components/HourlyForecast';
// Background URLs
import Backgrounds from './Backgrounds';

export default function Dashboard() {
    const [query, setQuery] = useState({ q: '' });
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


    return (
        <>
            <header >
                <div className='title-main'>
                    <h1>Weather App</h1>
                </div>
                <Search setQuery={setQuery} />
            </header>
            {weather && (
                <>
                    <div className='col content-center items-center' style={{
                        background: '#212235aa',
                        backgroundImage: `${background}`,
                        backgroundSize: 'cover',
                        height: '100vh'
                    }}>
                        <div className='w-90'>
                            <Conditions weather={weather} />
                        </div>
                    </div>
                    <div className='col content-center items-center bg-gradient w-100' >
                        <div className='row container-style title-light'>
                            <h2>Hourly</h2>
                        </div>
                        <div className='row content-center items-center w-100' style={{ height: '400px' }} /* , border: '1px solid red'}}*/>
                            <HourlyForecast weather={weather} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}