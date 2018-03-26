const requestAgent = require('request');

module.exports = function request(userRequest, inputOptions) {
    return new Promise((resolve, reject) => {
        let options = Object.assign({}, {
            // timeout: loggerConfig.server.requestTimeout || 30000,
            json: true,
            time: true
        }, inputOptions);

        requestAgent(options, (error, response) => {
            let { statusCode, body, elapsedTime } = response || {};
            if (error) {
                reject(error);
            } else if ((statusCode / 100) !== 2) {
                reject(response);
            } else {
                resolve(response);
            }
        });
    });
}
