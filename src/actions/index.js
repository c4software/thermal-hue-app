import store from '../redux';

export const add_to_list = (data) => {
  store.dispatch({
    type: 'ADD_TO_LIST',
    text: data
  })
}
