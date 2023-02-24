<template>
  <div>
    <div class="mt-5 product-color">
      <h4 class="text-black text-2xl font-bold">สี</h4>
      <div v-if="colorList.model" class="grid grid-cols-2 gap-4 text-center">
        <div
          v-for="(item, index) in colorList.model"
          :key="index"
          :class="
            activeIndex === index
            ? 'rounded-lg border-2 border-green p-5 my-4 cursor-pointer'
            : 'rounded-lg border-2 border-grey-300 hover:border-grey-400 p-5 my-4 cursor-pointer'
          "
          @click="selectItem(item, index)"
        >
          <div class="text-center flex justify-center">
            <div
              class="rounded-full h-10 w-10 text-center"
              :style="setColor(item.color_hex)"
            ></div>
          </div>
          <div class="text-base font-normal mt-3">{{ item.color }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProductColor',
  props: {
    colorList: {
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
      selectColor: 'SELECT_COLOR',
    }),
    selectItem(name, index) {
      this.selectColor(name)
      this.activeIndex = index
    },
    setColor(colorHex) {
      const result = colorHex ? `background-color: #${colorHex};` : 'bg-green'
      return result
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

.product-color {
  font-family: 'SF Pro +TH', sans-serif;
}
</style>
