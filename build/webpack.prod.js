// build/webpack.prod.js
const path = require('path');
const webpackmerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = webpackmerge.merge(webpackBaseConfig, {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, '../index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: 'index.js',
        library: 'hua-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            main: path.resolve(__dirname, '../src'),
            packages: path.resolve(__dirname, '../packages'),
            examples: path.resolve(__dirname, '../examples'),
            'hua-ui': path.resolve(__dirname, '../')
        },
        modules: ['node_modules']
    },
    optimization: {
        minimize: false
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
});