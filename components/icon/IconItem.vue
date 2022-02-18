<template>
  <b-tooltip
    :label="formattedIconString"
    position="is-top"
    type="is-dark"
  >
    <div
      class="box"
      :class="inFavorite ? 'inFavorite' : ''"
      @click="toggleIcon"
    >
      <div :class="`mdi-${icon}`" />
    </div>
  </b-tooltip>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    icon: { type: String, required: true }
  },
  computed: {
    ...mapGetters({
      favoriteIcons: 'cart/favoriteIcons'
    }),
    formattedIconString () {
      return this.icon.replace(/-/g, () => ' ')
    },
    inFavorite () {
      return this.favoriteIcons.find(i => i.icon === this.icon)
    }
  },
  methods: {
    ...mapMutations({
      addIcon: 'cart/addIcon',
      removeIcon: 'cart/removeIcon'
    }),
    toggleIcon () {
      if (this.inFavorite) {
        this.removeIcon({ icon: this.icon })
        this.$buefy.toast.open({
          message: 'Icon removed from your cart!',
          position: 'is-bottom',
          type: 'is-warning'
        })
      } else {
        this.addIcon({ icon: this.icon })
        this.$buefy.toast.open({
          message: 'Icon added to your cart!',
          position: 'is-bottom',
          type: 'is-success'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  font-family: "Material Design Icons";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  width: 2em;
  height: 2em;
  margin-bottom: 0rem;
  transition: box-shadow 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
}
.inFavorite {
  opacity: 0.6;
  border: 1px #7857d565 solid;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
}
</style>
