const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = env => merge(common(env), {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public', to: '' },
    ]),
  ],
});
