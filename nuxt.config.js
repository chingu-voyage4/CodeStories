module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Codestories',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Codestories' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /**
   * Global css
   */
  css: [
    '~/style/styles.css',
    'medium-editor/dist/css/medium-editor.css',
    'medium-editor/dist/css/themes/default.css',
    'vuetify/dist/vuetify.css'
  ],
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/vuetify', '~/plugins/firebase'],
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
