const path = require('path');
const webpack = require('webpack');

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    mode: 'development',
    entry: {
        myfile: './src/engine.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js', // js/1.js
        publicPath: '/assets/', //https: server.com/assets/js/1.js
        // libraryTarget: 'umd',
        // library: 'myfirstlibrary'
    },

    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, 'dist'),
        // writeToDisk: true,
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
}