<template>
  <section class="section">
    <div class="columns is-vcentered mb-6">
      <div class="column is-5">
        <h1 class="title is-4">
          All {{ allIcons.length }} icons
        </h1>
        <p>
          You currently have <b>{{ iconsInCart.length }}</b> icon{{ 2 > iconsInCart.length ? '' : 's' }} in your favorite
        </p>
      </div>
      <div class="column">
        <b-field>
          <b-input
            v-model="search"
            placeholder="Search"
            icon="magnify"
            icon-right="close-circle"
            icon-right-clickable
            @icon-right-click="search = ''"
          />
        </b-field>
      </div>
    </div>
    <IconList :filter="search" />
    <div class="absolute-left">
      <b-tooltip
        label="Back to top"
        position="is-right"
        type="is-dark"
      >
        <b-button
          icon-right="arrow-up"
          @click="scrollToTop"
        />
      </b-tooltip>
    </div>
    <div class="absolute-right">
      <b-button
        icon-right="arrow-right"
        @click="scrollToTop"
      >
        Next Step
      </b-button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import allIcons from '@/assets/icons.json'

export default {
  data () {
    return {
      allIcons,
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      iconsInCart: 'cart/iconsInCart'
    })
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.absolute-left {
  position: fixed;
  bottom: 24px;
  left: 24px;
  button {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
}

.absolute-right {
  position: fixed;
  bottom: 24px;
  right: 24px;
  button {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
}
</style>
