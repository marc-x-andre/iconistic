<template>
  <div class="card">
    <!-- <a href="/product/1" /> -->
    <div class="card-image">
      <b-image
        src="/placeholder.jpg"
        ratio="1by1"
        lazy
      >
        <template #placeholder>
          <b-skeleton
            class="skeleton-placeholder"
            height="100%"
          />
        </template>
      </b-image>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="category">
          sticker
        </p>
        <p class="title">
          Philo
        </p>
        <p class="price">
          4.99
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card {
  position: relative;
  height: 100%;
  overflow: hidden;
  a {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 15;
  }
  &:hover .card-content {
    opacity: 1;
    transform: translateY(0);
  }
  .card-content {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #fff;
    opacity: 0;
    transition: opacity .5s ease-out,transform .5s ease-out;
    .title {
      color: #fff;
    }
  }
}

.b-skeleton {
  height: 100%;
  position: absolute;
  top: 0;
}

</style>
