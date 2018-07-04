const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']},
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        moduleExtensions: ['-loader']
    },

    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'API_URL': JSON.stringify(process.env.API_URL)
          }
        })
    ]
};
