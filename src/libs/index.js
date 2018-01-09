import store from '../store'

export const get_remote_data = () => {
  store.commit("setLoading", true);

  get_url_data().then(url_data => {
    fetch(url_data + "?" + queryParams({get: 1}), {mode: "cors"})
      .then(response => response.json())
      .then(j => {
        // Stop the loader
        store.commit("setLoading", false);

        // Save data in the store
        store.commit("setData", j.data);
      })
  }).catch(m => {
    // No url specified in the configuration
    store.commit("setLoading", false);

    // Redirect the user to the Settings page
    window.location = "#/settings";
  });
};

export const get_remote_rooms = () => {
  get_url_data().then(url_data => {
      fetch(url_data + "?" + queryParams({getSheetsName: 1}), {mode: "cors"})
        .then(response => response.json())
        .then(j => {
          // Save the room list in the store
          store.commit("setRoomList", j.data);
        });
  }).catch(m => {});
};

export const get_url_data = () => {
  return new Promise((resolve, reject) => {
    // Get the url in the store.
    let url_data = localStorage.getItem("url_data");

    if (url_data){
      resolve(url_data);
    }else{
      reject("No url defined");
    }
  });
};

export const queryParams = (params) => {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
};
