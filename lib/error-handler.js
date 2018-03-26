const Boom = require('boom');

function getError(e, message) {
    let errorMessage;
    if (e && e.message) {
        errorMessage = e.message;
    } else {
        errorMessage = message;
    }
    return new Error(errorMessage);
}

module.exports = function handleError(e, code, name, message, statusCode) {
    let errorPayload = e && e.body && e.body.error;
    if (errorPayload) {
        if (!code) {
            code = errorPayload.code;
        }
        if (!message) {
            message = errorPayload.message;
        }
    }

    let error = getError(e, message);

    let err = Boom.wrap(error, statusCode || 400);
    if (name) {
        err.output.payload.name = name;
    }
    if (code) {
        err.output.payload.code = code;
    }

    return err;
}
