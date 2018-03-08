var path = require('path');
var webpack = require('webpack');

module.exports = {
    
  context: __dirname,
  entry: "./app/index.jsx",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "app.bundle.js",
    publicPath: 'http://localhost:8080'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  }
};
