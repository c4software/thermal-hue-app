import { createStore } from 'redux'

let DEFAULT_STAT = {
    data: JSON.parse((localStorage.getItem("data")||{})),
    url_data: ""
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
    default:
      return state
  }
}

let store = createStore(list, DEFAULT_STAT);

export default store;
