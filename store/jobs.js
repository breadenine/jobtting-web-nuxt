export const state = () => ({
  jobs: [],
  sample: null
})

export const getters = {
  getBg(state) {}
}

export const mutations = {
  SET_SAMPLE(state, sample) {
    // console.log(sample)
    state.sample = sample
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    commit('SET_SAMPLE', '123123123')
  }
}
