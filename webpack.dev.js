// to partially mock a production environment this can be called with `--node-env production`
const mode = process.env.NODE_ENV || 'development';
const env = `.env${mode === 'development' ? '.development' : ''}`;
require('dotenv').config({ path: `./${env}` });

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const PACKAGE = require('./package.json');

const { webpackConfig } = PACKAGE;
const { publicPath } = webpackConfig;

if (!process.env.PUBLIC_URL) {
  throw new Error(`❌ Missing ${env} file. See .env.sample for an example.`);
}

module.exports = merge(common, {
  mode,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.resolve(__dirname, 'src')],
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    publicPath,
    historyApiFallback: {
      rewrites: [{ from: '/', to: publicPath }],
    },
    hot: true,
    port: 8443,
    public: process.env.PUBLIC_URL.replace(/^https?:\/{2}([^\/]*).*/, '$1'),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        enforce: 'pre',
        use: {
          loader: 'source-map-loader',
        },
        exclude: [/node_modules\/@apollo/],
      },
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildStart: ['yarn build-deps'],
      blocking: true,
      parallel: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
});
