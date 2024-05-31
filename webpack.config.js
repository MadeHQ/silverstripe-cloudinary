/* global process, __dirname */
const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const pkg = require('./package.json');

const paths = pkg.config.paths;

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const config = {
    context: path.resolve(__dirname, paths.js),
    entry: {
        bundle: './bundle.js',
        userform: './userform.js',
    },
    mode: env,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, paths.dist),
    },
    resolve: {
        modules: [
            'node_modules',
        ],
    },
    externals: {
        jquery: 'jQuery',
        classnames: 'classnames',
        'react-dom': 'ReactDom',
        react: 'React',
        'prop-types': 'PropTypes',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                'lodash',
                            ],
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    }
                ],
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
    plugins: (function () {
        let plugins = [
    //         // new webpack.ProvidePlugin({
    //         //     jQuery: 'jquery',
    //         //     $: 'jquery',
    //         // }),
            new ESLintPlugin({
                files: `${paths.js}/**/*.js`,
            }),
            new webpack.DefinePlugin({
                __DEV__: JSON.stringify(JSON.parse(!isProd || 'false')),
                'process.env': {
                    NODE_ENV: JSON.stringify(env),
                },
            }),
        ];

        if (isProd) {
            plugins = plugins.concat([
                new webpack.BannerPlugin({
                    banner: `${pkg.name} - v${pkg.version}`,
                }),
            ]);
        }

        return plugins;
    }()),
};

if (isProd) {
    config.optimization = {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        beautify: true,
                        comments: false,
                    },
                    mangle: {
                        keep_fnames: true,
                    },
                    sourceMap: true,
                },
            }),
        ],
    }
}

module.exports = config;
