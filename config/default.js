const appId = 'ona-ao-ui';
const useMocks = process.env.APP_MOCKS == 1; // eslint-disable-line eqeqeq
const serviceHost = process.env.SERVICE_HOST || process.env.HOST || 'localhost';

module.exports = {
    appId,
    useMocks,
    basePath: '',
    services: {
        getPhoneConfirm: {
            method: 'POST',
            path: '/api/auth/otp/send',
            url: `http://${serviceHost}/ona-pipe-api/getPhoneConfirm`
        },
        checkPhoneConfirm: {
            method: 'POST',
            path: '/api/auth/otp/validate',
            url: `http://${serviceHost}/ona-pipe-api/checkPhoneConfirm`
        }
    }
}
