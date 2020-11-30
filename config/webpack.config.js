'use strict';

var webpack = require('webpack');
var notifier = require('node-notifier');
var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
var autoprefixer = require('autoprefixer');
const CompressionPlugin = require('compression-webpack-plugin');

var frame = 0;
var lasttime = Date.now();
var anims = [
    // {{{1
    [
        '(｡◕ ‿ ◕｡)',
        '(｡◕ ‿ ◕｡)',
        '( ｡◕ ‿ ◕)',
        '(  ｡◕ ‿◕)',
        '(   ｡◕ ‿)',
        '(    ｡◕‿)',
        '(     ｡◕)',
        '(       )',
        '(       )',
        '(◕｡     )',
        '(‿◕｡    )',
        '(‿ ◕｡   )',
        '(◕‿ ◕｡  )',
        '(◕ ‿ ◕｡ )',
    ],
    // }}}1
    // {{{1
    [
        ' 👏🏿 ',
        ' 👏🏾 ',
        ' 👏 ',
        ' 👏🏽 ',
        ' 👏🏼 ',
        ' 👏🏻 ',
        ' 👏🏼 ',
        ' 👏🏽 ',
        ' 👏 ',
        ' 👏🏾 ',
    ],
    // }}}1
    // {{{1
    [
        ' 🏁 🌴 🌴 ☀️ 🌴 🌴 🚗 ',
        ' 🏁 🌴 🌴 ☀️ 🌴 🚗 🏙 ',
        ' 🏁 🌴 🌴 ☀️ 🚗 🌴 🏙 ',
        ' 🏁 🌴 🌴 🚗 🌴 🌴 🏙 ',
        ' 🏁 🌴 🚗 ☀️ 🌴 🌴 🏙 ',
        ' 🏁 🚗 🌴 ☀️ 🌴 🌴 🏙 ',
        ' 🚗 🌴 🌴 ☀️ 🌴 🌴 🏙 ',
    ],
    // }}}1
    // {{{1
    [
        ' ☁️ ☁️ 🌕 ☁️ ☁️',
        ' ☁️ ☁️ 🌖 ☁️ ☁️',
        ' ☁️ ☁️ 🌗 ☁️ ☁️',
        ' ☁️ ☁️ 🌘 ☁️ ☁️',
        ' ☁️ ☁️ 🌑 ☁️ ☁️',
        ' ☁️ ☁️ 🌒 ☁️ ☁️',
        ' ☁️ ☁️ 🌓 ☁️ ☁️',
        ' ☁️ ☁️ 🌓 ☁️ ☁️',
        ' ☁️ ☁️ 🌔 ☁️ ☁️',
    ],
    // }}}1
];
var anim = anims[0];

function CompileNotifyPlugin() { }
CompileNotifyPlugin.prototype.apply = function MyPlugin(compiler) {
    compiler.plugin("emit", function emit(compilation, callback) {
        if (compilation.errors.length > 0) {
            const err = compilation.errors[0];
            //const filename = err.module.id.match(/[0-9a-zA-Z_-]+.js/);
            notifier.notify({
                title: '❌ Compile failed‼️',
                //message: filename[0] + ': ' + err.message,
                sound: 'Hero'
            });
        } else {
            notifier.notify({
                title: '✅ Webpack Compiled 😎',
                message: 'cool!'
            });
        }

        callback();
    });
};


module.exports = {
    resolve: {
        alias: {
            moment: 'moment/moment.js',
            Actions: path.resolve(__dirname, '../src/scripts/actions/'),
            ActionsSaga: path.resolve(__dirname, '../src/scripts/actionsSaga/'),
            Components: path.resolve(__dirname, '../src/scripts/components/'),
            Constants: path.resolve(__dirname, '../src/scripts/constants/'),
            Helpers: path.resolve(__dirname, '../src/scripts/helpers/'),
            Reducers: path.resolve(__dirname, '../src/scripts/reducers/'),
            Sagas: path.resolve(__dirname, '../src/scripts/sagas/'),
            Screens: path.resolve(__dirname, '../src/scripts/screens/'),
            Selectors: path.resolve(__dirname, '../src/scripts/selectors/'),
            Store: path.resolve(__dirname, '../src/scripts/store/'),
            Utilities: path.resolve(__dirname, '../src/scripts/utilities/'),
            Styles: path.resolve(__dirname, '../src/styles/'),
            Conf: path.resolve(__dirname, '../src/conf/'),
        },
    },
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, '../src/scripts/index.js')
    ],
    externals: {
        StripeCheckout: "StripeCheckout",
        MQ: 'MQ',
        L: 'L',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|otf|ttf|eot|webm|mov|mp4|json|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        query: {
                            limit: 131072,
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, '..', 'build/src/scripts'),
        publicPath: '/src/scripts/',
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test(module) {
                        return module.resource && /[\\/]node_modules[\\/]/.test(module.resource) && !/node_modules\/(?:react|react-dom|react-router|react-router-dom)/.test(module.resource) && !/node_modules\/(?:redux|redux-form|redux-form-material-ui|@redux-saga|core-js|lodash|moment|react)/.test(module.resource);
                    },
                    name: 'vendors',
                    chunks: 'all',
                },
                reactCommons: {
                    test(module) {
                        return module.resource && /node_modules\/(?:redux|redux-form|redux-form-material-ui|@redux-saga|core-js|lodash|moment)/.test(module.resource);
                    },
                    name: 'reactCommons',
                    chunks: 'all',
                },
                commons: {
                    test(module) {
                        return module.resource && /node_modules\/(?:react|react-dom|react-router|react-router-dom)/.test(module.resource);
                    },
                    name: 'commons',
                    chunks: 'all',
                },
            },
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
            }),
        ],
    },
    plugins: [
        new CompressionPlugin({
            exclude: /node_modules/,
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new CompileNotifyPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
            }
        }),
        new webpack.DefinePlugin({
            PRODUCTION: process.env.NODE_ENV === 'production',
            PILOT_MODE: false,
            DEPLOYEMENT_ENV: JSON.stringify(process.env.API_HOST),
            ALLOW_UNAUTH_FLAG: true
        }),
        // draw progress bar
        new webpack.ProgressPlugin(function AnimatedProgressPlugin(percentage, message) {
            var percent = Math.round(percentage * 100);
            var len = 40;
            var newline = '';

            if (percentage === 1) {
                message = 'done!';
                newline = '\n';
            }

            if (percent === 0) {
                anim = anims[~~(Math.random() * anims.length)];
            } else {
                // cut and pad message
                var msg = `[${percent}%]: ${message}`;
                while (msg.length < 24) msg += ' ';
                msg = msg.substr(0, 24);
                msg += ' [';

                // add progress bar
                var remainingChars = len - msg.length;
                var fill = Math.round(remainingChars * percentage);
                while (fill--) msg += '█';
                while (msg.length < len - 1) msg += '░';
                msg += ']';

                // draw face
                var dt = Date.now() - lasttime;
                frame += dt / 1000 * 24;
                lasttime = Date.now();
                var face = anim[(~~frame) % anim.length];

                process.stderr.write(`\r ${msg}${face}${newline}`);
            }
        })
    ]
};
