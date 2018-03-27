const serviceRequest = require('ufr-front-services/lib/service-request').default;
const handleError = require('ufr-front-services/lib/error-handler').default;

const register = async (server, options) => {
    const { apiConfig, apiConfig: { method, path }, loggerConfig } = options;
    // console.log('options', options);

    const handler = async (request) => {
        console.log(1, request.headers);
        console.log(2, request.payload);
        try {
            const result = await serviceRequest(request, apiConfig, loggerConfig);
            console.log('result', result);
            // throw new Error('sdfsdfsd');
            return result;
        } catch (e) {
            console.error('error ....', e.body);
            // console.error(['error'], `send-phone-plugin. Error: ${e}`);
            // return handleError(e);
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
