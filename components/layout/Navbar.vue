<template>
  <b-navbar is-transparent>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="title">
          Iconistic
        </h1>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="icons">
        Icons
        <span
          v-if="nbIcon"
          class="tag is-primary is-light"
        >
          {{ nbIcon }}
        </span>
      </b-navbar-item>
      <b-navbar-item href="products">
        Products
        <span
          v-if="nbProduct"
          class="tag is-primary is-light"
        >
          {{ nbProduct }}
        </span>
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button">
            Newsletter
          </a>
          <a class="button is-primary">
            <strong>Cart</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      favoriteIcons: 'cart/favoriteIcons'
    }),
    nbIcon () {
      return 0 || this.favoriteIcons.length
    },
    nbProduct () {
      return 0
    }
  }
}
</script>

<style lang="less" scoped>
.tag {
  font-size: 0.6em;
  margin-left: 0.6em;
}
</style>
