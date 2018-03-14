const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const rootPath = path.join(__dirname, '/../');

module.exports = {
    port: 8080,
    srcPath: srcPath,
    rootPath: rootPath,
    outPath: path.join(__dirname, '/../public')
}
