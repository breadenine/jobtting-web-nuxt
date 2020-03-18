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
    const { data } = await this.$axios.get('/api/v1/jobs')
    commit('SET_JOBS', data)
    return data
  },
  async detail({ state, commit }, id) {
    const { data } = await this.$axios.get(`/api/v1/jobs/${id}`)
    // const detail = state.jobs.find((item) => item.id === parseInt(id))
    const detail = data
    commit('SET_DETAIL', detail)
  },
  create({ state, commit }, job) {
    const data = {
      id: state.jobs.length + 1,
      ...job
    }
    commit('ADD_JOBS', data)
    return data
  },
  update({ state, commit }, job) {
    const data = {
      ...job
    }
    commit('UPDATE_JOBS', data)
    return data
  }
}
