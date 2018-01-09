import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false,
  data: JSON.parse((localStorage.getItem("data")||"{}")),
  url_data: (localStorage.getItem("url_data")||""),
  selectedRoom: (localStorage.getItem("selectedRoom")||""),
  roomList: JSON.parse((localStorage.getItem("room")||"[]")),
  roomListDisabled: JSON.parse((localStorage.getItem("roomListDisabled")||"[]")),
};

const getters = {
  isLoading: state => state.loading,
  getSelectedRoom: state => state.selectedRoom,
  getLastUpdateDate: state => state.data?state.data.last.date:"",
  getTemperature: state => {
    if (state.data.last !== undefined){
      return state.data.last.value.toFixed(1)
    }else{
      return ''
    }
  },
  getTrend: state => {
    if (state.data.trend !== undefined){
        return state.data.trend;
    }
  }
};

const actions = {};
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

    // Search for the roomName, and add it if not present.
    if (state.roomListDisabled.indexOf(roomName) === -1){
      state.roomListDisabled.push(roomName)
    }

    localStorage.setItem("roomListDisabled", JSON.stringify(roomListDisabled));
  },
  removeDisableRoom (state, roomName) {
    // Remove from the disableRoom if present.
    let indice = state.roomListDisabled.indexOf(roomName);
    if (indice !== undefined){
      state.roomListDisabled.splice(indice, 1);
      localStorage.setItem("roomListDisabled", JSON.stringify(state.roomListDisabled));
    }
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
