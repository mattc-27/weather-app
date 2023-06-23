import React, { useState, useEffect } from 'react';
import { WiHumidity, WiCloudUp, WiCloudDown } from "react-icons/wi";
import { GiWindTurbine } from "react-icons/gi";
import { BsSunrise, BsSunset } from "react-icons/bs";
import '../style.css';


function Current({ weather }) {

    const [showComponent, setShowComponent] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const delay = 2000; // 2 seconds
        const timeoutId = setTimeout(() => {
            setShowComponent(true);
        }, delay);
        return () => clearTimeout(timeoutId); // Clean up the timeout when the component unmounts
    }, []);

    const handleClick = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    const sidebarOpen = {
        width: show ? "80%" : "100%"
    };

    const date = new Date();


/// Current conditions
    function Conditions() {
        return (
            <>
                <div className="conditionsCenter">
                    <div className="currentIcon">
                        <p>{weather.formatIcon.value}</p>
                    </div>
                    <div className="currentTemp">
                        <p>{weather.temp_f.toFixed()}°F</p>
                    </div>
                </div>
                <div className="currentDesc">
                    <p>{weather.condition.text}</p>
                </div>
            </>
        );
    }

/// Day overview
    function DayForecast() {
        return (
            <div className="dayConditions">
                <div className="tempHighLow">
                    <div className="tempHigh">
                        <p><WiCloudUp size={35} /></p>
                        <p>{weather.forecastday[0].day.maxtemp_f.toFixed()}°F</p>
                    </div>
                    <div className="tempLow">
                        <p><WiCloudDown size={35} /></p>
                        <p>{weather.forecastday[0].day.mintemp_f.toFixed()}°F</p>
                    </div>
                </div>
                <div className="tempHighLow">
                    <div className="tempHigh">
                        <p><GiWindTurbine size={35} /></p>
                        <p>{weather.wind_mph}mph</p>
                    </div>
                    <div className="tempLow">
                        <p><WiHumidity size={35} /></p>
                        <p>{weather.humidity}%</p>
                    </div>
                </div>
                <div className="tempHighLow">
                    <div className="tempHigh">
                        <p><BsSunrise size={35} /></p>
                        <p>{weather.forecastday[0].astro.sunrise}</p>
                    </div>
                    <div className="tempLow">
                        <p><BsSunset size={35} /></p>
                        <p>{weather.forecastday[0].astro.sunset}</p>
                    </div>
                </div>
            </div>
        );
    }

/// Hourly
    function HourlyForecast() {
        return (
            <>
                {weather &&
                    weather.forecastday[0].hour.map(hour => (
                        <div className='hourlyForecast'>
                            <div key={hour.time_epoch} className='hourlyList'>
                                <p>{hour.time}</p>
                                <p>{hour.temp_f}</p>
                                <p>{hour.condition.text}</p>
                            </div>
                        </div>
                    ))
                }
            </>
        );
    }


    return (
        <>
            {showComponent &&
                <>
                    <div className='currentMain' >
                        <div className='conditions' style={sidebarOpen} >
                            <div className='conditionsTop'>
                                {show &
                                    show ?
                                    <div className="currentLocation">
                                        <p>{weather.name}, {weather.region}</p>
                                    </div>
                                    : <div className="currentLocation">
                                        <p>{weather.name}, {weather.region}</p>
                                        <button id="openButton" onClick={handleClick}>Show Hourly Forecast</button>
                                    </div>
                                }
                                <Conditions />
                            </div>
                        </div>
                        {show &&
                            <div className='sidebar'>
                                <div className='sidebarTitle'>
                                    <h3>Hourly</h3>
                                    <button id="sideBarClose"
                                        onClick={handleClose}
                                    >Close
                                    </button>
                                </div>
                                <HourlyForecast />
                            </div>
                        }
                    </div>
                    <div className='conditionsBottom'>
                        <DayForecast />
                    </div>
                </>
            }
        </>
    );
}

export default Current;