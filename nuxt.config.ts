export default {
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
}
