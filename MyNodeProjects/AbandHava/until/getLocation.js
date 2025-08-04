const axios = require('axios');

const getlocation = async (address, callback) => {
  const URL = 'https://api.weatherbit.io/v2.0/current?city=' + encodeURIComponent(address) + '&key=7cb8e35876d44e28a18a02e0fc363b03';

  try {
    const response = await axios.get(URL);
    const location = response.data;

    if (!location || !location.data || location.data.length === 0) {
      callback('Unable to find location.', undefined);
    } else {
      const { city_name, lat, lon, app_temp } = location.data[0];
      callback(undefined, {
        name: city_name,
        lat,
        lon,
        dama: app_temp
      });
    }
  }  catch (error) {
    console.log('Real error:', error.message); // 🔍 اضافه شده برای دیدن متن خطای واقعی
    callback('Unable to connect to weather service.', undefined);
}

};

module.exports = getlocation;
