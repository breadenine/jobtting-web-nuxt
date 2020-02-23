export const state = () => ({
  currentTheme: 'sample'
})

export const getters = {
  currentThemeIsDark(state) {
    return state.currentTheme === 'dark'
  }
}

export const mutations = {
  SET_THEME(state, isDark) {
    state.currentTheme = isDark
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    commit('SET_SAMPLE', '123123123')
  }
}
