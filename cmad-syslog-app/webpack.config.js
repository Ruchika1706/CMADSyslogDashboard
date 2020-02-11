config = {
	entry : './src/main/js/app.js',
	output: {
        path: __dirname,
        filename: './src/main/resources/static/index.js'
    },
	devServer : {
		inline : true,
		port : 8080
	},
	module : {
		loaders : [ {
			test : /\.jsx?$/,
			exclude : /node_modules/,
			loader : 'babel-loader',

			query : {
				presets : [ 'es2015', 'react' ]
			}
		} ]
	}
}
module.exports = config;