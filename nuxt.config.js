import colors from 'vuetify/es5/util/colors'
import ko from 'vuetify/es5/locale/ko'
require('dotenv').config()

export default {
  // mode: 'spa',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ko'
    },
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAPS_CLIENT_ID}` }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.cyan.darken1 },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/globalComponents.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy'
  ],
  styleResources: {
    scss: ['~assets/scss/_import/_variables.scss', '~assets/scss/_import/_mixins.scss', '~assets/scss/common.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/vuetify/variables.scss'],
    // 없으면 dev모드에서 custom-variables 적용 안됨
    treeShake: true,
    theme: {
      dark: false,
      lang: {
        locales: { ko },
        current: 'ko'
      },
      themes: {
        dark: {
          primary: colors.cyan.darken1,
          // accent: colors.grey.darken3,
          secondary: colors.grey.lighten2,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
          dark: colors.grey.darken4
        },
        light: {
          primary: colors.cyan.darken1,
          // accent: colors.grey.darken3,
          secondary: colors.grey.lighten2,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
          dark: colors.grey.darken4
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  proxy: {
    // Simple proxy
    '/api': 'http://localhost:3000',
    '/api3': {
      changeOrigin: false,
      target: { socketPath: '/var/run/http-sockets/backend.sock' }
    }
  }
}
