const confi = require('./config.js');
const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather',
            string: true
        }
})
.help()
.alias('help', 'h')
.argv;

var location = argv.address;
request({url: `https://maps.googleapis.com/maps/api/geocode/json?key=${confi.config.MY_KEY}&address=${location}` , 
json: true
}, (error, response, body) => {
        // console.log(JSON.stringify(body, undefined, 2));
        // console.log(JSON.stringify(response, undefined, 2));
        // console.log(JSON.stringify(error, undefined, 2));
        console.log(body.results[0].formatted_address);
        console.log(body.results[0].geometry.location);
});