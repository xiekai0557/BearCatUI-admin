'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  //选择hash 或  history模式  如果history将没有#号
  mode:'history',
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings  // 各种dev服务器设置
    host: 'localhost', // can be overwritten by process.env.HOST  //可以被Prime.Env.HOST覆盖。
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined //可以被process.env.port覆盖，如果端口正在使用，将确定一个空闲端口。
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    //使用eslint加载器？
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    //如果你不需要使用eslint，把useEslint设为false即可
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    /**
     * Source Maps  源图
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin

    //gzip默认关闭，因为许多流行的静态主机（如surge或netlify）已经为您gzip了所有静态资产。在设置为“true”之前，请确保：NPM安装--保存dev压缩webpack插件
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 运行命令的版本号与一束分析仪的额外的参数，以查看报告完成后运行的版本：“npm run build --report”模式到“报表设置”或“false”，真到永远把它在线或离线
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
