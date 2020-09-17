import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  target: 'static',
  /**
   * github-pagesにデプロイするときはtrueになる
   * 詳しくは.github/workflows/gh-pages.ymlを参照
   */
  router: {
    base: process.env.DEPLOY_ENV === 'DEVELOP' ? '/website/'
      : process.env.DEPLOY_ENV === 'REVIEW' ? 'review'
      : '/'
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    base: {
      href: process.env.DEPLOY_ENV === 'DEVELOP' ? '/website/'
        : process.env.DEPLOY_ENV === 'REVIEW' ? 'review'
        : '/'
    },
    titleTemplate: '%s | ' + 'TEDxNagoyaU',
    // title: 'Steer your ship',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TEDxNagoyaU は、TED Talk に感銘を受けたメンバーが TEDx イベントを名古屋大学で開催しようという意気込みのもと、 2013年度に発足しました。 実行委員会は名古屋大学の学生を中心とした名古屋近辺の学生で構成され、運営を行っています。' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'TEDxNagoyaU'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tedxnagoyau.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'HOME | TEDxNagoyaU'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'TEDxNagoyaUは名古屋大学を中心に活動する、学生のみで構成されたTEDx運営団体・イベントです。今年はYouTubeをZoomを活用したオンラインイベントを開催いたします。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tedxnagoyau.com/keyvisual_white.png'
      }
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
    /* {
      src: '@/plugins/vue-youtube',
      mode: 'client'
    } */
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
    '@nuxt/content',
    '@nuxtjs/sitemap'
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
  sitemap: {
    hostname: 'https://tedxnagoyau.com',
    exclude: [
      '/links',
      '/partnersLp'
    ],
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const articlesContent = await $content('/articles', { deep: true }).fetch()
      const articlesPath = articlesContent.map(content => content.path)

      /**
       * talksのpathの生成は少し複雑なので解説する。
       * まずtalksの中にはトークの詳細な説明を行うものと行わないものがある。
       * 詳細な説明を行うものは最初のyml記法をしているところのdetailがtrueになっておりページが生成される。
       * detailがfalseだとページは生成されない。
       * この除外作業を行っている。
       * また、各年のページを探査して生成するのは実装がめんどいので、ここで手作業でやることにした。
       * そのため、最後にtalksPath.push()で各年のページを登録している。
       * もし動的にpathを取ってやるぜ！という意気込みと時間（重要）があればぜひ挑戦してほしい。
       */
      const talksContent = await $content('/talks', { deep: true }).fetch()
      const talksPath = talksContent.map((content) => {
        return content.detail === true ? content.path : null
      }).filter(path => path === null ? false : path)
      // 最後に各年のページを入れている。
      talksPath.push(
        '/talks/2017',
        '/talks/2018',
        '/talks/2019',
        '/talks/2020'
      )

      const partnersPath = [
        '/partners/2017',
        '/partners/2018',
        '/partners/2019',
        '/partners/2020'
      ]

      return [...articlesPath, ...partnersPath, ...talksPath]
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    dir: '../dist',
    fallback: true
  }
}
