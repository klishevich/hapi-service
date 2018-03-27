const serviceRequest = require('ufr-front-services/lib/service-request').default;
const handleError = require('ufr-front-services/lib/error-handler').default;

const register = async (server, options) => {
    const { apiConfig, apiConfig: { method, path }, loggerConfig } = options;

    const handler = async (request) => {
        try {
            return await serviceRequest(request, apiConfig, loggerConfig);
        } catch (e) {
            console.error('!!! error', e); // eslint-disable-line
        }
        return handleError();
    };

    server.route({ method, path, handler });
};

module.exports = {
    name: 'send-phone',
    version: '1.0.0',
    register
};
