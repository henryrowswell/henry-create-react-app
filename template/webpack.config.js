module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
		],
	}
}