const webpack = require('webpack');
const path = require('path');

// VJS hls set up: https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-340668494
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader' ]
      // },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   use: ['url-loader?limit=100000'],
      // },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      videojs: "video.js",
     "window.videojs": "video.js"
    })
  ],
  resolve: {
    alias: {
      'videojs-contrib-hls': 'videojs-contrib-hls/dist/videojs-contrib-hls.min.js',
      'videojs-contrib-quality-levels': 'videojs-contrib-quality-levels/dist/videojs-contrib-quality-levels.min.js',
      'videojs-hls-quality-selector': 'videojs-hls-quality-selector/dist/videojs-hls-quality-selector.min.js',
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
