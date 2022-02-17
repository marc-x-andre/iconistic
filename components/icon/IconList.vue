<template>
  <div>
    <div class="grid">
      <IconItem v-for="icon in displayedIcons" :key="icon" :icon="icon" />
      <b-message v-if="!displayedIcons.length" has-icon icon="magnify-close">
        There wasn't any result for the search query
        <br>
        <b>{{ filter }}</b>
      </b-message>
    </div>
    <div v-if="displayedIcons.length">
      <IconProgressBar :value="index" :max="filteredIcons.length" :when-in-viewport="loadMore" />
    </div>
  </div>
</template>

<script>
import allIcons from '@/assets/icons.json'

const BATCH_SIZE = 200

export default {
  props: {
    filter: { type: String, required: true }
  },
  data () {
    return {
      index: BATCH_SIZE,
      filteredIcons: allIcons,
      displayedIcons: allIcons.slice(0, 200)
    }
  },
  watch: {
    'filter' () {
      this.filterIcons()
    }
  },
  methods: {
    loadMore () {
      this.index += BATCH_SIZE
      if (this.index > this.filteredIcons.length) {
        this.index = this.filteredIcons.length
      }
      this.displayedIcons = this.filteredIcons.slice(0, this.index)
    },
    filterIcons () {
      this.filteredIcons = allIcons.filter(i => i.includes(this.filter))
      this.displayedIcons = this.filteredIcons.slice(0, BATCH_SIZE)
      this.index = BATCH_SIZE
    }
  }
}
</script>

<style lang="less" scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}
</style>
