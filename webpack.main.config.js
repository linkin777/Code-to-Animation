const path = require('path')

module.exports = {
  target: 'electron-main',
  entry: './src/main/app.ts',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist/main')
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