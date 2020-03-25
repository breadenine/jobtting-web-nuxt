import api from '../api'

const initialState = {
  jobs: [],
  page: 1,
  size: 0,
  filter: [],
  detail: {
    name: '',
    team: '',
    closingDate: '',
    applyDate: '',
    status: '',
    distance: '',
    pay: '',
    review: '',
    recruitsite: '',
    etc: '',
    jobplanet: '',
    homepage: ''
  }
}

export const state = () => ({ ...initialState })

export const getters = {
  jobs(state) {
    return state.jobs
  },
  detail(state) {
    return state.detail
  }
}

export const mutations = {
  SET_JOBS(state, value) {
    state.jobs = value
  },
  SET_DETAIL(state, value) {
    state.detail = value
  },
  ADD_JOBS(state, value) {
    state.jobs.push(value)
  },
  UPDATE_JOBS(state, value) {
    const index = state.jobs.findIndex((item) => item.id === value.id)
    state.jobs[index] = value
  }
}

export const actions = {
  async list({ commit, dispatch, getters }) {
    const data = await api.get(`/jobs`)
    commit('SET_JOBS', data)
    return data
  },
  async detail({ state, commit }, id) {
    const data = await api.get(`/jobs/${id}`)
    commit('SET_DETAIL', data)
  },
  async create({ state, commit, dispatch }, job) {
    await api.post(`jobs`, job)
  },
  async update({ state, commit, dispatch }, job) {
    await api.patch(`jobs/${job.id}`, job)
  },
  async delete({ state, commit, dispatch }, id) {
    await api.remove(`jobs/${id}`)
  }
}
