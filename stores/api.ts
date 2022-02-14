import { defineStore } from 'pinia'

// const { find, findOne } = useStrapi4()

export const useAPI = defineStore('api', {
  state: () => ({
    n: 2,
    incrementedTimes: 0,
    decrementedTimes: 0,
    numbers: [] as number[],
  }),

  getters: {
    double: (state) => state.n * 2,
  },

  actions: {
    increment(amount = 1) {
      this.incrementedTimes++
      this.n += amount
    },

    changeMe() {
      console.log('change me to test HMR')
    }
  },
})
