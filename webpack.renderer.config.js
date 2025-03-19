const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/renderer/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/renderer'),
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@parser': path.resolve(__dirname, 'src/parser'),
      three: path.resolve(__dirname, 'node_modules/three')
    }
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/renderer/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '../../dist/renderer')
    },
    hot: true,
    port: 3000,
    open: true
  },
}