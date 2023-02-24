/**
 * Repository plugin
 */

import createProductRepository from '~/api/product.js'

export default (ctx, inject) => {
  const productRepositoryWithAxios = createProductRepository(ctx.$axios)

  const repositories = {
    product: productRepositoryWithAxios('product'),
  }

  inject('repositories', repositories)
}
