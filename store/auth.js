function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state, axios) {
  axios.defaults.headers.common.Authorization = state.currentUser ? state.currentUser.token : ''
}

function getGuest() {
  return {
    type: 'guest',
    id: new Date().getTime(),
    token: new Date().getTime(),
    username: '게스트'
  }
}

// ====

export const state = () => ({
  currentUser: getSavedState('auth.currentUser')
})

export const getters = {
  loggedIn(state) {
    return !!state.currentUser
  }
}

export const mutations = {
  SET_CURRENT_USER(state, newValue) {
    state.currentUser = newValue
    saveState('auth.currentUser', newValue)
    setDefaultAuthHeaders(state, this.$axios)
  }
}

export const actions = {
  // Logs in the current user.
  logIn({ commit, dispatch, getters }, { type, username, password } = {}) {
    if (getters.loggedIn) return dispatch('validate')
    const guest = getGuest()

    commit('SET_CURRENT_USER', guest)

    return Promise.resolve(guest)

    // console.log(111)
    // console.log(type, username, password)
    // return this.$axios.post('/api/session', { type, username, password }).then((response) => {
    //   const user = response.data
    //   console.log(444, user)
    //   commit('SET_CURRENT_USER', user)
    //   return user
    // })
  },

  // Logs out the current user.
  logOut({ commit }) {
    commit('SET_CURRENT_USER', null)
  },

  // Validates the current user's token and refreshes it
  // with new data from the API.
  validate({ commit, state }) {
    if (!state.currentUser) return Promise.resolve(null)

    const guest = JSON.parse(localStorage.getItem('auth.currentUser'))
    guest.token = new Date().getTime()

    commit('SET_CURRENT_USER', guest)

    return Promise.resolve(guest)

    // return this.$axios
    //   .get('/api/session')
    //   .then((response) => {
    //     const user = response.data
    //     commit('SET_CURRENT_USER', user)
    //     return user
    //   })
    //   .catch((error) => {
    //     if (error.response && error.response.status === 401) {
    //       commit('SET_CURRENT_USER', null)
    //     } else {
    //       console.warn(error)
    //     }
    //     return null
    //   })
  }
}
