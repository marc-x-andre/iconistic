export const state = () => ({
  iconList: []
})

export const mutations = {
  add (state, { icon, color }) {
    state.iconList.push({
      icon,
      color: color || undefined
    })
  },
  remove (state, { icon }) {
    state.iconList = state.iconList.filter(i => i.icon !== icon)
  }
}

export const getters = {
  iconsInCart (state) {
    return state.iconList
  }
}
