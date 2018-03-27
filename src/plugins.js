const sendPhone = require('./plugins/send-phone-plugin');
const sendSms = require('./plugins/send-sms-plugin');
const validateJwt = require('./plugins/validate-jwt-plugin');

const getPlugins = (config) => {
    const loggerConfig = {
        appId: config.appId,
        devtools: config.devtools,
        server: config.server,
        logger: config.logger
    };

    return [
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
                loggerConfig,
                jwtConfig: config.jwt
            }
        },
        {
            plugin: validateJwt,
            options: {
                apiConfig: config.services.validateJwt,
                jwtConfig: config.jwt
            }
        }
    ];
};

module.exports = getPlugins;
