const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // файл, куда первым делом заглянет «Вебпак»
  entry: {
    main: './src/index.js',
    savednews: './src/savednews/savednews.js',
  },
  // файл, куда складывать собранные файлы
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              // загрузчик loader — функция, которая трансформирует исходный код
                loader: 'babel-loader'
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
  // plugin - модуль, который преобразует код при компиляции и сборке в целом
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
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
      minify: false,
      template: './src/index.html',
      filename: './index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      minify: false,
      template: './src/savednews/savednews.html',
      filename: './savednews.html',
      chunks: ['savednews'],
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  /* other options */
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  node: {
    fs: 'empty',
    net: 'empty'
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

};
