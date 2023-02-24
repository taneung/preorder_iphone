<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/partial/Header'
import Footer from '~/components/partial/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
}
</script>
