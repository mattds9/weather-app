const confi = require('./config.js');
const request = require('request');

request({url: 'https://maps.googleapis.com/maps/api/geocode/json?key=' + confi.config.MY_KEY +'&address=%221301%20lombard%20street%20philadelphia%22' , 
json: true
}, (error, response, body) => {
        console.log(JSON.stringify(body, undefined, 4));
});