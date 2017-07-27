import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false,
  data: JSON.parse((localStorage.getItem("data")||"{}")),
  url_data: "",
  roomChooserOpen: false,
  selectedRoom: (localStorage.getItem("selectedRoom")||""),
  roomList: JSON.parse((localStorage.getItem("room")||"[]")),
  roomListDisabled: JSON.parse((localStorage.getItem("roomListDisabled")||"[]")),
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
