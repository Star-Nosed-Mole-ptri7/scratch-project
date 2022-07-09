const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');


// module.exports = (env) => {


//   // This is reducing the whole .env object into one JSON parsed file.
//   const envKeys = Object.keys(env).reduce((prev, next) => {
//     prev[`process.env.${next}`] = JSON.stringify(env[next]);
//     return prev;
//   }, {});

//   return {
//     plugins: [
//       new webpack.DefinePlugin(envKeys)
//     ]
//   };
// };

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/index.html'
  })],

  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  devtool: 'inline-source-map'
};