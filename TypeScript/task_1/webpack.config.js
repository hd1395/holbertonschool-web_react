const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: false } // نبي تدقيق أنواع كامل
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: ['.ts', '.js'] },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    port: 8080,
    open: false
  }
};
