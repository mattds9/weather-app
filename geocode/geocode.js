const confi = require('../config.js');
const request = require('request');

var geocodeAddress = (address, callback) => {
    request({url: `https://maps.googleapis.com/maps/api/geocode/json?key=${confi.config.GOOGLE_MAPS_API_KEY}&address=${address}` , 
    json: true
    }, (error, response, body) => {
            // console.log(JSON.stringify(body, undefined, 2));
            // console.log(JSON.stringify(response, undefined, 2));
            // console.log(JSON.stringify(error, undefined, 2));
            if(!error && body.status === 'OK'){
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
            } else {
                error ? callback(`An error occurred ${error}`) : callback(body.status);
            }
    });
};

module.exports = {
    geocodeAddress
};