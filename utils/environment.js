const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	WEATHERSTACK_API_KEY: process.env.WEATHERSTACK_API_KEY,
	MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
}