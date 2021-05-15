const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name][contenthash].js',
        path: __dirname + '/build'  
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build'],
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/template/index.html'
        })

    ]
}

module.exports = config