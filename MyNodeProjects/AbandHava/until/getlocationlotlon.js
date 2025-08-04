const axios = require('axios');
const getlocationlotlon = async (lat, lon,dama,callback) => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=3cb07f066acc459e98864439250206&q=${lat},${lon}`;

    try {
        const response = await axios.get(URL);
        const location = response.data.location;
         const current = response.data.current

        if (!location) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, {
                name: location.name,
                lat: location.lat,
                lon: location.lon,
                dama:current.temp_c
            });
        }
    } catch (error) {
        callback('Unable to connect to weather service.', undefined);
    }
};
module.exports = getlocationlotlon;