const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const base = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals'); // eslint-disable-line import/no-extraneous-dependencies
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(base, {
  target: 'node',
  devtool: '#source-map',
  entry: ['babel-polyfill', './src/entry-server.js'],
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
});
