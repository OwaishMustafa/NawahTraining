'use strict';
let webpack = require('webpack');
let path = require('path');
let nodeModulesPath = path.join(__dirname, 'node_modules');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let exp = []; // multiple exports array

// Exports configs for each language
let configs = [
    {
        name: 'en',
        entry: {
            en: './src/index.en.js'
        },
        scssRule: {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                                loader: "css-loader"
                            },
                            {
                                loader: "rtl-ltr-prefix-loader",
                                query: {
                                    dir: 'ltr',
                                }
                            },

                            {
                                loader: "sass-loader"
                            },

                        ],
                        fallback: "style-loader"
                    }),
                }
    },
    {
        name: 'ar',
        entry: {
            ar: './src/index.ar.js'
        },
        scssRule: {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                                loader: "rtlcss-loader"
                            },
                            {
                                loader: "rtl-ltr-prefix-loader",
                                query: {
                                    dir: 'rtl',
                                }
                            },

                            {
                                loader: "sass-loader"
                            },

                        ],
                        fallback: "style-loader"
                    }),
                }
    }
];

// Generate exports module for each config
for(let c of configs ){
        var e = {
        context: __dirname,
        watch: true,
        entry: c.entry,
        output: {
            path: __dirname,
            filename: "dist/js/app.[name].js"
        },
        module: {
            rules: [{
                    enforce: 'pre',
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "jshint-loader"
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: "css-loader"
                        }],
                        fallback: "style-loader"
                    }),
                },
                c.scssRule,
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file-loader?name=dist/fonts/[name].[ext]'
                }
            ]
        },
        // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
        plugins: [
            new ExtractTextPlugin({
                publicPath: '../../',
                filename: 'dist/css/app.[name].css'
            }),
        ]
    }
    exp.push(e);
}

module.exports = exp;