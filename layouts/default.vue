<template>
  <div>
    <Navbar />
    <section class="main-content columns">
      <div class="container column is-12">
        <Nuxt />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'
export default {
  name: 'DefaultLayout',
  components: { Navbar, Footer }
}
</script>
