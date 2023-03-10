<template>
  <div>
    <div class="px-2 container mx-auto my-12 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
      <aside class="top-24 max-h-screen xs:w-full sm:w-full md:max-xl:w-1/2 md:sticky flex items-start justify-center">
        <img
          :src="productImg"
          alt="iPhone 13"
          class="object-contain"
          loading="lazy"
        />
      </aside>
      <div class="xs:mx-2 xs:w-full sm:w-full md:max-xl:w-1/2">
        <h2 class="text-black text-4xl font-bold">ซื้อ {{ setModel || 'iPhone' }}</h2>
        <ProductModel :product-items="productItems" />
        <ProductColor :color-list="colorList" />
        <ProductCapacity :capacity-list="capacityList" @updateProductId="enableBtn" />
        <ProductDelivery />
        <div class="border-t border-grey-400 mt-10 mb-5"></div>
        <div class="items-center py-3">
          <button
            id="ok-btn"
            :class="
              productId !== null
              ? 'text-white bg-green px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300'
              : 'text-white bg-grey-300 px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-grey-400'
            "
            @click="confirmOrder"
          >
            ยืนยันการสั่งซื้อล่วงหน้า
          </button>
        </div>
      </div>
    </div>
    <div v-if="isPreorder">
      <SuccessModal @click="closeModal" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import ProductModel from '~/components/ui/product/detail/ProductModel'
import ProductColor from '~/components/ui/product/detail/ProductColor'
import ProductCapacity from '~/components/ui/product/detail/ProductCapacity'
import ProductDelivery from '~/components/ui/product/detail/ProductDelivery'
import SuccessModal from '~/components/common/modal/SuccessModal'

export default {
  name: 'ProductDetail',
  components: {
    ProductModel,
    ProductColor,
    ProductCapacity,
    ProductDelivery,
    SuccessModal,
  },
  data() {
    return {
      isPreorder: false,
      productImg: 'https://media-cdn.bnn.in.th/140326/iPhone_13_PDP_Position-1A_Color_Pink__1-square_medium.jpg',
      selectItem: {},
      productItems: {},
      colorList: {},
      capacityList: {},
      productId: null,
    }
  },
  computed: {
    ...mapGetters({
      productDetail: 'product/getProductDetails',
      preOrderProductCheckout: 'product/getPreOrderProductCheckout',
      getModel: 'product/getModel',
      getColor: 'product/getColor',
      getCapacity: 'product/getCapacity',
      getProductId: 'product/getProductId',
    }),
    setModel() {
      if (this.getModel.name) {
        this.setColor()
        this.setCapacity()
        this.setModelPhoto()
        return this.getModel.name
      } else if (this.getColor?.color) {
        this.setModelPhoto()
        return this.getModel.name
      } else {
        return 'iPhone'
      }
    },
  },
  async beforeMount() {
    await this.fetchProductDetail()
    this.productItems = this.productDetail
  },
  methods: {
    ...mapMutations('product', {
      setProductDetail: 'product/SET_PRODUCT_DETAIL',
      setPreOrderProductCheckout: 'product/SET_PREORDER_PRODUCT_CHECKOUT',
    }),
    ...mapActions({
      getProduct: 'product/getProduct',
      savePreOrder: 'product/savePreOrder',
      clearPreOrder: 'product/clearPreOrder',
    }),
    fetchProductDetail() {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        await this.getProduct()
        this.productItems = this.productDetail
        this.colorList = this.productDetail.data.main_product[0]
        this.capacityList = this.productDetail.data.main_product[0].model[0]
        this.$nuxt.$loading.finish()
      })
    },
    setColor() {
      this.colorList = this.getModel
    },
    setCapacity() {
      if(this.getColor.color) {
        this.capacityList = this.getColor
      } else {
        const newCapacity = this.getModel
        this.capacityList = newCapacity.model[0]
      }
    },
    setModelPhoto() {
      if (this.getColor.data) {
        this.productImg = this.getColor.data[0].image_url
      } else {
        this.productImg = this.colorList.model[0].data[0].image_url
      }
    },
    closeModal() {
      this.isPreorder = false
    },
    confirmOrder() {
      this.productId = this.getProductId
      if (this.productId) {
        this.savePreOrder(this.productId)
        this.showModal()
        const status = this.preOrderProductCheckout
        if (status) {
          this.showModal()
        }
      }
    },
    enableBtn() {
      this.productId = this.getProductId
    },
    showModal() {
      this.isPreorder = true
    },
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'SF Pro +TH';
  font-style: normal;
  font-weight: normal;
  src: local('SF Pro +TH'), url('~assets/fonts/SFProTH.woff2') format('woff2');
}

h2,
h4,
button,
.confirm-btn {
  font-family: 'SF Pro +TH', sans-serif;
}
</style>
