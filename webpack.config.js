const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        main: './src/index.js',
        savednews: './src/savednews.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/[name].[contenthash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                  (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                  'css-loader',
                  'postcss-loader'
                ]
            },
            {
              test: /\.(gif|png|jpe?g|ico|svg)$/i,
              use: [
                  'file-loader?name=./images/[name].[ext]',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true,
                    },
                  },
                ],
          },
          {
              test: /\.(eot|ttf|woff|woff2)$/,
              loader: 'file-loader?name=./vendor/[name].[ext]'
          }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name]/[name].[contenthash].css' }),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
                  preset: ['default'],
          },
          canPrint: true
        }),
        new HtmlWebpackPlugin({
          inject: true,
          template: './src/index.html',
          chunks: ['main'],
          filename: './index.html'
      }),
        new HtmlWebpackPlugin({
          inject: true,
          template: './src/savednews.html',
          chunks: ['savednews'],
          filename: './savednews.html'
      }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
};
