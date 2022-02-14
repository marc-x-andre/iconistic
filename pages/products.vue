<template>
  <div>
    <div class="row">
      <!-- <pre class="col-6">{{ products }}</pre>
      <pre class="col-6">{{ categories }}</pre> -->
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

<style lang="less" scoped>

.blocks-product {
  --columns: 3;
  grid-template-columns: repeat(var(--columns),1fr);
  display: grid;
  flex-grow: 1;
  grid-gap: 3em;
}
</style>
