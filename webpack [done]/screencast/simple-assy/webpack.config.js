'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    mode: NODE_ENV == 'development' ? 'development' : 'production',
    entry: './home',
    output: {
      filename: '../build.js',
      library: 'home'
    },
    watch: NODE_ENV == 'development', 

    watchOptions: {
      aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'inline-source-map' : false,
    plugins: [
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
        LANG: JSON.stringify('en'),
      }),
    ],

    resolve:{
      modules: ['node_modules'],
      extensions: ['.js']
    },

    resolveLoader: {
      modules: ['node_modules'],
      moduleExtensions: ['-loader'],
      extensions: ['.js']
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel?optional[]=runtime',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
};

if(NODE_ENV == 'production'){
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}