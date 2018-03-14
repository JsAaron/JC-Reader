'use strict';

// https: //github.com/postcss/postcss
// https: //segmentfault.com/a/1190000006178770
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseSettings = require('./base.config')
const moment = require('moment');
const path = require('path');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    devtool: "inline-source-map",
    entry: path.join(baseSettings.srcPath, '/main.js'), //已多次提及的唯一入口文件
    output: {
        path: baseSettings.outPath, //打包后的文件存放的地方
        filename: "bundle.js", //打包后输出文件的文件名
        publicPath: ASSET_PATH
    },
    devServer: {
        port: 8080,
        publicPath: ASSET_PATH,
        contentBase: baseSettings.outPath, //本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //当源文件改变时会自动刷新页面
        hot: true
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true, // 指定启用css modules
                        localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                    }
                }]
            }
            // {
            //     //分离css js
            //     // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // }
        ]
    },
    plugins: [
        //该插件帮助我们安心地使用环境变量
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
        // new ExtractTextPlugin('styles.css'),
        // new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            title: 'My App',
            inject: 'body',
            hash: true,
            filename: path.join(baseSettings.outPath, '/index.html'),
            template: path.join(baseSettings.srcPath, '/index.tmpl.html') //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin() //热加载插件
    ]
}
