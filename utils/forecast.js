const request = require('postman-request');
const env = require('./environment');

const forecast = (latitude, longitude, callback) => {

	const url = `http://api.weatherstack.com/current?access_key=${env.WEATHERSTACK_API_KEY}&query=${latitude},${longitude}&units=m`;

	request({ url, json: true }, (error, { body } = {}) => {
		if (error) {
			callback('Unable to connect to weather-satck api -Check connectivity', undefined);
		} else if (body.error) {
			callback('Check the location u have provided', undefined);
		} else {
			callback(undefined, `Cureently it is  ${body.current.weather_descriptions[0]}, and temperature is ${body.current.temperature}, and it feelslike ${body.current.feelslike}`);
		}
	})

}

module.exports = forecast;