import {set_data, set_url, set_room, ajax_in_progress} from "../actions"

export const queryParams = (params) => {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

export const get_url_data = () => {
    return new Promise((resolve, reject) => {
        let url_data = localStorage.getItem("url_data");
        if (url_data){
            set_url(url_data);
            resolve(url_data);
        }else{
            reject("No url defined");
        }
    });
};

export const get_remote_rooms = () => {
  get_url_data()
  .then(url_data => {
      fetch(url_data + "?" + queryParams({getSheetsName: 1}), {mode: "cors"})
      .then(response => response.json())
      .then(j => {
        set_room(j.data);
      });
  }).catch(m => {});
}

export const get_remote_data = (selectedRoom) => {
    ajax_in_progress(true);

    // If selectedRoom is undefined send "" to the remote party
    if (selectedRoom === undefined){
        selectedRoom = "";
    }

    get_url_data()
    .then(url_data => {
        fetch(url_data + "?" + queryParams({get: 1, sn: selectedRoom}), {mode: "cors"})
        .then(response => response.json())
        .then(j => {
            ajax_in_progress(false);
            set_data(j.data);
        });
    })
    .catch(m => {
        location.hash = "/settings";
        ajax_in_progress(false);
    });
};

export const save_url_data = (url) => {
    // Save the url to the localStorage
    localStorage.setItem("url_data", document.getElementById("url_data").value);

    // When remote server url change, refresh the new data.
    get_remote_data();

    // When remote server url change, refresh the room list.
    get_remote_rooms();

    window.location.hash = "/";
};
