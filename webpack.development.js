const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = env => merge(common(env), {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './build',
    hot: true,
    disableHostCheck: true,
  },
  devtool: 'source-map',
});
