//const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'site/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Yao UI'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        //'@': path.resolve(__dirname, "./packages")
      }
    }
  }
}