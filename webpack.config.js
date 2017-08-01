var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    // //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/script/index.js',
        a: './src/script/a.js'
    },
    //入口文件输出配置
    output: {
        path: '/Users/spursy/Develop/util-webpack/dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebPackPlugin({
            filename: 'index-[hash].html',
            'template': 'index.html',
            inject: 'head',
            date: new Date(),
            minify: {
                removeComments : true,
                removeEmptyElements: true
            }
        })
    ]
};