export const state = () => ({
  productDetail: {},
  selectModel: {},
  selectColor: {},
  selectCapacity: {},
  selectShipment: 'atStore',
  preOrderProductCheckout: {},
  productId: null,
})

export const getters = {
  getProductDetails: ({ productDetail }) => productDetail,
  getPreOrderProductCheckout: ({ preOrderProductCheckout }) => preOrderProductCheckout,
  getModel: ({ selectModel }) => selectModel,
  getColor: ({ selectColor }) => selectColor,
  getCapacity: ({ selectCapacity }) => selectCapacity,
  getShipment: ({ selectShipment }) => selectShipment,
  getProductId: ({ productId }) => productId,
}

export const mutations = {
  SET_PRODUCT_DETAIL(state, value) {
    state.productDetail = value
  },
  SELECT_MODEL(state, value) {
    state.selectModel = value
  },
  SELECT_COLOR(state, value) {
    state.selectColor = value
  },
  SELECT_CAPACITY(state, value) {
    state.selectCapacity = value
    state.productId = value.id
  },
  SELECT_SHIPMENT(state, value) {
    state.selectShipment = value
  },
  SET_PREORDER_PRODUCT_CHECKOUT(state, value) {
    state.preOrderProductCheckout = value
  },
}

export const actions = {
  async getProduct({ commit }) {
    const products = await this.$repositories.product.productDetails()
    if (products.success) {
      commit('SET_PRODUCT_DETAIL', products)
    }
  },
  async savePreOrder({ commit }, id) {
    const preorder = await this.$repositories.product.preorderProduct(id)
    if (preorder) {
      commit('SET_PREORDER_PRODUCT_CHECKOUT', preorder)
    }
  },
  clearPreOrder({ commit }) {
    commit('SET_PREORDER_PRODUCT_CHECKOUT', {})
  },
}
