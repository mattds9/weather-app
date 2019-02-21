const confi = require('../config.js');
const request = require('request');

var latlngTemperature = (lat, lng, callback) => {
    request({url: `https://api.darksky.net/forecast/${confi.config.DARK_SKY_API_KEY}/${lat},${lng}` , 
    json: true
    }, (error, response, body) => {
            if(!error && response.statusCode === 200){
                callback(undefined, {
                    temperature: celcius(body.currently.temperature),
                    apparentTemperature: celcius(body.currently.apparentTemperature)
                });
            } else {
                error ? callback(`An error occurred ${error}`) : callback(response.statusCode);
            }
    });
};
var celcius = (farenheit) => (farenheit-32)*5.0/9;

module.exports = {
    latlngTemperature
};