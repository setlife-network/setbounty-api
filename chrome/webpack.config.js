const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const paths = require('./config/paths')

module.exports = {
    devtool: 'source-map',
    entry: {
        background: './src/background/index.js',
        content: './src/content/index.js'
    },
            
    output: {
        // path: paths.assets,
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: paths.assets
    },
    devServer: {
        contentBase: [paths.background, paths.content],
        // historyApiFallback: true,
        // hot: true,
        // inline: true,
        // open: true
    },
    watch: true,
    // plugins: [
    //     new CopyWebpackPlugin([
    //         {}
    //     ])
    // ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],  
    }
}