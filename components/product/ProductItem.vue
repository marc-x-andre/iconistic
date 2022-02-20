<template>
  <div
    class="box"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <b-image
      :src="imgSrc"
      ratio="1by1"
      lazy
    >
      <template #placeholder>
        <b-skeleton height="100%" />
      </template>
    </b-image>
    <div class="box-content">
      <div class="information">
        <b-taglist>
          <b-tag type="is-primary" size="is-medium">
            {{ product.title }}
          </b-tag>
          <b-taglist attached>
            <b-tag type="is-dark">
              {{ product.type }}
            </b-tag>
            <b-tag type="is-info is-light">
              {{ product.price }} $
            </b-tag>
          </b-taglist>
        </b-taglist>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true }
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    imgSrc () {
      return !this.product
        ? undefined
        : this.hover
          ? this.product.images.second
          : this.product.images.first
    }
  }
}
</script>

<style lang="less" scoped>

.box {
  width: 30%;
}

@media screen and (max-width: 1200px) {
  div.box {
    width: 46%;
  }
}

@media screen and (max-width: 992px) {
  div.box {
    width: 34%;
  }
}

@media screen and (max-width: 600px) {
  div.box {
    width: 68%;
  }
}

.box {
  position: relative;
  overflow: hidden;
  width: 30%;
  margin-bottom: 0rem;
  transition: box-shadow 0.5s;
  padding: 0;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
  &:hover .box-content {
    opacity: 1;
    transform: translateY(0);
  }
  .b-skeleton {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
  }
  .box-content {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 1em;
    // opacity: 0;
    transition: opacity .5s ease-out,transform .5s ease-out;
    .information {
      position: absolute;
      bottom: 1em;
    }
  }
}
</style>
