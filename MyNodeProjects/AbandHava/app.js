const getlocation = require('./until/getLocation');
const getlocationlotlon = require('./until/getlocationlotlon')
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;
const address = argv.address;

getlocation(address, (error, { name, lat, lon, dama } = {}) => {
    if (error) {
        return console.log('Error:', error);
    }
    console.log('City:', name);
    console.log('Latitude:', lat);
    console.log('Longitude:', lon);
    console.log('Temperature:', dama, '°C');

    // اگر خواستی این تابع هم فعال شه، این قسمت رو باز کن
    // getlocationlotlon(lat, lon, dama, (error, name) => {
    //     if (error) {
    //         return console.log('Error:', error);
    //     }
    //     console.log('lat_lon_Data:', name);
    // });
});
