const sendPhone = require('./plugins/send-phone-plugin');
const validatePhone = require('./plugins/validate-phone-plugin');
const config = require('./config/default');

module.exports = [
    {
        plugin: sendPhone,
        options: {
            apiConfig: config.services.getPhoneConfirm
        }
    },
    {
        plugin: validatePhone,
        options: {
            apiConfig: config.services.checkPhoneConfirm
        }
    }
]
