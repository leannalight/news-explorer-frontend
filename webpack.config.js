const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин для работы с html
const WebpackMd5Hash = require('webpack-md5-hash'); // отвечает за хещирование
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
// объявляем переменную для сборки development
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
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
    // здесь прописываются правила
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js afqks
        exclude: /node_modules/, // исключает папку node_modules
        use: { loader: 'babel-loader' } // JS обрабатывается пакетом babel-loader
        },

      {
        test: /\.css$/i,
        use: [
        // при собирании в режиме dev MiniCssExtractPlugin загружать не нужно
          (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.(gif|png|jpe?g|ico|svg)$/i,
        use: [
        // указали папку, куда складывать изображения
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
                bypassOnDebug: true,
                disable: false,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]',
      }
    ]
  },

  // plugin - модуль, который преобразует код при компиляции и сборке в целом
  plugins: [

    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      // cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }), // подключается после MiniCssExtractPlugin

    new HtmlWebpackPlugin({
      // Для чего:
      inject: false, // стили НЕ нужно прописывать внутри тэгов
      template: './src/index.html', // образец для сравнения с текущим видом проекта
      filename: './index.html', // имя файла на выходе, который окажется в папке dist после сборки
    }),
    new HtmlWebpackPlugin({
      inject: false, // стили НЕ нужно прописывать внутри тэгов
      template: './src/savednews/savednews.html', // образец для сравнения с текущим видом проекта
      filename: './savednews.html', // имя файла на выходе, который окажется в папке dist после сборки
    }),

    new WebpackMd5Hash(),

    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],

  /* other options */
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  node: {
    fs: 'empty',
    net: 'empty'
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

};
