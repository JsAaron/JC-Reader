const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const rootPath = path.join(__dirname, '/../')

const config = {
    entry: rootPath + "/src/main.js",
    output: {
        path: rootPath + "/public/", //打包后的文件存放的地方
        filename: "bundle.js",
        publicPath: '/assets/'
    },
    devtool: 'eval-source-map',
    module: {
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
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: rootPath + "/src/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()
        // new CleanWebpackPlugin('../public/*.*', {
        //     root: __dirname,
        //     verbose: true,
        //     dry: false
        // }) //热加载插件
    ]
}

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: rootPath + "/public/", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true,
    hot: true,
    // publicPath: '/assets/',
    stats: {
        colors: true
    }
})
server.listen(8080, 'localhost', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('Listening at localhost:' + 8080);
});
