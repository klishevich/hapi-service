const Hapi = require('hapi');
const getPlugins = require('./plugins');
const config = require('../config/default');

const server = Hapi.server({
    port: config.server.port,
    host: 'localhost'
});

const init = async () => {
    const plugins = getPlugins(config);
    await server.register(plugins);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line
};

process.on('unhandledRejection', (err) => {
    console.error(err); // eslint-disable-line
    process.exit(1);
});

init();
