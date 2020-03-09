export const state = () => ({
  MODAL_JOBS_CREATE: false,
  MODAL_JOBS_UPDATE: false
})

export const getters = {
  getBg(state) {}
}

export const mutations = {
  SET_MODAL_JOBS_CREATE(state, status) {
    state.MODAL_JOBS_CREATE = status
  },
  SET_MODAL_JOBS_UPDATE(state, status) {
    state.MODAL_JOBS_UPDATE = status
  }
}
