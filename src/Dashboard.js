import React, { useState, useEffect } from 'react';
import { getWeatherData, getRandomItem } from './weatherServices';
import toast, { Toaster } from 'react-hot-toast';
// components
import Search from './components/Search';
import { Conditions } from './components/Current';
import HourlyForecast from './components/HourlyForecast';
import OutlookForecast from './components/Outlook';
// Background URLs
import Backgrounds from './Backgrounds';


export default function Dashboard() {
    const [query, setQuery] = useState({ q: '' });
    const [weather, setWeather] = useState('');
    const [background, setBackground] = useState('');

    useEffect(() => {
        async function getUserLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error);
            } else {
                //setQuery({q: 'San Francisco'})
                console.log('Geolocation not suppoerted')
            }
        }
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setQuery({ q: `${latitude},${longitude}` })
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        }
        function error() {
            //setQuery({q: 'San Francisco'})
            console.log('Unable to retrieve your location')
        }
        getUserLocation()
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await toast.promise(getWeatherData(query), {
                    loading: 'Fetching weather...',
                    success: 'Got the weather ☃️ !',
                    error: 'Error when fetching',
                },
                    {
                        style: {
                            minWidth: '270px',
                            height: '100px',
                            background: '#fafafa',
                            color: '#252525',
                            fontFamily: 'Cabin',
                            fontSize: '1.5em'
                        },
                        success: {
                            duration: 2000
                        },
                    }
                )
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
            {weather ?
                <>
                    {weather && (
                        <div className='app' style={{
                            background: '#212235aa',
                            backgroundImage: `${background}`,
                            backgroundSize: 'cover',
                            height: 'auto',
                            margin: '0'

                        }}>
                            <header >
                                <div className='title-main'>
                                    <h1>Weather App</h1>
                                </div>
                                <Search setQuery={setQuery} />
                                <Toaster />
                            </header>
                            <div className='col content-center items-center' >
                                <div className='w-90 col mbt-1' style={{ height: '100%' }}>
                                    <Conditions weather={weather} />
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1533930851007-59105fa457a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE2OTQ5MjAxMDF8&ixlib=rb-4.0.3&q=80&w=1080')`
                            }}>
                                <div className='col content-center items-center w-100' >
                                    <div className='row title-light'>
                                        <h2>Hourly</h2>
                                    </div>
                                    <div className='row content-center items-center w-100' style={{ height: 'auto' }} /* , border: '1px solid red'}}*/>
                                        <HourlyForecast weather={weather} />
                                    </div>
                                </div>
                                <div className='col content-center items-center w-100' >
                                    <div className='row title-light'>
                                        <h2>3-day Outlook</h2>
                                    </div>
                                    <div className='row content-center items-center w-100' style={{ height: 'auto' }}>
                                        <OutlookForecast weather={weather} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
                : <>
                    <div className='app' style={{
                        background: '#212235aa',
                        backgroundSize: 'cover',
                        height: '100vh',
                        margin: '0'
                    }}>
                        <header >
                            <div className='title-main'>
                                <h1>Weather App</h1>
                            </div>
                            <Search setQuery={setQuery} />
                        </header>
                    </div>
                </>
            }
        </>
    );
}