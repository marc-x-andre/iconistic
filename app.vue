<script lang="ts" setup>
import './assets/scss/bootstrap.scss'
import './assets/less/main.less'
</script>

<template>
  <div>
    <LayoutNavbar />
    <div class="container">
      <NuxtPage/>
    </div>
    <LayoutFooter />
  </div>
</template>
