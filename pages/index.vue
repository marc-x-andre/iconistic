<template>
  <section class="section">
    <div class="columns is-vcentered">
      <div class="column inset">
        <div class="gradi top" />
        <video loop autoplay="autoplay">
          <source src="/icons-list-scroll.mp4" type="video/mp4">
        </video>
        <div class="gradi bottom" />
      </div>
      <div class="column">
        <p class="title is-1">
          Icon + Apparels
        </p>
        <p class="subtitle is-3">
          More than 24 432 possibilities
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>

.inset {
  position: relative;
  .gradi {
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
    background: transparent;
    background: linear-gradient(0deg, transparent 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);
    position: absolute;
    margin: 0 0.75rem;
    &.bottom {
      bottom: 0;
      background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);
    }
  }
}

</style>
