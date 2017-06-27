import { createStore } from 'redux'

let DEFAULT_STAT = {
    data: JSON.parse((localStorage.getItem("data")||"{}")),
    url_data: "",
    ajax_in_progress: false,
    selectedRoom: (localStorage.getItem("selectedRoom")||""),
    roomList: JSON.parse((localStorage.getItem("rooms")||"[]"))
};

function list(state = [], action) {
  switch (action.type) {
    case 'SET_DATA':
        return {
            ...state,
            data: action.data
        };
    case 'SET_URL':
        return {
            ...state,
            url_data: action.url
        };
    case "AJAX_IN_PROGRESS":
        return {
          ...state,
          ajax_in_progress: action.state
        };
    default:
      return state
  }
}

let store = createStore(list, DEFAULT_STAT);

export default store;
