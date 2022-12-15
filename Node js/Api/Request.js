const request = require('request');
 
_EXTERNAL_URL = "https://api.openweathermap.org/data/2.5/weather?q=jamshoro&appid=73a5f15e70f49a268b2a9a8b869cdd5d";

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;