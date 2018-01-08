import store from '../store'

export const get_remote_data = () => {
    store.commit("setLoading", true);
};
