module.exports = {
  // head options
  // ------------
  head: {
    titleTemplate: '%s - Odios',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Listen to Podcasts, all the time, everytime' }
    ]
  },
  // css options
  // -----------
  css: [
    { src: '~assets/styles/app.styl', lang: 'stylus' }
  ],
  // loading-bar options
  // --------------------
  loading: {
    color: '#FF4081',
    height: '60px'
  },
  // loading-bar options
  // --------------------
  manifest: {
    theme_color: '#03A9F4'
  },
  // plugins options
  // ---------------
  plugins: [
    '~plugins/vuetify',
    '~plugins/vuex-router-sync.js'
  ],
  // modules options
  // -------------
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache',
    '@nuxtjs/optimize'
  ],
  // build options
  // -------------
  build: {
    vendors: ['vuetify']
  }
}
