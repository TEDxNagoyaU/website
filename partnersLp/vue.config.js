const deploy_destination = process.env.DEPLOY_DESTINATION ? process.env.DEPLOY_DESTINATION : './'
//  '/partner-lp/', '/tedxnu_20_commu_lp/'

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'PRODUCTION' || process.env.NODE_ENV === 'DEVELOP'
    ? deploy_destination
    : './',
  outputDir: '../dist/partnersLp'
}
