const API =
  process.env.NODE_ENV === 'production'
    ? process.env.AWS_FREETIER_URL + '/v1'
    : 'http://localhost:3001/v1'

console.log(process.env.NODE_ENV)
console.log(process.env.AWS_FREETIER_URL)
console.log(API)
console.log(process.env.AA)
console.log(process.env.BB)
console.log(process.env.AA_BB)

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
  async init({ commit, dispatch, getters }) {
    const { data } = await this.$axios.get(`${API}/jobs`)
    commit('SET_JOBS', data)
    return data
  },
  async detail({ state, commit }, id) {
    const { data } = await this.$axios.get(`${API}/jobs/${id}`)
    commit('SET_DETAIL', data)
  },
  async create({ state, commit, dispatch }, job) {
    await this.$axios.post(`${API}/jobs`, job)
  },
  async update({ state, commit, dispatch }, job) {
    await this.$axios.patch(`${API}/jobs/${job.id}`, job)
  },
  async delete({ state, commit, dispatch }, id) {
    await this.$axios.delete(`${API}/jobs/${id}`)
  }
}
