const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.scss$/,
        loaders: ['style', 'raw', 'sass'],
        include: path.resolve(__dirname, '../src/scss/')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
