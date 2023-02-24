/**
 * Repository Pattern for testing
 */

export default ($axios) => () => ({
  productDetails() {
    const endpoint = '/pre-order'
    return $axios.$get(endpoint)
  },
  preorderProduct(id) {
    const endpoint = '/pre-order'
    const payload = {
      id,
    }
    return $axios.$post(endpoint, payload)
  },
})
