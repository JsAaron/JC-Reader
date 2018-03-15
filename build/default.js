'use strict';

const path = require('path');
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
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true
                }
            }, {
                loader: "postcss-loader"
            }]
        }]
    }
}

module.exports = {
    srcPath: srcPath,
    distPath: distPath,
    publicPath: '/assets/',
    port: dfltPort,
    getDefaultModules: getDefaultModules
};
