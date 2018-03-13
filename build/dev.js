'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = process.cwd()

const port = 8080
const publicPath = path.join(rootPath, '/public')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + port,
    'webpack/hot/only-dev-server',
    './src/main'
  ],
  output: {
    path: path.join(publicPath, '/assets'),
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    hot: true,
    port: port
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
          loader: "css-loader",
          options: {
            modules: true, // 指定启用css modules
            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
          }
        }, {
          loader: "postcss-loader"
        }]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      title: 'My App',
      inject: 'head',
      hash: true,
      filename: path.join(publicPath, '/assets/index.html'),
      template: "./src/templete.html"
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ]
}
