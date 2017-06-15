import { createStore } from 'redux'

let DEFAULT_STAT = {values: []};

function list(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return {
        values: state.values.concat([action.text])
      }
    default:
      return state
  }
}

let store = createStore(list, DEFAULT_STAT)

export default store;
