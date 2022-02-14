import Strapi from 'strapi-sdk-js'

// eslint-disable-next-line no-empty-pattern
export default ({ }, inject: any) => {
  const strapi = new Strapi({
    // options
  })

  inject('strapi', strapi)
}
