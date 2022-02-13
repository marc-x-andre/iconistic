<template>
  <div>
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
  --grid-width: 100vw * 20/30;
  --ratio: 1/1;
  grid-template-columns: repeat(var(--columns),1fr);
  display: grid;
  grid-auto-rows: calc(var(--grid-width) / var(--columns) * var(--ratio));
  flex-grow: 1;
}

</style>