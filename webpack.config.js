var path = require ('path');

var webpack = require ('webpack');

var config={
	entry:{
		path:path.resolve(__dirname,'./index')
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'bundle.js'
	},
	module:{
		loaders: [{
  			test: /\.js$/, // 匹配.js文件，如果通过则使用下面的loader
  			exclude: /node_modules/, // 排除node_modules文件夹
  			loader: 'babel-loader' // 使用babel（babel-loader的简写）作为loader
 		}]
	},
	debug:true,
	devtools:'source-map',
	devServer:{
		historyApiFallback:true,
		inline:true,
		progress:true,
		hot:true,
		contentBase:__dirname,
		host:'0.0.0.0'
	}
};

module.exports = config