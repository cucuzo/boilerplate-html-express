const {merge} = require('webpack-merge');
const path = require('path');

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    server: 'https',
    compress: true,
    port: 7887,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
  },
});
