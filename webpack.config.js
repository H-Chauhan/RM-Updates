const path = require('path');

const config = {
  entry: {
    vendor: ['@babel/polyfill', 'react'],
    app: ['./src/client.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: ['/node_modules/', '/dist/'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*'],
  },
};

module.exports = config;
