var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'app/app'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}