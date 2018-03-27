const jwt = require('jsonwebtoken');
const serviceRequest = require('ufr-front-services/lib/service-request').default;
const handleError = require('ufr-front-services/lib/error-handler').default;

const register = async (server, options) => {
    const {
        apiConfig, apiConfig: { method, path }, loggerConfig, jwtConfig: { secret, expiresIn }
    } = options;

    const handler = async (request) => {
        try {
            const { payload: { sms: password, ref: reference, permissions } } = request;
            // TODO add babel and use spread operator
            const newRequest = Object.assign({}, request, { payload: { password, reference } });
            const result = await serviceRequest(newRequest, apiConfig, loggerConfig);
            const payload = {
                username: result.phone,
                permissions
            };
            return jwt.sign(payload, secret, { expiresIn });
        } catch (e) {
            console.error('!!! error', e); // eslint-disable-line
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
