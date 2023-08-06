import React, { useState, useEffect } from 'react';
import { WiHumidity, WiCloudUp, WiCloudDown } from "react-icons/wi";
import { GiWindTurbine } from "react-icons/gi";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import HourlyForecast from './HourlyForecast';
import { ConditionsCard } from './ConditionsCard';
import '../style.css';


function Current({ weather }) {

    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        const delay = 2000; // 2 seconds
        const timeoutId = setTimeout(() => {
            setShowComponent(true);
        }, delay);
        return () => clearTimeout(timeoutId); // Clean up the timeout when the component unmounts
    }, []);

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
                <ConditionsCard
                    icon1={<WiCloudUp size={35} />}
                    condition1={`${weather.forecastday[0].day.maxtemp_f.toFixed()}°F`}
                    icon2={<WiCloudDown size={35} />}
                    condition2={`${weather.forecastday[0].day.mintemp_f.toFixed()}°F`}
                />
                <ConditionsCard
                    icon1={<GiWindTurbine size={35} />}
                    condition1={`${weather.wind_mph}mph`}
                    icon2={<WiHumidity size={35} />}
                    condition2={`${weather.humidity}%`}
                />
                <ConditionsCard
                    icon1={<BsSunrise size={35} />}
                    condition1={weather.forecastday[0].astro.sunrise}
                    icon2={<BsSunset size={35} />}
                    condition2={weather.forecastday[0].astro.sunset}
                />
            </div>
        );
    }

    return (
        <>
            {showComponent &&
                <>
                    <div className='conditions'>
                        <div className='conditionsMain' >
                            <div className='conditionsTop'>
                                <div className="currentLocation">
                                    <p>{weather.name}, {weather.region}</p>
                                </div>
                                <Conditions weather={weather} />
                            </div>
                            <div className='conditionsBottom'>
                                <DayForecast weather={weather} />
                            </div>
                            <div className='outlookContainer'>
                                <HourlyForecast weather={weather} />
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Current;


/*   <div className="tempHighLow">
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
                */