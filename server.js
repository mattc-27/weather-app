// Setup express
const express = require('express');

// Import middleware
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');

// Create express app
const app = express();

//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Implement middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const weatherRoutes = require('./routes/weather');
app.use(`/api`, weatherRoutes);

// Weather api
/*
app.get(`/api/weather/:searchUrl`, async (req, res) => {
    const { searchUrl } = req.params;
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${searchUrl}`)
      const data = await response.json();
      res.send(data)
      console.log(data)
    } catch (error) {
      console.error(error.message)
    }
});
*/

// Setup default port
app.set('port', process.env.PORT || 5000);

// Start express app
app.listen(app.get('port'), () => {
    console.log(`Server running at port: ${app.get('port')}`)
});