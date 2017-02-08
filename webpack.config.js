// const path = require('path');

// const src = path.join(__dirname, 'src');

// module.exports = {
//   entry: `${src}/components/EmojiPane.js`,
//   output: {
//     filename: 'EmojiPane.js',
//     path: './lib',
//     libraryTarget: 'commonjs2',
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015'],
//         },
//       },
//       {
//         test: /\.css$/,
//         loaders: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx'],
//   },
// };

const path = require('path');
const fs = require('fs');

const srcFolder = path.join(__dirname, 'src', 'components');
const components = fs.readdirSync(srcFolder);

const files = [];
const entries = {};
components.forEach((component) => {
  const name = component.split('.')[0];
  const file = `./src/components/${name}`;
  files.push(file);
  entries[name] = file;
});

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    path: './lib/components/',
    libraryTarget: 'commonjs2',
  },
  externals(context, request, callback) {
    if (files.indexOf(request) > -1) {
      return callback(null, false);
    }
    return callback(null, true);
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['react'],
        },
      },
      {
        test: /\.jsx/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
