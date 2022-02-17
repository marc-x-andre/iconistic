<template>
  <div>
    <b-progress v-if="value !== max" :value="value" :max="max" show-value />
  </div>
</template>

<script>
import inViewport from 'vue-in-viewport-mixin'

export default {
  mixins: [inViewport],
  props: {
    value: { type: Number, required: true },
    max: { type: Number, required: true },
    whenInViewport: { type: Function, required: true }
  },
  watch: {
    'inViewport.now' (visible) {
      if (visible) {
        this.whenInViewport()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.progress-wrapper {
  margin: 4em 0 0;
}
</style>
