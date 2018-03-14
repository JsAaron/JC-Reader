const webpack = require("webpack");
let config = require('./webpack.config');
const base = require('./base.config')
const WebpackDevServer = require('webpack-dev-server');
const compiler = webpack(config);

new WebpackDevServer(compiler, config.devServer)
.listen(base.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + base.port);
});
