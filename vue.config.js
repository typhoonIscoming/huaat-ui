'use strict'
const path = require('path')
const autoprefixer = require('autoprefixer')

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: '/example',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    css: {
        sourceMap: process.env.NODE_ENV === 'development',
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            postcss: {
                plugins: [
                    autoprefixer({ grid: 'autoplace' }),
                ]
            },
        },
    },
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors: false
            /* errors: true */
        },
        disableHostCheck: true,
        // proxy: {},
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    },
    configureWebpack: {
        entry: {
            app: resolve('./example/src/main.js'),
        },
        name: 'hua-ui',
        resolve: {
            alias: {
                '@': resolve('./example/src'),
                'hua-ui': resolve('./'),
            },
            extensions: ['.js', '.vue', '.json'],
        },
    },
    chainWebpack(config) {
        config.resolve.alias
            .set("@", resolve("src"))
        config.when(process.env.NODE_ENV !== 'development',
            (configure) => {
                configure
                    .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                            commons: {
                                name: 'chunk-components',
                                test: resolve('src/components'), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    })
                // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
                configure.optimization.runtimeChunk('single')
            }
        )
    }
}
