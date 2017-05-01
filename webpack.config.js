var path = require ('path');

var webpack = require ('webpack');

console.log('项目构建在：'+__dirname);

var config={
	entry:{
		path:path.resolve(__dirname,'./vue/main')
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		publicPath: '/dist/',
		filename:'bundle.js'
	},
	module:{
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{ test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.vue$/, loader: 'vue-loader'},
		]
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
	debug:true,
	devtools:'source-map',
	devServer:{
		historyApiFallback:true,
		inline:true,
		progress:true,
		hot:true,
		contentBase:__dirname,
		host:'0.0.0.0',
		port:3000
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]

};

module.exports = config