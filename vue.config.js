const path = require('path')
// const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  publicPath:"./",
  outputDir:'dist',
  lintOnSave: true,
  devServer:{
    host:"0.0.0.0", 
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8598',
        ws:true,
        changeOrigin: true,//容许跨域
      },
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // vue$: 'vue/dist/vue.esm.js',
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
         '@': path.resolve('./src'),
      },
    },
  },
}
