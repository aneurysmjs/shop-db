const webpack = require('webpack');

const shared = [
 
];

const server = [
  new webpack.DefinePlugin({
    __SERVER__: 'true',
  }),
];

module.exports = {
  shared,
  server,
};
