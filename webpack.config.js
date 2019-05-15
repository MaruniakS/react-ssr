const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const common = {
  rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
};

const plugins = [];

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: common,
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    ...plugins
  ],
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: common,
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
    ...plugins,
  ],
};

module.exports = [clientConfig, serverConfig];