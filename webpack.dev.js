const webpack = require('webpack');
const path = require('path');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    // debug: true,

    /**
     * Developer tool to enhance debugging.
     *
     * The 'source-map' settings is meant to be used in production only. It
     * splits the source map in a separate file and it is slow to compute.
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'source-map', //'eval-source-map'

    devServer: {
        port: 8083,
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        inline: true,
        host: 'localhost',
        https: false
    }
});
