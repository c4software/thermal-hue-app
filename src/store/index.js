import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false,
  data: JSON.parse((localStorage.getItem("data")||"{}")),
  url_data: (localStorage.getItem("url_data")||""),
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
    state.loading = boolState;
  },
  setData (state, data) {
    localStorage.setItem("data", JSON.stringify(data));
    state.data = data;
  },
  setUrl (state, url) {
    localStorage.setItem("url_data", url);
    state.url_data = url;
  },
  toggleRoomChooser (state) {
    state.roomChooserOpen = !state.roomChooserOpen;
  },
  selectRoom (state, roomName) {
    localStorage.setItem("selectedRoom", roomName);
    state.selectedRoom = roomName;
  },
  setRoomList (state, roomList) {
    localStorage.setItem("room", JSON.stringify(roomList));
    state.roomList = roomList;
  },
  disableRoom (state, roomName) {
    // Disable the current selectedRoom if its the current room
    if (roomName === state.selectedRoom) {
      state.selectedRoom = ""
    }

    if (state.roomListDisabled.indexOf(roomName) === -1){
      state.roomListDisabled.push(roomName)
    }

    localStorage.setItem("roomListDisabled", JSON.stringify(roomListDisabled));
  },
  removeDisableRoom (state, roomName) {
    let indice = state.roomListDisabled.indexOf(roomName);
    if (indice !== undefined){
      state.roomListDisabled.splice(indice, 1);
      localStorage.setItem("roomListDisabled", JSON.stringify(state.roomListDisabled));
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
