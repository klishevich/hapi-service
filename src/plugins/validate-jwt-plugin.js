import jwt from 'jsonwebtoken';
import handleError from 'ufr-front-services/lib/error-handler';

const register = async (server, options) => {
  const {
    apiConfig: { method, path }, jwtConfig: { secret }
  } = options;

  const handler = async (request) => {
    try {
      const { payload: { token } } = request;
      const data = jwt.verify(token, secret);
            console.log(['info'], `validate-jwt-plugin. Data: ${JSON.stringify(data)}`); // eslint-disable-line
      return data;
    } catch (e) {
            console.error('!!! error', e); // eslint-disable-line
    }
    return handleError();
  };

  server.route({ method, path, handler });
};

const pluginExport = {
  name: 'validate-jwt',
  version: '1.0.0',
  register
};

export default pluginExport;
