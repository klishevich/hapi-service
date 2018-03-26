const errorHandler = require('./error-handler');

module.exports = function apiPluginFactory(pluginName, serviceHandler, resultHandler) {
    const register = function (server, options) {
        const { apiConfig, loggerConfig } = options;
        const handler = async (request, reply) => {
            server.log(['info'], `'${pluginName}' handle request`);

            try {
                let result = await serviceHandler(request, apiConfig, loggerConfig);
                if (resultHandler) {
                    resultHandler(reply, result);
                } else {
                    reply(result);
                }
            } catch (e) {
                reply(errorHandler(e));
            }
        };

        console.log('options', options);

        const { method, path } = apiConfig;

        server.route({ method, path, config: { auth: options.auth }, handler });
    };

    return { register, name: pluginName };
}
