'use strict';

const path = require('path');

module.exports = {
    port: 8080,
    srcPath: path.join(__dirname, '/../src'),
    rootPath: path.join(__dirname, '/../'),
    outPath: path.join(__dirname, '/../public'),
    publicPath: '/assets/'
}
