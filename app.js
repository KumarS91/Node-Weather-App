const yargs = require('yargs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (!location) {
	console.log('Please provide the location to search');
} else {
	geocode(location, (error, { latitude, longitude, place } = {}) => {
		if (error)
			return console.log("Error", error);
		forecast(latitude, longitude, (error, data) => {
			if (error)
				return console.log("Error", error);
			console.log("Location is ", place)
			console.log("Data", data);
		})
	})
}





