'use strict';

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

config.cache = true;

config.devtool = 'cheap-module-eval-source-map';

config.devServer = {
    compress: true,
    hot: true,
    contentBase: path.resolve(__dirname, '..'),
    publicPath: '/',
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: { // proxy URLs to backend development server
        '/clspa-gateway': 'http://localhost:8080',
    },
};

config.entry = [
    // this isn't normally needed (it's already being imported in index.js),
    // but react-hot-loader breaks in IE11 if babel-polyfill isn't first in the list
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/scripts/index.js')
];

config.output.publicPath = '/';

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    // outputs readable module names ("MyComponent" instead of "153")
    new webpack.NamedModulesPlugin(),
);

module.exports = config;
