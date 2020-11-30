'use strict';

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // added by kelvin 13/06/17
var config = require('./webpack.config');

config.devtool = 'source-map';

config.output.filename = '[name]-[chunkhash].js';

config.plugins.push(
    new CopyWebpackPlugin([
        // root path is ../build/src/scripts (see config.output.path)
        { from: path.resolve(__dirname, '../index.build.ejs'), to: '../../index.html' },
        { from: path.resolve(__dirname, '../ping.html'), to: '../../ping.html' },
        { from: path.resolve(__dirname, '../src/styles/layout/fonts'), to: '../styles/layout/fonts' },
        { from: path.resolve(__dirname, '../src/styles/hcImages'), to: '../styles/hcImages' },
        { from: path.resolve(__dirname, '../src/styles/plugins'), to: '../styles/plugins' },
        { from: path.resolve(__dirname, '../src/styles/layout/js'), to: '../styles/layout/js' },
        { from: path.resolve(__dirname, '../src/styles/layout/css'), to: '../styles/layout/css' },
        { from: path.resolve(__dirname, '../src/styles/layout/images/users'), to: '../styles/layout/images/users' },
        { from: path.resolve(__dirname, '../src/styles/plugins'), to: '../styles/plugins' },
        { from: path.resolve(__dirname, '../src/images'), to: '../images/' },

        // others needed
        { from: path.resolve(__dirname, '../src/styles/others/slick'), to: '../styles/others/slick' }
    ]),
    /*
    * Used to generate index.html containing generated hashed bundle.js
    * added by kelvin 13/06/17
    */
    new HtmlWebpackPlugin({
        filename: '../../index.html',
        template: 'index.build.ejs',
        inject: false
    }),

    /*
    * Used to merge chunks
    * added by kelvin 13/06/17
    */
    new webpack.optimize.AggressiveMergingPlugin()    
);

module.exports = config;
