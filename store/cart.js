export const state = () => ({
  favorite: {
    icons: [],
    product: []
  }
})

export const mutations = {
  addIcon (state, { icon, color }) {
    state.favorite.icons.push({
      icon,
      color: color || undefined
    })
  },
  removeIcon (state, { icon }) {
    state.favorite.icons = state.favorite.icons.filter(i => i.icon !== icon)
  }
}

export const getters = {
  favoriteIcons (state) {
    return state.favorite.icons
  }
}
