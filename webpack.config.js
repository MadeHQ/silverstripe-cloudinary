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
        bundle: './main.js'
    },
    mode: env,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, paths.dist)
    },
    resolve: {
        alias: {
            'cloudinary': './cloudinary.js'
        },
        modules: [
            path.resolve(__dirname, paths.js), 'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    optimization: {
        minimize: false
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
    plugins: (function() {
        var plugins = [
            // new webpack.ProvidePlugin({
            //     '$': 'jquery',
            //     'jQuery': 'jquery',
            //     'window.jQuery': 'jquery'
            // }),
            new webpack.DefinePlugin({
                __DEV__: JSON.stringify(JSON.parse(!isProd || 'false')),
                'process.env': {
                    NODE_ENV: JSON.stringify(env)
                }
            })
        ];

        if (isProd) {
            plugins = plugins.concat([
                new webpack.BannerPlugin({
                    banner: `${package.name} - v${package.version}`
                })
            ]);
        }

        return plugins;
    })()
};

if (isProd) {
    config.optimization = {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true
            })
        ]
    };
}

module.exports = config;




// const Path = require('path');
// const webpack = require('webpack');
// const webpackConfig = require('@silverstripe/webpack-config');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const {
//   resolveJS,
//   externalJS,
//   moduleJS,
//   pluginJS,
//   moduleCSS,
//   pluginCSS,
// } = webpackConfig;

// const ENV = process.env.NODE_ENV;
// const PATHS = {
//   MODULES: 'node_modules',
//   THIRDPARTY: 'thirdparty',
//   FILES_PATH: '../',
//   ROOT: Path.resolve(),
//   LEGACY_SRC: Path.resolve('client/src/legacy'),
// };

// const config = [
//   {
//     name: 'js',
//     entry: {
// //      vendor: `${PATHS.SRC}/js/vendor.js`,
//       bundle: `${PATHS.SRC}/js/app.js`
//       // bundle: `${PATHS.SRC}/bundles/bundle.js`,
//       // vendor: `${PATHS.SRC}/bundles/vendor.js`,
//       // // legacy scripts
//       // 'LeftAndMain.Ping': `${PATHS.LEGACY_SRC}/LeftAndMain.Ping.js`,
//       // leaktools: `${PATHS.LEGACY_SRC}/leaktools.js`,
//       // MemberImportForm: `${PATHS.LEGACY_SRC}/MemberImportForm.js`,
//       // TinyMCE_sslink: `${PATHS.LEGACY_SRC}/TinyMCE_sslink.js`,
//       // 'TinyMCE_sslink-external': `${PATHS.LEGACY_SRC}/TinyMCE_sslink-external.js`,
//       // 'TinyMCE_sslink-email': `${PATHS.LEGACY_SRC}/TinyMCE_sslink-email.js`,
//       // // For IE version 10 and below. These browsers doesn't handle large
//       // // resource files so need to break browser detection and warning code into
//       // // its own file
//       // browserWarning: `${PATHS.SRC}/lib/browserWarning.js`,
//     },
//     output: {
//       path: PATHS.DIST,
//       filename: 'js/[name].js',
//     },
//     devtool: (ENV !== 'production') ? 'source-map' : '',
//     resolve: resolveJS(ENV, PATHS),
//     externals: externalJS(ENV, PATHS),
//     module: moduleJS(ENV, PATHS),
//     // plugins: [
//     //   ...pluginJS(ENV, PATHS),
//     //   // Most vendor libs are loaded directly into the 'vendor' bundle (through require()
//     //   // calls in vendor.js). This ensures that any further require() calls in other
//     //   // bundles aren't duplicating libs.
//     //   new webpack.optimize.CommonsChunkPlugin({
//     //     name: 'vendor',
//     //     minChunks: module => module.context && module.context.indexOf('/node_modules/') > -1,
//     //   }),
//     // ],
//   },
//   // {
//   //   name: 'i18n',
//   //   entry: {
//   //     'i18n': `${PATHS.SRC}/i18n.js`
//   //   },
//   //   output: {
//   //     path: PATHS.DIST,
//   //     filename: 'js/[name].js',
//   //   },
//   //   devtool: (ENV !== 'production') ? 'source-map' : '',
//   //   resolve: resolveJS(ENV, PATHS),
//   //   externals: externalJS(ENV, PATHS),
//   //   module: moduleJS(ENV, PATHS),
//   //   plugins: pluginJS(ENV, PATHS),
//   // },
//   //
//   {
//     name: 'css',
//     entry: {
//       bundle: `${PATHS.SRC}/styles/bundle.scss`,
//       // editor: `${PATHS.SRC}/styles/editor.scss`,
//       // GridField_print: `${PATHS.SRC}/styles/legacy/GridField_print.scss`,
//       // // For IE version 10 and below. These browsers doesn't handle large
//       // // resource files so need to break browser detection and warning code into
//       // // its own file
//       // 'browser-warning': `${PATHS.SRC}/styles/browser-warning.scss`,
//     },
//     output: {
//       path: PATHS.DIST,
//       filename: 'styles/[name].css',
//     },
//     devtool: (ENV !== 'production') ? 'source-map' : '',
//     module: moduleCSS(ENV, PATHS),
//     plugins: [
//       ...pluginCSS(ENV, PATHS),
//       // new CopyWebpackPlugin([
//       //   {
//       //     // context: `${PATHS.SRC}/images`,
//       //     // from: 'chosen-sprite*.png',
//       //     from: `${PATHS.SRC}/images`,
//       //     to: `${PATHS.DIST}/images`
//       //   }
//       // ]),
//     ],
//   },
// ];

// // Use WEBPACK_CHILD=js or WEBPACK_CHILD=css env var to run a single config
// module.exports = (process.env.WEBPACK_CHILD)
//   ? config.find((entry) => entry.name === process.env.WEBPACK_CHILD)
//   : module.exports = config;
