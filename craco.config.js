const CracoAntDesignPlugin = require('craco-antd')

/* craco.config.js */
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            strictMath: true,
            noIeCompat: true
          }
        },
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' }
        },
        babelPluginImportOptions: {
          libraryDirectory: 'es'
        }
      }
    }
  ]
}
