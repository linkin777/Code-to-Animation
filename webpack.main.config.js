const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'electron-main',
  entry: './src/main/app.ts',
  output: {
    path: path.resolve(__dirname, '../../dist/main'), // 修正输出目录
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}