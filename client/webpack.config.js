const path = require('path');
const { webpack } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    devServer: {
        historyApiFallback: true,
        port: 4000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    resolve: {
        alias: {

            '@scss': path.resolve(__dirname, 'src/assets/scss'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            "@store": path.resolve(__dirname, 'src/store'),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@core": path.resolve(__dirname, 'src/core'),
            "@api": path.resolve(__dirname, 'src/api')
        },
        extensions: ['.tsx', '.ts', '.json', '.js'],

    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    require('autoprefixer')
                                }
                            }
                        }
                    },

                    'sass-loader',


                ],
            },
            {
                test: /\.wooff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    },

};

