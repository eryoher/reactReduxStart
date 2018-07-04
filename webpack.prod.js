const webpack = require('webpack');
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].bundle.js',
        // publicPath: publicPath,
        sourceMapFilename: '[name].[chunkhash].map'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            xhtml: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false, //prod
            mangle: { screw_ie8 : true }, //prod
            compress: { screw_ie8: true, drop_console: true }, //prod
            comments: false //prod
        })
    ]
});
