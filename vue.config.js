const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dev_portfolio/'  // Replace <repository-name> with the actual repo name
    : '/'
})