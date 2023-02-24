<template>
  <div>
    <div class="mt-5 product-capacity">
      <h4 class="text-black text-2xl font-bold">ขนาด</h4>
      <div v-if="capacityList.data" class="grid grid-cols-2 gap-4 text-center">
        <div
          v-for="(item, index) in capacityList.data"
          :key="index"
          :class="
            activeIndex === index
            ? 'rounded-lg border-2 border-green p-5 my-4 cursor-pointer'
            : 'rounded-lg border-2 border-grey-300 hover:border-grey-400 p-5 my-4 cursor-pointer'
          "
          @click="selectItem(item, index)"
        >
          <div class="font-bold text-xl">{{ item.size }}</div>
          <div class="font-normal text-base text-grey-500">{{ setPrice(item.price, true) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { formatPrice } from '@/utils'

export default {
  name: 'ProductCapacity',
  props: {
    capacityList: {
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
      selectCapacity: 'SELECT_CAPACITY',
    }),
    selectItem(name, index) {
      this.selectCapacity(name)
      this.activeIndex = index
      console.log('name.id: ', name.id)
    },
    setPrice(price) {
      return formatPrice(price, true)
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

.product-capacity {
  font-family: 'SF Pro +TH', sans-serif;
}
</style>
