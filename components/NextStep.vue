<template>
  <div class="absolute-right">
    <b-button
      icon-right="arrow-right"
      @click="next"
    >
      Next Step
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    next () {

    }
  }
}
</script>

<style lang="less" scoped>
.absolute-right {
  position: fixed;
  bottom: 24px;
  right: 24px;
  button {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
}
</style>
