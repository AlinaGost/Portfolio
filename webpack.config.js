const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {
          loader: 'less-loader',
          options: {lessOptions: {strictMath: true}},
        },
      ],
    }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, 'src')
  }
}
