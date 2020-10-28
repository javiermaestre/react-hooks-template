import Webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const GenerateJsonPlugin = require('generate-json-webpack-plugin');

import Package from '../package.json';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// CONSTANTS
const PUBLIC_PATH = '/';
const ROOT_DIR = path.resolve(__dirname, '../src');
const isDev = () => process.env.NODE_ENV === 'dev';

const COMMON_CONFIG: Webpack.Configuration = {
  target: 'web',
  devtool: false,
  entry: {
    app: path.resolve(ROOT_DIR, './index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isDev() ? 'app-bundle.js' : '[name].[contenthash:4].js',
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer', 'postcss-import', 'postcss-preset-env']
              }
            }
          },
          'sass-loader'
        ]
      },
      /* {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }, */
      // Asset Modules, new feature from Webpack 5 --> https://webpack.js.org/guides/asset-modules/
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      static: path.resolve(ROOT_DIR, './static')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs']
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: isDev() ? 'styles.css' : '[name].css',
      chunkFilename: isDev() ? 'styles-chunk.css' : '[id].css'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      appMountId: 'react-template-app',
      template: path.resolve(ROOT_DIR, './static/files/index-dev.html'),
      favicon: path.resolve(ROOT_DIR, './static/images/favicon.ico'),
      title: 'React Template App',
      filename: 'index.html'
    }),
    new GenerateJsonPlugin('version.json', {
      app: Package.name,
      version: Package.version,
      description: Package.description
    }),
    new WebpackPwaManifest({
      name: 'React Template Web App',
      short_name: 'React Template',
      description: 'My awesome React Template Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/static/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/static/images/logo.png'),
          size: '1024x1024' // you can also use the specifications pattern
        }
      ]
    })

    /* new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(__dirname, '../reports/bundle-analysis.html')
    }) */
  ]
};

export default COMMON_CONFIG;
