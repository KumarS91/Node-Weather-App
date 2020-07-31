const request = require('postman-request');
const env = require('./environment');

const geocode = (place, callback) => {

	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=${env.MAPBOX_API_KEY}`

	request({ url, json: true }, (error, { body } = {}) => {
		if (error) {
			callback('Unable to connect to MapBox api-Check connectivity', undefined);
		} else if (!body.features || body.features.length === 0) {
			callback('Please provide a valid place to get the co-ordinates for the particular location', undefined)
		} else {
			callback(undefined, { place: body.features[0].place_name, latitude: body.features[0].center[1], longitude: body.features[0].center[0] })
		}
	})

}


module.exports = geocode;
