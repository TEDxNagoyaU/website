import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    /*
    ** github pagesにデプロイするときはheadに{base: ~~}が追加される。
    ** それ以外では追加されていない(underfind)
    */
    base: {
      href: 'router.base'
    },
    /* base: process.env.DEPLOY_ENV === 'DEVELOP'
    ? {
      href: 'router.base'
    }
    : undefined, */
    titleTemplate: '%s | ' + 'TEDxNagoyaU',
    // title: 'Steer your ship',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TEDxNagoyaU は、TED Talk に感銘を受けたメンバーが TEDx イベントを名古屋大学で開催しようという意気込みのもと、 2013年度に発足しました。 実行委員会は名古屋大学の学生を中心とした名古屋近辺の学生で構成され、運営を行っています。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.red.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  googleAnalytics: {
    id: 'UA-119308617-1',
    /**
     * firebaseにデプロイするときはtrueになる。
     * 詳しくは.github/workflows/deploy-firebase.ymlを参照
     */
    debug: {
      sendHitTask: process.env.DEPLOY_ENV === 'PRODUCTION'
    }
  },
  /**
   * github-pagesにデプロイするときはtrueになる
   * 詳しくは.github/workflows/gh-pages.ymlを参照
   */
  router: {
    base: process.env.DEPLOY_ENV === 'DEVELOP'
      ? '/website/'
      : undefined
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    dir: '../dist'
  }
}
/*
async function dynamicRoutes () {
  const speakersYearArray = ['2020', '2019', '2018', '2017']
  const partnersYearArray = ['2020', '2019', '2018', '2017']
  const speakersRoutesArray = await Promise.all(speakersYearArray.map(async (year) => {
    const speakers = await $content(year).fetch()
    const speakersRoutes = speakers.map(speaker => {route: speaker.path})
    const yearIndexRoute = {
      route: '/speakers/' + year
    }
    return (speakersRoutes.push(yearIndexRoute))
  }))
  const partnersRouteArray = partnersYearArray.map(year => {route: '/partners/' + year})

  const routes = speakersRoutesArray.concat(partnersRouteArray)
  return routes
}
*/
