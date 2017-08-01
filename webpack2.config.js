var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    // //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/script/index.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    //入口文件输出配置
    output: {
        path: '/Users/spursy/Develop/util-webpack/dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebPackPlugin({
            filename: 'a.html',
            'template': 'index2.html',
            title: 'This is a.html',
            inject: 'head',
            chunks: ['main', 'a']
            // ,excludeChunks[]
        }),
        new htmlWebPackPlugin({
            filename: 'b.html',
            'template': 'index2.html',
            title: 'This is b.html',
            inject: 'head',
            chunks: ['b', 'c']
            // ,excludeChunks[]
        }),
        new htmlWebPackPlugin({
            filename: 'c.html',
            'template': 'index2.html',
            title: 'This is c.html',
            inject: 'head',
            chunks: ['main', 'c']
            // ,excludeChunks[]
        })
    ]
};