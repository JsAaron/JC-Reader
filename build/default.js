'use strict';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const srcPath = path.join(__dirname, '/../src');
const distPath = path.join(__dirname, '/../dist');
const dfltPort = 8080;

function getDefaultModules() {
  return {
    rules: [{
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              // modules: true  加载antd样式冲突，去掉
            }
          }
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            //（单位 byte）低于指定的限制时，可以返回一个 DataURL
            limit: 8192
          }
        }]
      }
    ]
  }
}

module.exports = {
  srcPath: srcPath,
  distPath: distPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
