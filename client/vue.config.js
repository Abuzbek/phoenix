const path = require('path')
module.exports = {
  outputDir:path.resolve(__dirname, '../server/public'),

  pluginOptions: {
    i18n: {
      locale: 'uz',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
}
