const webpack = require('webpack')
// const merge = require('webpack-merge')
// const common = require('./webpack.common')
const paths = require('./paths')

module.exports = {
    devtool: 'source-map',
    entry: {
        // popup: './popup/index.js',
        background: paths.backgroundIndex,
        content: paths.contentIndex
    },
            
    output: {
        path: paths.assets,
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

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                exclude: /node_modules/
            }
        ],  
    }
};

// module.exports = merge(common, {
//     mode: 'development',
//     entry: {
//         app: [
//             'webpack-dev-server/client?http://localhost:8080',
//             'webpack/hot/only-dev-server',
//             'react-hot-loader/patch',
//             paths.appIndex
//         ]
//     },
//     devtool: 'cheap-module-eval-source-map',
//     // webpack-dev-server config
//     devServer: {
//         // where to look for static files when building
//         contentBase: paths.public,
//         // bundled files will be available in browser under this path
//         publicPath: '/',
//         historyApiFallback: true,
//         hot: true,
//         inline: true,
//         open: true
//     },
//     output: {
//         pathinfo: true
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//     ]
// })