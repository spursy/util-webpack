var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    // //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry: './src1/app.js',
    //入口文件输出配置
    output: {
        path: '/Users/spursy/Develop/util-webpack/dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                include:/src/,
                options: {
                    presets: ['env']
                }
            },
            {
                test:/\.css$/,
                // loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
                use: ['style-loader',{loader:'css-loader', options: {modules: false, importLoaders: 1}}, 'postcss-loader']    
            }, 
            {
                test:/\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test:/\.lass$/,
                loader: 'style-loader!css-loader!postcss-loader!lass-loader'
            },
            {
                test:/\.html$/,
                loader: 'html-loader'
            },
            {
                test:/\.tpl$/,
                loader:'ejs-loader'
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            filename: 'index.html',
            'template': 'index4.html',
            inject: 'body'
        })
    ]
};