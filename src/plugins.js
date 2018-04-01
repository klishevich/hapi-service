import sendPhone from './plugins/send-phone-plugin';
import sendSms from './plugins/send-sms-plugin';
import validateJwt from './plugins/validate-jwt-plugin';

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

export default getPlugins;
