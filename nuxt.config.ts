export default {
  buildModules: [
    '@intlify/nuxt3',
    '@nuxtjs/strapi',
    '~/modules/google-fonts',
    '@pinia/nuxt',
  ],
  typescript: {
    shim: false
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {},
        },
      },
    },
  },
  googleFonts: {
    display: 'swap',
    useStylesheet: true,
    inject: true,
    download: true,
    families: {
      'Lora': [300, 400, 500, 600, 700]
    }
  },
  intlify: {
    vueI18n: {
      locale: 'en',
      localeDir: 'locales',
    }
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    entities: ['products', 'orders', 'subscribers'],
  }
}
