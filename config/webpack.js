const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const dist = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { sourceMap: true } },
        ],
      }
    ],
  },
  output: {
    publicPath: '',
    path: dist,
  }
});
