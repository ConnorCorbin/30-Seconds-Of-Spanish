const path = require('path');

module.exports = ({ BABEL_ENV } = { BABEL_ENV: 'development' }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: BABEL_ENV,
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: '/images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', 'svg'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
});
