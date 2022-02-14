<template>
  <div>
    <!-- {{ $route.params.id }} -->
    {{ response }}
    <ProductInfo />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { findOne } = useStrapi4()

const response = await findOne('products', route.params.id)

</script>