export default {
  buildModules: [
    '@intlify/nuxt3',
    '~/modules/google-fonts'
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
  }
}
