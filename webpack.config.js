module.exports = {
  entry: './static/app.js',

  output: {
    filename: './static/bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
	watch: true
}
