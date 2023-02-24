<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div
        class="fixed z-30 top-1/3 text-center mx-auto p-5 shadow-lg rounded-md bg-white"
      >
        <div class="mt-3 text-center w-96">
          <div
            class="mx-auto flex items-center justify-center h-32 w-32 rounded-full bg-green-100"
          >
            <img
              :src="require('@/assets/images/icon/order_success.png')"
              :srcset="
                require('@/assets/images/icon/order_success@2x.png') +
                ' 2x, ' +
                require('@/assets/images/icon/order_success@3x.png') +
                ' 3x'
              "
              alt="Order Success"
            />
          </div>
          <h3 class="text-2xl leading-6 font-bold text-black">
            การสั่งซื้อล่วงหน้าสำเร็จ
          </h3>
          <div class="mt-2 px-2 py-3">
            <p class="text-lg font-normal">
              การชำระเงินของคุณสำเร็จแล้ว!<br />
              ตอนนี้เราจะส่งอีเมลยืนยันคำสั่งซื้อสำเร็จให้คุณ
            </p>
          </div>
          <div class="items-center px-4 py-3">
            <button
              id="ok-btn"
              class="text-white bg-green px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              @click="$emit('click')"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed inset-0 bg-grey-500 bg-opacity-50 overflow-y-auto h-full w-full" @click="$emit('click')"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'SF Pro +TH';
  font-style: normal;
  font-weight: normal;
  src: local('SF Pro +TH'), url('~assets/fonts/SFProTH.woff2') format('woff2');
}

h3,
p,
button {
  font-family: 'SF Pro +TH', sans-serif;
}
</style>
