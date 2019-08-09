const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const paths = package.config.paths;

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const config = {
    context: path.resolve(__dirname, paths.js),
    entry: {
        bundle: './bundle.js',
    },
    mode: env,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, paths.dist),
    },
    resolve: {
        modules: [
            path.resolve(__dirname, paths.js), 'node_modules',
        ],
    },
    externals: {
        jquery: 'jQuery',
        classnames: 'classnames',
        'react-dom': 'ReactDom',
        // 'react-redux': 'ReactRedux',
        react: 'React',
        'prop-types': 'PropTypes',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "plugins": [
                            "lodash",
                            "@babel/plugin-proposal-class-properties",
                        ],
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react",
                        ],
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                },
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
    plugins: (function() {
        var plugins = [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
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
                    banner: `${package.name} - v${package.version}`,
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
            new UglifyJsPlugin({
                sourceMap: true,
            }),
        ],
    };
}

module.exports = config;
