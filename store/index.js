const state = () => ({
  sidebarOpen: true
})

const getters = {
  isSidebarOpen: state => state.sidebarOpen
}

const mutations = {
  TOGGLE_SIDEBAR (state) {
    state.sidebarOpen = !state.sidebarOpen
  },
  SET_SIDEBAR_STATUS (state, value) {
    state.sidebarOpen = value
  }
}

const actions = {
  toggleSidebar ({commit}) {
    commit('TOGGLE_SIDEBAR')
  },
  setSidebarStatus ({commit}, value) {
    commit('SET_SIDEBAR_STATUS', value)
  }
}

export {
  state,
  getters,
  mutations,
  actions
}
