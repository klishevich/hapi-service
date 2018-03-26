'use strict';

// const serviceRequest = require('../lib/service-request');

module.exports = {
    name: 'send-phone',
    version: '1.0.0',
    register: async function (server, options) {
        console.log('options', options);

        server.route({
            method: 'POST',
            path: '/send-phone',
            handler: (request, h) => {
                return { ref: 'PC123456'};
            }
        });

        // etc ...
        // await someAsyncMethods();
    }
};
