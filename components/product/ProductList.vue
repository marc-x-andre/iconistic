<template>
  <div>
    <div class="grid">
      <ProductItem v-for="product in products" :key="product.title" :product="product" />
    </div>
  </div>
</template>

<script>
import products from '@/assets/products.json'

export default {
  data () {
    return {
      products
    }
  }
}
</script>

<style lang="less" scoped>
.grid {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}
</style>
