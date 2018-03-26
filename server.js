'use strict';

const Hapi = require('hapi');

const plugins = require('./plugins');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {
    await server.register(plugins);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
