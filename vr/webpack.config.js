const path = require('path')

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  node: false,
  mode: 'development',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      // {
      //   test: /\.m?js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"], // ensure compatibility with older browsers
      //       plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11
      //     },
      //   },
      // },
      // {
      //   test: /\.ts$/,
      //   loader: 'webpack-remove-debug',
      // },
    ]
  },
}
