<template>
  <div>
    <div class="mt-5 product-model">
      <h4 class="text-black text-2xl font-bold">รุ่น</h4>
      <div v-if="productItems.data">
        <div
          v-for="(item, index) in productItems.data.main_product"
          :key="index"
          :class="
            activeIndex === index
            ? 'rounded-lg border-2 border-green p-5 my-4 flex justify-between items-center cursor-pointer'
            : 'rounded-lg border-2 border-grey-300 hover:border-grey-400 p-5 my-4 flex justify-between items-center cursor-pointer'
          "
          @click="selectItem(item, index)"
        >
          <div>
            <div class="text-xl font-bold">{{ item.name }}</div>
          </div>
          <div class="float-right">
            <div class="text-lg font-normal">
              {{ getMinProductPrice(item.model) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
import { mapMutations } from 'vuex'

export default {
  name: 'ProductModel',
  props: {
    productItems: {
      required: false,
      type: Object,
      default: null,
    },
  },
  data: () => ({
    activeIndex: 0,
  }),
  methods: {
    ...mapMutations('product', {
      selectModel: 'SELECT_MODEL',
    }),
    getMinProductPrice(model) {
      return ''
    },
    selectItem(name, index) {
      this.selectModel(name)
      this.activeIndex = index
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

.product-model {
  font-family: 'SF Pro +TH', sans-serif;
}
</style>
