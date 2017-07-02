import { createStore } from 'redux'

let DEFAULT_STAT = {
    data: JSON.parse((localStorage.getItem("data")||"{}")),
    url_data: "",
    ajax_in_progress: false,
    roomChooserOpen: false,
    selectedRoom: (localStorage.getItem("selectedRoom")||""),
    roomList: JSON.parse((localStorage.getItem("room")||"[]")),
    roomListDisabled: JSON.parse((localStorage.getItem("roomListDisabled")||"[]")),
};

function list(state = [], action) {
  switch (action.type) {
    case 'SET_DATA':
    {
        return {
            ...state,
            data: action.data
        };
    }
    case 'SET_ROOM':
    {
        return {
            ...state,
            roomList: action.data
        };
    }
    case 'CLEAR_DISABLED_ROOM':
    {
        localStorage.setItem("roomListDisabled", "[]");
        return {
            ...state,
            roomListDisabled: []
        };
    }
    case 'DISABLE_ROOM':
    {
        // Duplicate, and add the room if not present
        let roomListDisabled = state.roomListDisabled.slice();
        if (roomListDisabled.indexOf(action.room) === -1){
          roomListDisabled.push(action.room)
        }

        localStorage.setItem("roomListDisabled", JSON.stringify(roomListDisabled));
        return {
            ...state,
            roomListDisabled: roomListDisabled
        };
    }
    case 'REMOVE_DISABLED_ROOM':
    {
        // Duplicate, and remove if element is present in the state
        let roomListDisabled = state.roomListDisabled.slice();
        let indice = roomListDisabled.indexOf(action.room);
        if (indice !== undefined){
          roomListDisabled.splice(indice, 1);
        }

        localStorage.setItem("roomListDisabled", JSON.stringify(roomListDisabled));
        return {
            ...state,
            roomListDisabled: roomListDisabled
        };
    }
    case 'SET_URL':
    {
        return {
            ...state,
            url_data: action.url
        };
    }
    case 'TOGGLE_ROOM_CHOOSER':
    {
        return {
            ...state,
            roomChooserOpen: !state.roomChooserOpen
        };
    }
    case "AJAX_IN_PROGRESS":
    {
        return {
          ...state,
          ajax_in_progress: action.state
        };
    }
    default:
    {
      return state;
    }
  }
}

let store = createStore(list, DEFAULT_STAT);

export default store;
