const serviceRequest = require('ufr-front-services/lib/service-request').default;
const handleError = require('ufr-front-services/lib/error-handler').default;

const register = async (server, options) => {
    const { apiConfig, apiConfig: { method, path }, loggerConfig } = options;

    const handler = async (request) => {
        try {
            console.log(5, request.headers);
            console.log(6, request.payload);
            const { payload: { sms: password, ref: reference } } = request;
            // TODO add babel and use spread operator
            const newRequest = Object.assign({}, request, { payload: { password, reference } });
            const result = await serviceRequest(newRequest, apiConfig, loggerConfig);
            console.log('result', result);
            return result;
        } catch (e) {
            console.error('error ....', e.body);
        }
        return handleError();
    };

    server.route({ method, path, handler });
};

module.exports = {
    name: 'send-sms',
    version: '1.0.0',
    register
};
