import React from 'react';
import { WiFog, WiSleet, WiDayThunderstorm, WiDaySnowThunderstorm, WiSnowWind, WiDaySunny, WiDayCloudy, WiRain } from "react-icons/wi";

const WeatherIcons = [
	{
		code: 1000,
		text: "Sunny",
		value: <WiDaySunny size={130} style={{ color: "white" }} />,
		forecast: <WiDaySunny size={45} style={{ color: "white" }} />,
		daily: <WiDaySunny size={80} style={{ color: "white" }} />
	},
	{
		code: 1003,
		text: "Partly cloudy",
		value: <WiDayCloudy size={130} style={{ color: "white" }} />,
		forecast: <WiDayCloudy size={45} style={{ color: "white" }} />,
		daily: <WiDayCloudy size={80} style={{ color: "white" }} />

	},
	{
		code: 1006,
		text: "Cloudy",
		value: <WiDaySunny size={230} style={{ color: "white" }} />,
		forecast: <WiDaySunny size={45} style={{ color: "white" }} />,
		daily: <WiDaySunny size={80} style={{ color: "white" }} />
	},
	{
		code: 1009,
		text: "Overcast",
		value: <WiFog size={130} style={{ color: "white" }} />,
		forecast: <WiFog size={45} style={{ color: "white" }} />,
		daily: <WiFog size={80} style={{ color: "white" }} />
	},
	{
		code: 1030,
		text: "Mist",
		value: <WiFog size={130} style={{ color: "white" }} />,
		forecast: <WiFog size={45} style={{ color: "white" }} />,
		daily: <WiFog size={80} style={{ color: "white" }} />
	},
	{
		code: 1063,
		text: "Patchy rain possible",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1066,
		text: "Patchy snow possible",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},

	{
		code: 1069,
		text: "Patchy sleet possible",
		value: <WiSleet size={130} style={{ color: "white" }} />,
		forecast: <WiSleet size={45} style={{ color: "white" }} />,
		daily: <WiSleet size={80} style={{ color: "white" }} />
	},
	{
		code: 1072,
		text: "Patchy freezing drizzle possible",
		value: <WiSleet size={130} style={{ color: "white" }} />,
		forecast: <WiSleet size={45} style={{ color: "white" }} />,
		daily: <WiSleet size={80} style={{ color: "white" }} />
	},
	{
		code: 1087,
		text: "Thundery outbreaks possible",
		value: <WiDayThunderstorm size={130} style={{ color: "white" }} />,
		forecast: <WiDayThunderstorm size={45} style={{ color: "white" }} />,
		daily:  <WiDayThunderstorm size={80} style={{ color: "white" }} />
	},
	{
		code: 1114,
		text: "Blowing snow",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1117,
		text: "Blizzard",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1135,
		text: "Fog",
		value: <WiFog size={130} style={{ color: "white" }} />,
		forecast: <WiFog size={45} style={{ color: "white" }} />,
		daily: <WiFog size={80} style={{ color: "white" }} />
	},
	{
		code: 1147,
		text: "Freezing fog",
		value: <WiFog size={130} style={{ color: "white" }} />,
		forecast: <WiFog size={45} style={{ color: "white" }} />,
		daily: <WiFog size={80} style={{ color: "white" }} />
	},
	{
		code: 1130,
		text: "Patchy light drizzle",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1153,
		text: "Light drizzle",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1168,
		text: "Freezing drizzle",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1171,
		text: "Heaving freezing drizzle",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1180,
		text: "Patchy light rain",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1183,
		text: "Light rain",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1186,
		text: "Moderate rain at times",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1189,
		text: "Moderate rain",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1192,
		text: "Heavy rain at times",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1195,
		text: "Heavy rain",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1198,
		text: "Light freezing rain",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1201,
		text: "Moderate or heavy freezing rain",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1204,
		text: "Light sleet",
		value: <WiSleet size={130} style={{ color: "white" }} />,
		forecast: <WiSleet size={45} style={{ color: "white" }} />,
		daily: <WiSleet size={80} style={{ color: "white" }} />

	},
	{
		code: 1207,
		text: "Moderate or heavy sleet",
		value: <WiSleet size={130} style={{ color: "white" }} />,
		forecast: <WiSleet size={45} style={{ color: "white" }} />,
		daily: <WiSleet size={80} style={{ color: "white" }} />

	},
	{
		code: 1210,
		text: "Patchy light snow",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />

	},
	{
		code: 1213,
		text: "Light snow",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1216,
		text: "Patchy moderate snow",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1219,
		text: "Moderate snow",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1222,
		text: "Patchy heavy snow",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1225,
		text: "Heavy snow",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1237,
		text: "Ice pellets",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1240,
		text: "Light rain shower",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1243,
		text: "Moderate or heavy rain shower",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1246,
		text: "Torrential rain shower",
		value: <WiRain size={130} style={{ color: "white" }} />,
		forecast: <WiRain size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1249,
		text: "Light sleet showers",
		value: <WiSleet size={130} style={{ color: "white" }} />,
		forecast: <WiSleet size={45} style={{ color: "white" }} />,
		daily: <WiSleet size={80} style={{ color: "white" }} />
	},
	{
		code: 1252,
		text: "Moderate or heavy sleet showers",
		value: <WiSleet size={130} style={{ color: "white" }} />,
		forecast: <WiSleet size={45} style={{ color: "white" }} />,
		daily: <WiSleet size={80} style={{ color: "white" }} />
	},
	{
		code: 1255,
		text: "Light snow showers",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1258,
		text: "Moderate or heavy snow showers",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1261,
		text: "Light showers of ice pellets",
		value: <WiSleet size={130} style={{ color: "white" }} />,
		forecast: <WiSleet size={45} style={{ color: "white" }} />,
		daily: <WiRain size={80} style={{ color: "white" }} />
	},
	{
		code: 1264,
		text: "Moderate or heavy showers of ice pellets",
		value: <WiSnowWind size={130} style={{ color: "white" }} />,
		forecast: <WiSnowWind size={45} style={{ color: "white" }} />,
		daily: <WiSnowWind size={80} style={{ color: "white" }} />
	},
	{
		code: 1273,
		text: "Patchy light rain with thunder",
		value: <WiDayThunderstorm size={130} style={{ color: "white" }} />,
		forecast: <WiDayThunderstorm size={45} style={{ color: "white" }} />,
		daily: <WiDayThunderstorm size={80} style={{ color: "white" }} />
	},
	{
		code: 1276,
		text: "Moderate or heavy rain with thunder",
		value: <WiDayThunderstorm size={130} style={{ color: "white" }} />,
		forecast: <WiDayThunderstorm size={45} style={{ color: "white" }} />,
		daily: <WiDayThunderstorm size={80} style={{ color: "white" }} />
	},
	{
		code: 1279,
		text: "Patchy light snow with thunder",
		value: <WiDaySnowThunderstorm size={130} style={{ color: "white" }} />,
		forecast: <WiDaySnowThunderstorm size={45} style={{ color: "white" }} />,
		daily: <WiDaySnowThunderstorm size={80} style={{ color: "white" }} />
	},
	{
		code: 1282,
		text: "Moderate or heavy snow with thunder",
		value: <WiDaySnowThunderstorm size={130} style={{ color: "white" }} />,
		forecast: <WiDaySnowThunderstorm size={45} style={{ color: "white" }} />,
		daily: <WiDaySnowThunderstorm size={80} style={{ color: "white" }} />
	}
];

export default WeatherIcons;