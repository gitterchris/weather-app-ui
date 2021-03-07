const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const dist = path.join(__dirname, '../dist');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		contentBase: dist,
		historyApiFallback: true,
		hot: true,
		port: 3000,
		host: 'localhost',
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'less-loader' },
				],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			}
		],
	},
});
