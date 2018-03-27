const appId = 'ona-ao-ui';
const useMocks = process.env.APP_MOCKS == 1; // eslint-disable-line eqeqeq
const serviceHost = process.env.SERVICE_HOST || process.env.HOST || 'localhost';
const balancerHost = process.env.BALANCER_HOST || serviceHost;

module.exports = {
    appId,
    useMocks,
    basePath: '',
    devtools: true,

    server: {
        balancerHost,
        serviceHost,
        port: 8080,
        proxyClientIpHeader: 'wl-proxy-client-ip',
        customerIdHeader: 'customerid',
        requestTimeout: 60000
    },

    logger: {
        console: {
            level: 'info',
            prettyPrint: true
        },
        logstash: {
            level: 'info',
            prettyPrint: true,
            port: 5959,
            timeout_connect_retries: 15000,
            max_connect_retries: -1
        },
        skipEndpoints: [],
        maskFields: []
    },

    services: {
        sendPhone: {
            method: 'POST',
            path: '/send-phone',
            url: `http://${serviceHost}/ona-pipe-api/getPhoneConfirm`
        },
        sendSms: {
            method: 'POST',
            path: '/send-sms',
            url: `http://${serviceHost}/ona-pipe-api/checkPhoneConfirm`
        }
    }
};
