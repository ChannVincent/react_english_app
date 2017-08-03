/*
entry : first file that webpack is looking for to start your application (root component)
output : result of webpack compiling all your "resolved files" in 1 uniq file called "bundle.js"
alias : list of jsx files path to import easily each one of them by just typing the filename


*/

var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx',
      Newsletter: 'app/components/Newsletter.jsx',
      Connexion: 'app/components/Connexion.jsx',
      Blog: 'app/components/Blog.jsx',
      Home: 'app/components/Home.jsx',
      applicationStyles: 'app/styles/app.scss',

      CardPackage: 'app/components/common/CardPackage.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
}
