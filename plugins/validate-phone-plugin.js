'use strict';

// const serviceRequest = require('../lib/service-request');

module.exports = {
    name: 'validate-phone',
    version: '1.0.0',
    register: async function (server, options) {
        console.log('options', options);

        server.route({
            method: 'POST',
            path: '/validate-phone',
            handler: (request, h) => {
                return { jwt: 'wqeqwee.qweqweqwe.qweqweqw'};
            }
        });
    }
};
