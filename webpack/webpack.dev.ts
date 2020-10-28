import Webpack, { WebpackPluginInstance } from 'webpack';
import merge from 'webpack-merge';
import Dotenv from 'dotenv-webpack';

import COMMON_CONFIG from './webpack.common';

const PUBLIC_PATH = '/';
const DEV_CONFIG: Webpack.Configuration = merge(COMMON_CONFIG, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: 'minimal',
    publicPath: PUBLIC_PATH,
    contentBase: './dist',
    hot: true,
    writeToDisk: true
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.dev', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    }) as WebpackPluginInstance
  ]
});

export default DEV_CONFIG;
