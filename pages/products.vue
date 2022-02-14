<template>
  <div>
    <div class="row">     
      <pre class="col-6">{{ products }}</pre>
      <pre class="col-6">{{ categories }}</pre>
    </div>
    <ProductFilter />
    <div class="blocks-product">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<script setup lang="ts">

const { find } = useStrapi4()

const products = await find('products')
const categories = await find('categories')

</script>

<style lang="less" scoped>

.blocks-product {
  --columns: 3;
  --grid-width: 100vw * 20/30;
  --ratio: 1/1;
  grid-template-columns: repeat(var(--columns),1fr);
  display: grid;
  grid-auto-rows: calc(var(--grid-width) / var(--columns) * var(--ratio));
  flex-grow: 1;
}
</style>