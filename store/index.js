export const state = () => ({
  MODAL_JOBS_CREATE: false,
  MODAL_JOBS_UPDATE: false,
  MODAL_JOBS_COLUMN_FILTER: false
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
  },
  SET_MODAL_JOBS_COLUMN_FILTER(state, status) {
    state.MODAL_JOBS_COLUMN_FILTER = status
  }
}
