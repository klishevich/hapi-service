const sendPhone = require('./plugins/send-phone-plugin');
const sendSms = require('./plugins/send-sms-plugin');
const config = require('./config/default');

const loggerConfig = {
    devtools: config.devtools,
    appId: config.appId,
    server: config.server,
    logger: config.logger
};

module.exports = [
    {
        plugin: sendPhone,
        options: {
            apiConfig: config.services.sendPhone,
            loggerConfig
        }
    },
    {
        plugin: sendSms,
        options: {
            apiConfig: config.services.sendSms,
            loggerConfig
        }
    }
];
