<template>
  <div>
    <Navbar />
    <section class="main-content columns">
      <div class="container column is-12">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'
export default {
  name: 'DefaultLayout',
  components: { Navbar }
}
</script>
