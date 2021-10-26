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
        library: 'my-library',
        libraryTarget: 'umd',
        umdNamedDefine: true
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