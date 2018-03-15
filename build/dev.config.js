const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const defaultConfig = require('./default')
const baseConfig = require('./base')

let config = Object.assign({}, baseConfig, {
    entry: __dirname + "/../src/index.js", //已多次提及的唯一入口文件
    devtool: 'eval-source-map',
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/../src/template.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.NoEmitOnErrorsPlugin(),//出错时只打印错误，但不重新加载页面
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin('dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
    module: defaultConfig.getDefaultModules(),

})

module.exports = config;
