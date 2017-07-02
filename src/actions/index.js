import store from "../redux"

export const set_data = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    store.dispatch({
        type: 'SET_DATA',
        data: data
    });
};

export const set_room = (data) => {
    localStorage.setItem("room", JSON.stringify(data));
    store.dispatch({
        type: 'SET_ROOM',
        data: data
    });
};

export const add_disabled_room = (roomName) => {
    store.dispatch({
        type: 'DISABLE_ROOM',
        room: roomName
    });
};

export const remove_disabled_room = (roomName) => {
    store.dispatch({
        type: 'REMOVE_DISABLED_ROOM',
        room: roomName
    });
};

export const clear_disabled_rooms = () => {
    store.dispatch({
        type: 'CLEAR_DISABLED_ROOM'
    });
};

export const set_selected_room = (roomName) => {
    store.dispatch({
        type: 'SELECTED_ROOM',
        roomName: roomName
    })
};

export const set_url = (url) => {
    store.dispatch({
        type: 'SET_URL',
        url: url
    })
};

export const toggleRoomChooser = () => {
  store.dispatch({
    type: "TOGGLE_ROOM_CHOOSER"
  })
}

export const ajax_in_progress = (state) => {
  store.dispatch({
    type: "AJAX_IN_PROGRESS",
    state: state
  })
}
