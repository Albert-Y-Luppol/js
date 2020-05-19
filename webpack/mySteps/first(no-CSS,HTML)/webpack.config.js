// const fs = require('fs');
const path = require('path');
// const webpack = require('webpack');


module.exports = {
    entry: [
        './src/js/entry.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundler.js'
    },
    
    module: {
        rules: [

            //js

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']  
                        },
                    },
                ]
            },
        ]
    },
};
