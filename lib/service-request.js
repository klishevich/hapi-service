const Hoek = require('hoek');
const req = require('./request');

module.exports = function (userRequest, apiConfig, loggerConfig, qs) {
    const { method } = apiConfig;
    const url = Hoek.reachTemplate(userRequest.params, apiConfig.url);

    const reqOptions = {
        method,
        url,
        qs: {
            ...(qs || {}),
            ...(userRequest.query || {})
        }
    };

    if (userRequest.payload) {
        reqOptions.body = userRequest.payload;
    }

    return req(userRequest, reqOptions, loggerConfig)
        .then(response => response.body || []);
}
