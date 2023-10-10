import React from 'react';
import { WiHumidity, WiCloudUp, WiCloudDown } from "react-icons/wi";
import { GiWindTurbine } from "react-icons/gi";
import '../style.css';

/// Current conditions
function Conditions({ weather }) {
    return (
        <>
            <div className='col content-even container-style ' style={{ flexBasis: '500px' }}>
                <div className='row content-center items-center w-100 text-lg text-center'>
                    <p>{weather.name}, {weather.region}</p>
                </div>
                <div className='col content-center items-center'>
                    <div className='row content-center items-center text-sm mbt-2'>
                        <div className="text-center">
                            <p>{weather.formatIcon.value}</p>
                        </div>
                        <div className='text-center text-md'>
                            <p>{weather.temp_f.toFixed()}°F</p>
                        </div>

                    </div>
                    <div className='text-center text-xmd mbt-2'>
                        <p>{weather.condition.text}</p>
                    </div>
                </div>
            </div>
            <div className='col content-center items-center container-style mbt-2' style={{ flexBasis: '200px' }}>
                <DayForecast weather={weather} />
            </div>
        </>
    );
}

/// Day overview
function DayForecast({ weather }) {
    return (
        <div className='conditions-card'>
            <div className='card-item'>
                <p><GiWindTurbine size={45} color={'#fff'} /></p>
                <p >{weather.wind_mph}</p>
            </div>
            <div className='card-item'>
                <p><WiCloudUp size={45} color={'#fff'} /></p>
                <p >{weather.forecastday[0].day.maxtemp_f.toFixed()}°F</p>
            </div>
            <div className='card-item'>
                <p><WiCloudDown size={45} color={'#fff'} /></p>
                <p >{weather.forecastday[0].day.mintemp_f.toFixed()}°F</p>
            </div>
            <div className='card-item'>
                <p><WiHumidity size={45} color={'#fff'} /></p>
                <p >{weather.humidity}%</p>
            </div>
        </div>
    );
}

export { Conditions, DayForecast }
