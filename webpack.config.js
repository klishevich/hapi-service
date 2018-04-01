const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
  const PROD_BUILD = env.production || false;
  console.log('PROD_BUILD: ', PROD_BUILD); // eslint-disable-line
  return {
    target: 'node',
    entry: './src/server.js',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, '.build')
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PROD_BUILD': PROD_BUILD
      })
    ]
  };
};
