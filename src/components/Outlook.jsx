import React, { useState, useEffect } from 'react'
import WeatherIcons from '../WeatherIcons';
import '../style.css'

export default function OutlookForecast({ weather }) {

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
        return iconData ? iconData.daily : null;
    };

    return (
        <div className='col contents-center items-center' style={{ width: '98%' }}>
            <OutLook weather={weather} getIcon={getIcon} />
        </div>
    );
}

function OutLook({ weather, getIcon }) {

    const styles = {
        container: {
            width: '98%',
            overflowX: 'auto',
            margin: '1% 0',
            display: 'flex',
            flexDirection: 'row'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            width: ' 30%',
            height: 'auto',
            /* border: '1px solid #fafafa', */
            margin: '1%',
            minWidth: '0',
            content: {
                width: 'auto',
                alignSelf: 'center',
                fontFamily: 'Lato',
                color: '#fafafa',
                p: {
                    fontWeight: '300',
                    fontSize: '1.75em'
                },
            },
            date: {
                fontWeight: '300',
                fontSize: '1.75em',
                fontFamily: 'Lato',
                color: '#fafafa',
                width: 'auto',
                alignSelf: 'center'
            }
        }
    }

    return (
        <div style={styles.container}>
            {weather.forecastday.map((day, index) => (
                <div style={styles.card} key={index} className='bg-fade bg-style'>
                    <div style={styles.card.content}>
                        <p style={styles.card.content.p}>{day.day.condition.text}</p>
                        <p style={styles.card.content.p}>{day.day.maxtemp_f}°F</p>
                    </div>
                    <div style={styles.card.content}>
                        <span>{getIcon(day.day.condition.code)}</span>
                    </div>
                    <div style={styles.card.date}>
                        <p>{day.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}