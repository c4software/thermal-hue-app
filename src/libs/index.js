import {set_data, set_url} from "../actions"

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

export const get_remote_data = () => {
    get_url_data()
    .then(url_data => {
        fetch(url_data + "?get", {mode: "cors"})
        .then(response => response.json())
        .then(j => set_data(j.data));
    })
    .catch(m => {
        location.hash = "/settings";
    });
};

export const save_url_data = (url) => {
    // Save the url to the localStorage
    localStorage.setItem("url_data", document.getElementById("url_data").value);

    // When remote server change, refresh the new data.
    get_remote_data();

    window.location.hash = "/";
};
