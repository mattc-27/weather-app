import React from 'react';
import { WiFog, WiSleet, WiDayThunderstorm, WiDaySnowThunderstorm, WiSnowWind, WiDaySunny, WiDayCloudy, WiRain } from "react-icons/wi";

const colorVariations = [
	{value: '#fff', size: 130},
	{forecast: '#1d1c28'},
	{daily: '#1d1c28'}
]
const WeatherIcons = [
	{
		code: 1000,
		text: "Sunny",
		value: <WiDaySunny size={130} style={{ color: '#fff'}} />,
		forecast: <WiDaySunny size={100} style={{ color: "#1d1c28", margin: '0.5%' }} />,
		daily: <WiDaySunny size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1003,
		text: "Partly cloudy",
		value: <WiDayCloudy size={130}  />,
		forecast: <WiDayCloudy size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiDayCloudy size={130} style={{ color: "#1d1c28" }} />

	},
	{
		code: 1006,
		text: "Cloudy",
		value: <WiDaySunny size={200} style={{ color: "#1d1c28" }} />,
		forecast: <WiDaySunny size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiDaySunny size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1009,
		text: "Overcast",
		value: <WiFog size={200} style={{ color: "#1d1c28" }} />,
		forecast: <WiFog size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiFog size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1030,
		text: "Mist",
		value: <WiFog size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiFog size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiFog size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1063,
		text: "Patchy rain possible",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1066,
		text: "Patchy snow possible",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},

	{
		code: 1069,
		text: "Patchy sleet possible",
		value: <WiSleet size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSleet size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSleet size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1072,
		text: "Patchy freezing drizzle possible",
		value: <WiSleet size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSleet size={131000} style={{ color: "#1d1c28" }} />,
		daily: <WiSleet size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1087,
		text: "Thundery outbreaks possible",
		value: <WiDayThunderstorm size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiDayThunderstorm size={100} style={{ color: "#1d1c28" }} />,
		daily:  <WiDayThunderstorm size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1114,
		text: "Blowing snow",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1117,
		text: "Blizzard",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1135,
		text: "Fog",
		value: <WiFog size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiFog size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiFog size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1147,
		text: "Freezing fog",
		value: <WiFog size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiFog size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiFog size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1130,
		text: "Patchy light drizzle",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1153,
		text: "Light drizzle",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1168,
		text: "Freezing drizzle",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1171,
		text: "Heaving freezing drizzle",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 11130,
		text: "Patchy light rain",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1183,
		text: "Light rain",
		value: <WiRain size={130}  />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1186,
		text: "Moderate rain at times",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1189,
		text: "Moderate rain",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1192,
		text: "Heavy rain at times",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c2825" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1195,
		text: "Heavy rain",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c2825" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1198,
		text: "Light freezing rain",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1301,
		text: "Moderate or heavy freezing rain",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1304,
		text: "Light sleet",
		value: <WiSleet size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSleet size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSleet size={130} style={{ color: "#1d1c28" }} />

	},
	{
		code: 1307,
		text: "Moderate or heavy sleet",
		value: <WiSleet size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSleet size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSleet size={130} style={{ color: "#1d1c28" }} />

	},
	{
		code: 1210,
		text: "Patchy light snow",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />

	},
	{
		code: 1213,
		text: "Light snow",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1216,
		text: "Patchy moderate snow",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1219,
		text: "Moderate snow",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1222,
		text: "Patchy heavy snow",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1225,
		text: "Heavy snow",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1237,
		text: "Ice pellets",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1240,
		text: "Light rain shower",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1243,
		text: "Moderate or heavy rain shower",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1246,
		text: "Torrential rain shower",
		value: <WiRain size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiRain size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1249,
		text: "Light sleet showers",
		value: <WiSleet size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSleet size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSleet size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1252,
		text: "Moderate or heavy sleet showers",
		value: <WiSleet size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSleet size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSleet size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1255,
		text: "Light snow showers",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1258,
		text: "Moderate or heavy snow showers",
		value: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1261,
		text: "Light showers of ice pellets",
		value: <WiSleet size={130} style={{ color: "#fff" }} />,
		forecast: <WiSleet size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiRain size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1264,
		text: "Moderate or heavy showers of ice pellets",
		value: <WiSnowWind size={130} style={{ color: "#fff" }} />,
		forecast: <WiSnowWind size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiSnowWind size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1273,
		text: "Patchy light rain with thunder",
		value: <WiDayThunderstorm size={130} style={{ color: "#fff" }} />,
		forecast: <WiDayThunderstorm size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiDayThunderstorm size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1276,
		text: "Moderate or heavy rain with thunder",
		value: <WiDayThunderstorm size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiDayThunderstorm size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiDayThunderstorm size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1279,
		text: "Patchy light snow with thunder",
		value: <WiDaySnowThunderstorm size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiDaySnowThunderstorm size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiDaySnowThunderstorm size={130} style={{ color: "#1d1c28" }} />
	},
	{
		code: 1282,
		text: "Moderate or heavy snow with thunder",
		value: <WiDaySnowThunderstorm size={130} style={{ color: "#1d1c28" }} />,
		forecast: <WiDaySnowThunderstorm size={100} style={{ color: "#1d1c28" }} />,
		daily: <WiDaySnowThunderstorm size={130} style={{ color: "#1d1c28" }} />
	}
];

export { WeatherIcons };