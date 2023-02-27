<template>
  <div class="container mx-auto h-16 flex flex-col items-center md:flex-row lg:flex-row xl:flex-row justify-between">
    <h3 class="text-grey-500 text-sm float-left">
      Copyright © Interview. All rights reserved.
    </h3>
    <div class="float-right">
      <div class="flex flex-row items-center">
        <img
          class="object-scale-down w-12 object-center mx-2"
          :src="require('@/assets/images/logo/westernunion.png')"
          alt="Western Union"
        />
        <img
          class="object-scale-down w-12 object-center mx-2"
          :src="require('@/assets/images/logo/mastercard.png')"
          alt="MasterCard"
        />
        <img
          class="object-scale-down w-12 object-center mx-2"
          :src="require('@/assets/images/logo/paypal.png')"
          alt="Paypal"
        />
        <img
          class="object-scale-down w-12 object-center mx-2"
          :src="require('@/assets/images/logo/visa.png')"
          alt="Visa"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'SF Pro +TH';
  font-style: normal;
  font-weight: normal;
  src: local('SF Pro +TH'), url('~assets/fonts/SFProTH.woff2') format('woff2');
}

h3 {
  font-family: 'SF Pro +TH', sans-serif;
}
</style>
