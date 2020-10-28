/* Plugins */
import path from 'path';
import Webpack, { WebpackPluginInstance } from 'webpack';
import merge from 'webpack-merge';
import CompressionPlugin from 'compression-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import zlib from 'zlib';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin = require('terser-webpack-plugin');
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import COMMON_CONFIG from './webpack.common';

// CONSTANTS
const ROOT_DIR = path.resolve(__dirname, '../src');

const PROD_CONFIG: Webpack.Configuration = merge(COMMON_CONFIG, {
  mode: 'production',

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css?$/,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      }) as WebpackPluginInstance,
      new TerserPlugin({
        parallel: true
      }) as WebpackPluginInstance
    ],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime'
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 50000, // 50000 = 0,05MB
      minRatio: 0.8
    }) as WebpackPluginInstance,
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        level: 11
      },
      threshold: 10240,
      minRatio: 0.8
    }) as WebpackPluginInstance,
    new Dotenv({
      path: './.env.prod', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    }) as WebpackPluginInstance,
    new HtmlWebpackPlugin({
      hash: true,
      appMountId: 'react-template-app',
      template: path.resolve(ROOT_DIR, './static/files/index-pro.html'),
      favicon: path.resolve(ROOT_DIR, './static/images/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      scriptLoading: 'defer'
    })
  ]
});

export default PROD_CONFIG;
