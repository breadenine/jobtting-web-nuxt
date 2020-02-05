require('dotenv').config()

export default {
  // mode: 'universal',
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ko'
    },
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: 'ant-design-vue/dist/antd.less', lang: 'less' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~assets/scss/variable.scss', '~assets/scss/common.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          modifyVars: { 'primary-color': '#22a6b3' }
        }
      })
    },
    transpile: [/^vue-awesome/]
  }
}
