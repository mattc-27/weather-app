import React, { useState, useEffect } from 'react'
import WeatherIcons from '../WeatherIcons';
import { BsSunrise, BsSunset } from 'react-icons/bs'

export default function HourlyForecast({ weather }) {

    const [visible, setVisible] = useState(false);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 780) {
                setVisible(false);
            } else if (window.innerWidth < 780) {
                setVisible(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const getIcon = (code) => {
        const iconData = WeatherIcons.find(({ code: iconCode }) => iconCode === code);
        return iconData ? iconData.forecast : null;
    };

    return (
        <div className='col contents-center items-center' style={{ width: '98%' }}>
            {visible ?
                <MobileTable getIcon={getIcon} weather={weather} />
                :
                <StandardTable getIcon={getIcon} weather={weather} />
            }
        </div>
    );
}

function StandardTable({ weather, getIcon }) {

    return (
        <div className='tableWrapper row content-center text-sm'>
            <div className="sunTimes" id='sunrise'>
                <div className="sun">
                    <p>{<BsSunrise size={35} />}</p>
                    <p>{weather.forecastday[0].astro.sunrise}</p>
                </div>
            </div>
            <table className=''>
                <tbody >
                    <tr >
                        {weather.forecastday[0].hour.filter((_, index) => index % 3 === 0).map(hour => (

                            <td className='text-center' key={hour.time}>{getIcon(hour.condition.code)}</td>
                        ))}
                    </tr>
                    <tr >
                        {weather.forecastday[0].hour.filter((_, index) => index % 3 === 0).map(hour => (
                            <td className='text-center' key={hour.time}>{hour.temp_f}</td>
                        ))}
                    </tr>
                    <tr >
                        {weather.forecastday[0].hour.filter((_, index) => index % 3 === 0).map(hour => (

                            <th className='text-center' key={hour.time}>{hour.time.split(' ')[1]}</th>
                        ))}
                    </tr>
                </tbody>
            </table>
            <div className="sunTimes" id='sunset'>
                <div className="sun" >
                    <p>{<BsSunset size={35} />}</p>
                    <p>{weather.forecastday[0].astro.sunset}</p>
                </div>
            </div>
        </div>
    );
}

function MobileTable({ weather, getIcon }) {

    const [startColumn, setStartColumn] = useState(0);

    const handlePrevClick = () => {
        if (startColumn > 0) {
            setStartColumn(startColumn - 1);
        }
    }
    const handleNextClick = () => {
        if (startColumn < weather.forecastday[0].hour.length - 3) {
            setStartColumn(startColumn + 1);
        }
    }

    return (
        <>
            <div className='tableWrapper row content-center text-sm'>
                <div className="sunTimes" id='sunrise'>
                    <div className="sun">
                        <p>{<BsSunrise size={35} />}</p>
                        <p>{weather.forecastday[0].astro.sunrise}</p>
                    </div>
                </div>
                <table className=''>
                    <tbody >
                        <tr >
                            {weather.forecastday[0].hour.slice(startColumn, startColumn + 3).map(hour => (

                                <td className='text-center' key={hour.time}>{getIcon(hour.condition.code)}</td>
                            ))}
                        </tr>
                        <tr >
                            {weather.forecastday[0].hour.slice(startColumn, startColumn + 3).map(hour => (
                                <td className='text-center' key={hour.time}>{hour.temp_f}</td>
                            ))}
                        </tr>
                        <tr >
                            {weather.forecastday[0].hour.slice(startColumn, startColumn + 3).map(hour => (

                                <th className='text-center' key={hour.time}>{hour.time.split(' ')[1]}</th>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <div className="sunTimes" id='sunset'>
                    <div className="sun" >
                        <p>{<BsSunset size={35} />}</p>
                        <p>{weather.forecastday[0].astro.sunset}</p>
                    </div>
                </div>
            </div>
            <div className='row content-center items-center w-100' style={{/* border: '1px solid white'*/ }}>
                <div className='row content-around items-center hourlyButtons w-60'>
                    <button id='prevBtn' onClick={handlePrevClick}>Back</button>
                    <button id='nextBtn' onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </>
    );
}