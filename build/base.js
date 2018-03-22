'use strict';
let path = require('path');
let defaultSetting = require('./default');

module.exports = {
  output: {
    path: __dirname + "/../dist", //打包后的文件存放的地方
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "/../dist", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true,
    hot: true,
    noInfo: true
    // progress:true
  },
  resolve: {
    extensions: ['.js', '.jsx','.json'] //默认添加后缀
  },
  module: {}
};
