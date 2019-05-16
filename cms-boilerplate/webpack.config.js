const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WebpackShellPlugin = require('webpack-shell-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const entry = {
        js: './src/app/index.js',
        scss: './src/style/style.scss',
    },
    output = {
        js: 'dist/app.min.js',
        css: 'dist/app.min.css',
        assetsPath: 'dist/assets',
    },
    shell = {
        kit: {
            pushSource: `kit push ${output.js} ${output.css} & kit manifest`,
            watch: 'kit watch',
        },
    };

const activeCommand = devMode ? shell.kit.watch : shell.kit.pushSource;

const extractPlugin = new MiniCssExtractPlugin({ filename: output.css });
// const shellPlugin = new WebpackShellPlugin({ onBuildStart: [activeCommand] });

module.exports = {
    entry: [entry.js, entry.scss],
    output: {
        path: path.resolve(__dirname),
        filename: output.js,
        publicPath: '/',
    },
    mode: devMode ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        ie: '9',
                                    },
                                    useBuiltIns: 'usage',
                                    corejs: '3.0',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: output.assetsPath,
                            name: '[name].[ext]?[hash]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        extractPlugin,
        // shellPlugin,
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/app'),
        },
    },
};
