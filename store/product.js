export const state = () => ({
  productDetail: {},
  selectModel: {},
  selectColor: {},
  selectCapacity: {},
  selectShipment: 'atStore',
  preOrderProductCheckout: {},
})

export const getters = {
  getProductDetails: ({ productDetail }) => productDetail,
  getPreOrderProductCheckout: ({ preOrderProductCheckout }) => preOrderProductCheckout,
  getModel: ({ selectModel }) => selectModel,
  getColor: ({ selectColor }) => selectColor,
  getCapacity: ({ selectCapacity }) => selectCapacity,
  getShipment: ({ selectShipment }) => selectShipment,
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
  savePreOrder({ commit }, item) {
    commit('SET_PREORDER_PRODUCT_CHECKOUT', item)
  },
  clearPreOrder({ commit }) {
    commit('SET_PREORDER_PRODUCT_CHECKOUT', {})
  },
}
