import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false
}

const getters = {
  isLoading: state => state.loading
}

const actions = {}
const mutations = {
  setLoading (state, boolState) {
    state.loading = boolState
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
