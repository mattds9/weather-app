const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var cback = (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
};

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.latlngTemperature(results.lat, results.lng, (errorMessage, results) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(`It is currently: ${results.temperature} degrees Celcius. It feels like: ${results.apparentTemperature} degrees Celcius`);
            }
        });
    }
});
