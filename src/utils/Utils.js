import axios from "axios";
import { toast } from "react-toastify";

export const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0);


export const setAxiosAuthToken = token => {
    if (typeof token !== "undefined" && token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const toastOnError = error => {
    if (error.response) {
        // known error
        toast.error(JSON.stringify(error.response.data));
    } else if (error.message) {
        toast.error(JSON.stringify(error.message));
    } else {
        toast.error(JSON.stringify(error));
    }
};


