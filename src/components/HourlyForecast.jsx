import React, { useState, useEffect } from 'react'
import WeatherIcons from '../WeatherIcons';

export default function HourlyForecast({ weather }) {

    const getIcon = (code) => {
        const iconData = WeatherIcons.find(({ code: iconCode }) => iconCode === code);
        return iconData ? iconData.forecast : null;
    };

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        {weather.forecastday[0].hour.filter((_, index) => index % 3 === 0).map(hour => (

                            <td key={hour.time}>{getIcon(hour.condition.code)}</td>
                        ))}
                    </tr>
                    <tr>
                        {weather.forecastday[0].hour.filter((_, index) => index % 3 === 0).map(hour => (
                            <td key={hour.time}>{hour.temp_f}</td>
                        ))}
                    </tr>
                    <tr>
                        {weather.forecastday[0].hour.filter((_, index) => index % 3 === 0).map(hour => (

                            <th key={hour.time}>{hour.time.split(' ')[1]}</th>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    );
}