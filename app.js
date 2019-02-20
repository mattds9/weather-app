const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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

geocode.geocodeAddress(argv.address);
