<template>
  <div class="mdi-set">
    <span v-for="icon in icons" :key="icon" :class="`mdi-${icon}`" />
  </div>
</template>

<script>
import icons from '@/assets/icons.json'

export default {
  data () {
    return {
      icons: icons.slice(0, 100)
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  margin-top: 3em;
}
.empasi {
  display: flex;
  overflow-wrap: anywhere;
  line-height: 1em;
  letter-spacing: 2em;
  overflow: hidden;
  width: 5em;
  color: grey;
  p+p {
    padding-top: 2em;
  }
}
</style>
