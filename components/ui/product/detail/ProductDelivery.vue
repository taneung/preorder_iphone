<template>
  <div>
    <div class="mt-5 product-delivery">
      <h4 class="text-black text-2xl font-bold">ขนาด</h4>
      <div>
        <div
          :class="
            shipment === 'atStore'
            ? 'w-full rounded-lg border-2 border-green p-5 my-4 cursor-pointer'
            : 'w-full rounded-lg border-2 border-grey-300 hover:border-grey-400 p-5 my-4 cursor-pointer'
          "
          @click="selectItem('atStore')"
        >
            <div class="mx-2 w-12 h-10 float-left">
            <img
                class="object-scale-down object-center fill-black"
                :src="require('@/assets/images/icon/at_store.svg')"
                alt="At Store"
            />
          </div>
          <div class="font-bold text-xl">บริการรับสินค้าหน้าร้าน</div>
          <div class="font-normal text-base text-grey-500">จองเริ่มต้นเพียง ฿3,000 เท่านั้น</div>
        </div>
        <div
          :class="
            shipment === 'delivery'
            ? 'w-full rounded-lg border-2 border-green p-5 my-4 cursor-pointer'
            : 'w-full rounded-lg border-2 border-grey-300 hover:border-grey-400 p-5 my-4 cursor-pointer'
          "
          @click="selectItem('delivery')"
        >
            <div class="mx-2  w-12 h-10 float-left">
            <img
                class="object-scale-down object-center fill-black"
                :src="require('@/assets/images/icon/delivery.svg')"
                alt="Delivery"
            />
            </div>
          <div class="font-bold text-xl">บริการจัดส่งถึงบ้าน</div>
          <div class="font-normal text-base text-grey-500">ชำระในราคาเต็ม</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProductDelivery',
  data: () => ({
    shipment: 'atStore',
  }),
  methods: {
    ...mapMutations('product', {
      selectShipment: 'SELECT_SHIPMENT',
    }),
    selectItem(name) {
      this.selectShipment(name)
      this.shipment = name
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

.product-delivery {
  font-family: 'SF Pro +TH', sans-serif;
}
</style>
