import store from "../redux"

export const set_data = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    store.dispatch({
        type: 'SET_DATA',
        data: data
    })
};

export const set_url = (url) => {
    store.dispatch({
        type: 'SET_URL',
        url: url
    })
};