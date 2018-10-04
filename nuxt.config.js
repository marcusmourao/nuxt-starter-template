module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-template',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  plugins: ['~/plugins/i18n.js'],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend(config, {isDev}) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
