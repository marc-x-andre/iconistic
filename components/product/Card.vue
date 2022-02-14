<template>
  <div class="card">
    <a href="/product/1" />
    <div class="card-image">
      <figure class="image is-1by1">
        <img src="/placeholder.jpg" alt="Placeholder image">
      </figure>
    </div>
    <!-- <div class="card-content">
      <div class="content">
        <p class="category">sticker</p>
        <h2 class="title">Philo</h2>
        <p class="price">4.99</p>
      </div>
    </div> -->
  </div>
</template>

<style lang="less" scoped>
.inner {
  position: relative;
  height: 100%;
  a {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 15;
  }
  img {
    background: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: opacity .5s ease-out;
  }
  &:hover .caption {
    opacity: 1;
    transform: translateY(0);
  }
  .caption {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    color: #fff;
    opacity: 0;
    transition: opacity .5s ease-out,transform .5s ease-out;
    .title {
      font-size: 14px;
      line-height: 1.4em;
      padding-bottom: 10px;
    }
    .category, .price {
      font-size: 11px;
      line-height: 1.6em;
    }
  }
}
.block {
  padding: 16px;
  .block-p-sm {
      grid-row: auto/span 1;
      grid-column: auto/span 1;
  }
  .block-p-lg {
      grid-row: auto/span 2;
      grid-column: auto/span 2;
  }
  .block-l-sm {
      grid-column: auto/span 2;
  }
}

</style>
