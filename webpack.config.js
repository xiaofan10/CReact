const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    entry: {
        index: './src/index.tsx',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: __dirname + '/build'  
    },
    resolve: {
        modules: ["node_modules"],
        extensions: ['.js', '.ts', '.jsx', '.tsx']
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // tsx 文件 使用babel-loader编译，babel-loader会使用presets中设置的语法进行解析
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/env", "@babel/react", '@babel/preset-typescript'], // ts、react与jsx、ec6解析 
                    }
                }],
                
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build'],
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/template/index.html',
            inject: 'body',  // 打包后js等文件注入位置 body为body底部
        })

    ],
    devServer: {
        contentBase: './build',
       hot: true,
      },
}

module.exports = config